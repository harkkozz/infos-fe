import React from 'react';

import { Table } from 'antd';
import { ColumnType } from 'antd/es/table';

interface Props {
  data: any;
  columns: ColumnType<any>[];
}

const CustomTable = ({ data, columns }: Props) => {
  return <Table dataSource={data} columns={columns} />;
};

export default CustomTable;
