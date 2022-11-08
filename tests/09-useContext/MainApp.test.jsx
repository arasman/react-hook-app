import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from '../../src/09-UseContext'
describe('<MainApp/> tests', () => { 
    test('should show the <HomePage/>', () => {
      render(
        <MemoryRouter>
            <MainApp/>
        </MemoryRouter>      
      );
      screen.debug();
      expect( screen.getByText('Home Page')).toBeTruthy();
    })

    test('should show the <LoginPage/>', () => {
        render(
          <MemoryRouter initialEntries={['/login']}>
              <MainApp/>
          </MemoryRouter>      
        );
        screen.debug();
        expect( screen.getByText('Login Page')).toBeTruthy();
        const anchors = screen.getAllByRole('link');
        expect( anchors[3].className).toContain('active');
      })
    
      test('should show the <AboutPage/>', () => {
        render(
          <MemoryRouter initialEntries={['/about']}>
              <MainApp/>
          </MemoryRouter>      
        );
        screen.debug();
        expect( screen.getByText('About Page')).toBeTruthy();
        const anchors = screen.getAllByRole('link');
        expect( anchors[2].className).toContain('active');
      })
})