import React from 'react';
import ReactDOM from "react-dom";
import "./Modal.scss";
import Close from "../../../imgs/times-solid.svg";

const modalContainer = document.querySelector("#modal");

const Modal = ({ show, close }) => 
     show ?
      ReactDOM.createPortal(
      <div
        className="modalContainer"
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title">Modal Title</h2>
            <button className="close" onClick={() => close()}>
              <img src={Close} alt="close" />
            </button>
          </header>
          <main className="modal_content">This is modal content</main>
          <footer className="modal_footer">
            <button className="modal-close" onClick={() => close()}>
              Cancel
            </button>

            <button className="submit">Submit</button>
          </footer>
        </div>
      </div>,
      modalContainer
      )
      : null;

export default Modal;