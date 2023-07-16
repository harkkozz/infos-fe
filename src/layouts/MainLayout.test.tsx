import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import MainRouter from 'router/MainRouter';

import MainLayout from './MainLayout';

describe('Main Layout', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(<MainLayout />, { wrapper: MainRouter });

    expect(baseElement).toMatchSnapshot();
  });

  it('should match snapshot with footer', () => {
    const { baseElement } = render(<MainLayout hasFooter />, { wrapper: BrowserRouter });

    expect(baseElement).toMatchSnapshot();
  });
});
