import React, { PropsWithChildren } from 'react';

import { MemoryRouter } from 'react-router-dom';

interface Props {
  path?: string;
}

const Test: React.FC<PropsWithChildren<Props>> = ({ path, children }) => {
  return <MemoryRouter initialEntries={[!path ? '/' : path]}>{children}</MemoryRouter>;
};

export default Test;
