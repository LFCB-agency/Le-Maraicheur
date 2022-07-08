import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../styles/components/modal.scss";

const Modal = ({ isShowing, hide, title, body }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div className="modal-wrapper">
          <div>
            <div>
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={hide}
                >
                  X
                </button>
              </div>
              <div className="modal-body">
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            </div>
            <div className="button-modal-container">
              <Link to="/preorder">
                <button type="button" className="modal-button-preorder">
                  {" "}
                  JE COMMANDE{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

export default Modal;
