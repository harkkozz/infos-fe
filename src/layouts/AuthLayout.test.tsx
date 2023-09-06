import React from 'react';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import TestApp from 'testUtils/TestApp';

import AuthLayout from './AuthLayout';

describe('Auth Layout', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(
      <TestApp>
        <AuthLayout />
      </TestApp>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
