import React from 'react';
import { Modal } from 'antd';

interface IProps extends React.PropsWithChildren {
  isModalOpen: boolean;
  handleOnOk: () => void;
  handleOnCancel: () => void;
}

const CustomModal: React.FC<IProps> = ({ children, isModalOpen, handleOnCancel, handleOnOk }) => (
  <Modal open={isModalOpen} onOk={handleOnOk} onCancel={handleOnCancel}>
    {children}
  </Modal>
);

export default CustomModal;
