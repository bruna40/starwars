import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("Testa a tela ", () => {
    it("input", () => {
      render(<App />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });
    it("input number", () => {
      render(<App />);
      const input = screen.getByRole('spinbutton')
      expect(input).toBeInTheDocument();
    });
    it("button", ()=>{
      render(<App />);
      const button = screen.getByRole('button', {  name: /aplicar/i})
      expect(button).toBeInTheDocument();
    })
  });