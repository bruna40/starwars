import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';



describe("Testando se digitado no input acontece uma busca personalizada", ()=>{
    it("input", () => {
      render(<App />);
      const input = screen.getByRole('textbox');
      userEvent.type(input, "teste")
      input.dispatchEvent(new Event('input'));
      expect(input.value).toBe('teste');
    });
  
    it("input number", () => {
      render(<App />);
      const input = screen.getByRole('spinbutton')
      userEvent.type(input, "")
      input.dispatchEvent(new Event('input'));
      expect(input.value).toBe('0');
    });
  
    it("Quando digitado no input o array de data deve ser mudado", ()=>{
      render(<App />);
      const input = screen.getByRole('textbox');
      userEvent.type(input, "Tatooine")
      input.dispatchEvent(new Event('input'));
      expect(input.value).toBe('Tatooine');
      setTimeout(() => {
        const info = screen.getByText('Tatooine');
        expect(info).toBeInTheDocument();
      }, 1000);
    })
  });