import React, { ReactNode } from 'react';

import { Button, Modal } from 'antd';

import { ModalTypes, useModalStore } from 'store/modal';

interface IProps extends React.PropsWithChildren {
  modalType: ModalTypes;
  customFooter: ReactNode[];
}

const CustomModal: React.FC<IProps> = ({ children, customFooter, modalType }) => {
  const [type, open, close] = useModalStore((state) => [state.type, state.open, state.close]);

  return (
    <Modal
      open={type[modalType]}
      onCancel={() => close(modalType)}
      closable={false}
      footer={[
        ...customFooter,
        <Button key="close" onClick={() => close(modalType)}>
          Close
        </Button>
      ]}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
