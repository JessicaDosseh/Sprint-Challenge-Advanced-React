import React from 'react';
import * as rtl from '@testing-library/react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { useLocalStorage } from "./hooks/useLocalStorage";

// afterEach(rtl.cleanup);

  describe('App', () => {

    it('Finds text', () => {
      // ready to test!
      const wrapper = rtl.render(
        <App />
      );
      // console.log(wrapper.debug());
      const element = wrapper.queryByText(/Womens World Cup/i); 
      expect(element).toBeInTheDocument(); 
      expect(element).toBeTruthy(); 
      expect(element).toBeVisible(); 
    });


    test('renders without crashing', () => {
      render(<App />); 
    }); 


    it ('Finds item', 
    () => {
      const simulateDOM = rtl.render(<App/>); 
      const item = simulateDOM.getByText(/Players/i);
    });

    test('local sorage test', (storedValue) => {
      const currentMode = false; 
      const expected = undefined; 
      const actual = storedValue(currentMode); 
      expect(actual).toBe(expected);  
    }); 

  }); 