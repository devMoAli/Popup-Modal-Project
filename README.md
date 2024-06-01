# Popup-Modal-Project

![Popup-Modal-Project](Popup-Modal.gif)

Passing Props from Parent Component modalP to child PopupModal
import { useState } from "react";
import PopupModal from "./modal";
import "./styles.css";
export default function ModalP() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div className="modalBtn">
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <PopupModal onClose={onClose} body={<h3>Custom Body</h3>} />
      )}
    </div>
  );
}
----------
import React from "react";
import "./styles.css";

export default function PopupModal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "PopupModal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose}className="close-modal-icon">&times;</span>
          <h3>{header ? header : "Header"}</h3>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is Modal Body...</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h3>Footer</h3>}</div>
      </div>
    </div>
  );
}
