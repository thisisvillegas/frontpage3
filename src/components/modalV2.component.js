import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Router } from "react-router-dom";
import userInfo from "../data/userInfo.json";
import Links from './link.modal.component'
import SettingsModal from './settingsModal.component'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function ModalWindow() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function saveData(){

  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Settings</h2>
        <Links /> */}
        <SettingsModal />
        <button onClick={saveData}>Save</button>
        <button onClick={closeModal}>Cancel</button>
        
       
      </Modal>
    </div>
  );
}

export default ModalWindow;
