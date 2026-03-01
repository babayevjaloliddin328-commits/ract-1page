import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand logo', () => {
  render(<App />);
  const logoElement = screen.getByText(/BrandLogo/i);
  expect(logoElement).toBeInTheDocument();
});
