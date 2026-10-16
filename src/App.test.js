// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MeteorShard title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MeteorShard/i);
    expect(titleElement).toBeInTheDocument();
});
