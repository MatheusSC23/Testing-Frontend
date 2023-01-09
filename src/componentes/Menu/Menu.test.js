import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Deve renderizar um link para a página inicial', () => {
  render(<Menu />);
  const linkPAginaInicial = screen.getByText('Inicial');

  expect(linkPAginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de links', () => {
  render(<Menu />);
  const listaDeLinks = screen.getAllByRole('link');

  expect(listaDeLinks).toHaveLength(4);
});

test('Não deve redenrizar o link para Extrato', () => {
  render(<Menu />);
  const linkExtrato = screen.queryByText('Extrato');

  expect(linkExtrato).not.toBeInTheDocument();
});
