import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import  Formulario  from './index';

test('Deve redenrizar um campo de imput', () => {
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
  userEvent.type(campoDeTexto, '50')
  expect(campoDeTexto).toHaveValue(50);
});
