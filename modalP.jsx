import { useState } from "react";
import PopupModal from "./modal";
import "./styles.css";
export default function ModalP() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose(){
    setShowModalPopup(false);
  }
  return (
    <div className="modalBtn">
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && <PopupModal onClose={onClose}body={<h3>Custom Body</h3>} />}
    </div>
  );
}
