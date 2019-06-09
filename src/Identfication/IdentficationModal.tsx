import React, { useState } from "react";
import Modal from "react-modal";
import Quiz from "./quiz/Quiz";
import "./IdentficationModal.css";

export default function IdeficationModal() {
  const [isOpen, toggleModal] = useState(true);

  const handleToggleModal = () => {
    return toggleModal(!isOpen);
  };

  return (
    <div>
      <Modal className="identficationModal" isOpen={isOpen}>
        <Quiz toggleModal={handleToggleModal} />
      </Modal>
    </div>
  );
}
