import React from 'react';

import { render } from '@testing-library/react';
import TestApp from 'testUtils/TestApp';
import { expect, it } from 'vitest';

import Footer from 'components/Footer';

it('should match snapshot', () => {
  const { baseElement } = render(
    <TestApp>
      <Footer />
    </TestApp>
  );
  expect(baseElement).toMatchSnapshot();
});
