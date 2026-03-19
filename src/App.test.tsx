import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders without crashing and contains main sections', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#home')).toBeInTheDocument();
    expect(container.querySelector('#about')).toBeInTheDocument();
    expect(container.querySelector('#atelier')).toBeInTheDocument();
  });
});
