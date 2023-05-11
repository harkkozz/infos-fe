import React from 'react';

import { Spin } from 'antd';

type SpinSize = 'default' | 'large' | 'small';

interface Props {
  size?: SpinSize;
}

const Spinner = ({ size = 'default' }: Props) => {
  return <Spin size={size} />;
};

export default Spinner;
