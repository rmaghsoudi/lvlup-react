import { useState } from "react";

export function ModalLogic() {
  const [showModal, setShowModal] = useState(false);
  const [entry, setEntry] = useState({});

  const toggleModal = (entry={}) => {
    setEntry(entry);
    setShowModal(!showModal);
  };

  return {
    showModal,
    entry,
    toggleModal,
  };
}
