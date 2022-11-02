import React, { createContext, useContext, useState } from "react";
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app layout', () => {
  render(<App />);
  const footerElement = screen.getByText(/Company, Inc/i);
  const searchBarElement = screen.getByPlaceholderText(/Search.../i);
  const logoElement = screen.getByText(/Logo/i);
  
  expect(footerElement).toBeInTheDocument();
  expect(searchBarElement).toBeInTheDocument();
  expect(logoElement).toBeInTheDocument();
});