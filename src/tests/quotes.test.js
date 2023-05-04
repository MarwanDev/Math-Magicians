import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Quotes } from '../components';

describe('Quotes', () => {
  test('displays loading message when fetching data', async () => {
    render(<Quotes />);
    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });
});
