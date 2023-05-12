import React from 'react';

import { Spin } from 'antd';

type SpinSize = 'default' | 'large' | 'small';

interface Props {
  size?: SpinSize;
  isSuspense?: boolean;
}

const Spinner = ({ size = 'default', isSuspense = false }: Props) => {
  const spinSuspenseStyle: React.CSSProperties = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  };

  return <Spin style={isSuspense && spinSuspenseStyle} size={size} />;
};

export default Spinner;
