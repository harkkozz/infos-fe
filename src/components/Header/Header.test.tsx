import React from 'react';

import { render } from '@testing-library/react';
import TestApp from 'testUtils/TestApp';
import { expect, it, vi } from 'vitest';

import Header from 'components/Header';

const mockHandleOnLoginClick = vi.fn();
const mockHandleOnSignupClick = vi.fn();

it('should match snapshot', () => {
  const { baseElement } = render(
    <TestApp>
      <Header handleOnLoginClick={mockHandleOnLoginClick} handleOnSignupClick={mockHandleOnSignupClick} />
    </TestApp>
  );
  expect(baseElement).toMatchSnapshot();
});

vi.importActual('react-router-dom');

vi.mock('store/user', () => ({
  useUserStorage: vi.fn().mockReturnValue({
    token: 'asdasd',
    user: {
      id: '123123',
      name: 'asdasd',
      slug: 'asdasd',
      email: 'string',
      password: 'string'
    }
  })
}));

it('should else', () => {
  const { baseElement } = render(
    <TestApp>
      <Header handleOnLoginClick={mockHandleOnLoginClick} handleOnSignupClick={mockHandleOnSignupClick} />
    </TestApp>
  );
  expect(baseElement).toMatchSnapshot();
});
