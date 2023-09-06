import React from 'react';

import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

import Footer from 'components/Footer';
import TestApp from 'testUtils/TestApp';

it('should match snapshot', () => {
  const { baseElement } = render(
    <TestApp>
      <Footer />
    </TestApp>
  );
  expect(baseElement).toMatchSnapshot();
});
