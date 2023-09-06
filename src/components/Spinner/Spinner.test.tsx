import React from 'react';

import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

import Spinner from 'components/Spinner';
import TestApp from 'testUtils/TestApp';

it('should match snapshot', () => {
  const { baseElement } = render(
    <TestApp>
      <Spinner />
    </TestApp>
  );
  expect(baseElement).toMatchSnapshot();
});

it('should set isSuspense to true', () => {
  const { baseElement } = render(
    <TestApp>
      <Spinner isSuspense />
    </TestApp>
  );

  expect(baseElement).toMatchSnapshot();
});
