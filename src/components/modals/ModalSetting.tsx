import React from "react";
import { Modal } from "rsuite";
import { modalSetting } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const ModalSetting = () => {
  const dispatch = useAppDispatch();
  const settingModal = useAppSelector((state) => state.site.modalSetting);
  return (
    <Modal open={settingModal} onClose={() => dispatch(modalSetting(false))}>
      <Modal.Header>header xC</Modal.Header>
      <Modal.Body>body sxDC</Modal.Body>
      <Modal.Footer>footer ACFD</Modal.Footer>
    </Modal>
  );
};

export default ModalSetting;
