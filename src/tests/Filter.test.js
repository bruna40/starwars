import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mockFetch from '../mocks/fetch';
import planetsResponse from '../mocks/planetsResponse';
import userEvent from '@testing-library/user-event';


describe('Testa se os filtros', () => {

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
    const comparisonInput = screen.getByTestId('comparison-filter')
    const valueInput = screen.getByTestId('value-filter')
    const buttonInput = screen.getByTestId('button-filter')

    userEvent.selectOptions(columnInput, 'orbital_period')
    userEvent.selectOptions(comparisonInput, 'maior que')
    userEvent.type(valueInput, '1000')
    userEvent.click(buttonInput)

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
  it("Testa se o input ascendente", async () => {

    await waitFor(() => screen.getByRole('table'));
    const columnInput = screen.getByTestId('column-sort')
    const comparisonInput = screen.getByTestId('column-sort-input-asc')
    const buttonInput = screen.getByTestId('column-sort-button')

    userEvent.selectOptions(columnInput, 'population')
    userEvent.click(comparisonInput)
    userEvent.click(buttonInput)

    await waitFor(() => {
      const allNames = screen.getAllByTestId('planet-name')
      expect(allNames[0].textContent).toBe('Dagobah')
    });
  });

  it("Testa se o input ascendente está funcionando", async () => {

    await waitFor(() => screen.getByRole('table'));
    const columnInput = screen.getByTestId('column-sort')
    const comparisonInput = screen.getByTestId('column-sort-input-desc')
    const buttonInput = screen.getByTestId('column-sort-button')

    userEvent.selectOptions(columnInput, 'population')
    userEvent.click(comparisonInput)
    userEvent.click(buttonInput)

    await waitFor(() => {
      const allNames = screen.getAllByTestId('planet-name')
      expect(allNames[0].textContent).toBe('Coruscant')
    });
  });


  it("testa botao de limpar filtros", async () => {

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
