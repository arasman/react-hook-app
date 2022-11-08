import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-UseContext/context/UserContext";
import { LoginPage } from "../../src/09-UseContext/LoginPage";

describe('<LoginPage/> tests', () => {
    test('should show the component without the user', () => {
      render(
        <UserContext.Provider value={{user: null}}>
            <LoginPage/>
        </UserContext.Provider>
      );
      screen.debug();
      const preTag = screen.getByLabelText('pre');
      expect( preTag.innerHTML).toBe('null');
    })
    
    test('should call setUser on click button', () => { 
        const user = {id:123, name:'aras', email: 'aras@test.com'};
        const setUserMock = jest.fn();        
        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
          );
          screen.debug();
          const setUserButton = screen.getByRole('button');
          fireEvent.click(setUserButton);
          expect(setUserMock).toHaveBeenCalledWith(user);
    })
  
})
