import React from 'react';

import { Spin } from 'antd';

type SpinSize = 'default' | 'large' | 'small';

interface Props {
  size?: SpinSize;
  isSuspense?: boolean;
}

const Spinner: React.FC<Props> = ({ size = 'default', isSuspense = false }) => {
  const spinSuspenseStyle: React.CSSProperties = isSuspense && {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  };

  return <Spin style={{ ...spinSuspenseStyle }} size={size} />;
};

export default Spinner;
