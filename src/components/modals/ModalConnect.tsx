import React from "react";
import { Modal } from "rsuite";
import { modalConnect } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const ModalConnect = () => {
  const dispatch = useAppDispatch();
  const connectModal = useAppSelector((state) => state.site.modalConnect);
  return (
    <Modal open={connectModal} onClose={() => dispatch(modalConnect(false))}>
      <Modal.Header>header</Modal.Header>
      <Modal.Body>body</Modal.Body>
      <Modal.Footer>footer</Modal.Footer>
    </Modal>
  );
};

export default ModalConnect;
