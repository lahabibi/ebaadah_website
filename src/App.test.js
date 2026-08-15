import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Ebaadah landing page', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /a beautiful new ebaadah app is coming soon/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByText(/your companion in worship/i)).toBeInTheDocument();
  expect(screen.getByText(/launching soon\. stay connected/i)).toBeInTheDocument();
});
