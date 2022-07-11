import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mockFetch from '../mocks/fetch';
import planetsResponse from '../mocks/planetsResponse';
import userEvent from '@testing-library/user-event';


describe("Esperado que esteja no documento: ", () => {
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

describe('Testa se os filtros estão funcionando corretamente', () => {

  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
    render(<App/>);
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  const results = planetsResponse.results
  delete results[0].residents

  it('Testa o filtro para valores numéricos', async () => {

    await waitFor(() => screen.getByRole('table'));
    const columnInput = screen.getByTestId('column-filter')
    const buttonTrash = screen.getByTestId('filter')
    const comparisonInput = screen.getByTestId('comparison-filter')
    const valueInput = screen.getByTestId('value-filter')
    const buttonInput = screen.getByTestId('button-filter')

    userEvent.selectOptions(columnInput, 'orbital_period')
    userEvent.selectOptions(comparisonInput, 'maior que')
    userEvent.type(valueInput, '1000')
    userEvent.click(buttonInput)
    userEvent.click(buttonTrash)

    await waitFor(() => {
      expect(screen.getByText('Bespin')).toBeInTheDocument()
      expect(screen.getByText('Yavin IV')).toBeInTheDocument()
    });
  })

  it("Testa diameter", async () => {

      await waitFor(() => screen.getByRole('table'));

      const columnInput = screen.getByTestId('column-filter')
      const comparisonInput = screen.getByTestId('comparison-filter')
      const valueInput = screen.getByTestId('value-filter')
      const buttonInput = screen.getByTestId('button-filter')

      userEvent.selectOptions(columnInput, 'diameter')
      userEvent.selectOptions(comparisonInput, 'igual a')
      userEvent.type(valueInput, '12500')
      userEvent.click(buttonInput)

      await waitFor(() => {
        expect(screen.getByText(/diameter igual a 012500/i)).toBeInTheDocument()
      });
    })

    it("Testa suface_water", async () => {

      await waitFor(() => screen.getByRole('table'));

      const columnInput = screen.getByTestId('column-filter')
      const comparisonInput = screen.getByTestId('comparison-filter')
      const valueInput = screen.getByTestId('value-filter')
      const buttonInput = screen.getByTestId('button-filter')

      userEvent.selectOptions(columnInput, 'surface_water')
      userEvent.selectOptions(comparisonInput, 'menor que')
      userEvent.type(valueInput, '1000')
      userEvent.click(buttonInput)

      await waitFor(() => {
        expect(screen.getByText(/surface_water menor que 01000/i)).toBeInTheDocument()
      });
    })

  it("Testa se a tabela aparece corretamente", async () => {

    await waitFor(() => screen.getByRole('table'));
    expect(screen.getByText('Bespin')).toBeInTheDocument();
    expect(screen.getByText('Yavin IV')).toBeInTheDocument();
  })


  it("testa button de limpar filtros", async () => {

    await waitFor(() => screen.getByRole('table'));

    const buttonClear = screen.getByRole('button', {  name: /limpar filtros/i})

    const columnInput = screen.getByTestId('column-filter')
    const comparisonInput = screen.getByTestId('comparison-filter')
    const valueInput = screen.getByTestId('value-filter')
    const buttonInput = screen.getByTestId('button-filter')

    userEvent.selectOptions(columnInput, 'population')
    userEvent.selectOptions(comparisonInput, 'maior que')
    userEvent.type(valueInput, '1000')
    userEvent.click(buttonInput)

    waitFor(() => {
      expect(screen.getByText(/population maior que 10000/i)).toBeInTheDocument()
    })

    userEvent.click(buttonClear)

    waitFor(() => {
      expect(screen.getByText(/population maior que 10000/i)).not.toBeInTheDocument()
    })
  })

})