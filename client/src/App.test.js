import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// afterEach(rtl.cleanup);

  describe('App', () => {

    it('renders without crashing + Finds text', () => {
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

    it ('Finds item', 
    () => {
      const simulateDOM = rtl.render(<App/>); 
      const item = simulateDOM.getByText(/Players/i);
    });

  }); 