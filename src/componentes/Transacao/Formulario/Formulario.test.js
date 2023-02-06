import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

/* test('Deve redenrizar um campo de imput', () => {
  render(<Formulario />);
  const campoDeTexto = screen.getByPlaceholderText('Digite um valor');
  expect(campoDeTexto).toBeInTheDocument();
});

test('Deve redenrizar um campo de imput com um número', () => {
  render(<Formulario />);
  const campoDeTexto = screen.getByPlaceholderText('Digite um valor');
  expect(campoDeTexto).toHaveAttribute('type', 'number');
});

test('Deve redenrizar um campo de imput que pode ser preenchido', () => {
  render(<Formulario />);
  const campoDeTexto = screen.getByPlaceholderText('Digite um valor');
  userEvent.type(campoDeTexto, '50');
  expect(campoDeTexto).toHaveValue(50);
}); */

test('Simular seleção de transação', () => {
  render(<Formulario />);
  const campoDeSelecao = screen.getByTestId('select-opcoes');
  userEvent.selectOptions(campoDeSelecao, 'Depósito');
  expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(true);
  expect(screen.getByRole('option', { name: 'Transferência' }).selected).toBe(
    false
  );
  expect(
    screen.getByRole('option', { name: 'Selecione um tipo de transação' })
      .selected
  ).toBe(false);
});
