import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-UseContext/context/UserContext";
import { HomePage } from "../../src/09-UseContext/HomePage"

describe('<HomePage> tests', () => { 
    const user = {
        id: 1,
        name: 'ARAS'
    };

    test('should show the component without user info', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>        
        );
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
        screen.debug();
     });

     test('should show the component with user info', () => { 
        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>        
        );
        const preTag = screen.getByLabelText('pre');        
        expect( preTag.innerHTML).toContain(user.id.toString());
        expect( preTag.innerHTML).toContain(user.name);
        screen.debug();
     })
})