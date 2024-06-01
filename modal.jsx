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
