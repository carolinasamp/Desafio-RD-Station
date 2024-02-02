import { render, screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

describe('SubmitButton', () => {
  test('deve renderizar o texto informado', () => {
    render(<SubmitButton text="Obter recomendação" disabled={false} />);

    expect(
      screen.getByRole('button', { name: /obter recomendação/i }),
    ).toBeInTheDocument();
  });

  test('deve estar habilitado quando disabled for false', () => {
    render(<SubmitButton text="Enviar" disabled={false} />);

    expect(screen.getByRole('button')).toBeEnabled();
  });

  test('deve estar desabilitado quando disabled for true', () => {
    render(<SubmitButton text="Enviar" disabled />);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('deve possuir o atributo type="submit"', () => {
    render(<SubmitButton text="Enviar" disabled={false} />);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
