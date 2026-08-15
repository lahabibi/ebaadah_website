import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

test('submits the coming soon notification email', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      success: true,
      message: "You're on the Ebaadah launch list.",
    }),
  });

  render(<App />);

  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: 'salam@example.com' },
  });
  fireEvent.click(screen.getByRole('button', { name: /get notified/i }));

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.ebaadah.com/api/ebaadah/notify',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: expect.stringContaining('"email":"salam@example.com"'),
      }),
    );
  });

  expect(
    await screen.findByText(/you're on the ebaadah launch list/i),
  ).toBeInTheDocument();

  delete global.fetch;
});
