import React from "react";
// import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Sos() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [isShow, invokeModal] = useState(false);
  const initModal = () => {
    return invokeModal(!false);
  };

  return (
    <>
      <div className="card h-100 bg-danger">
        <div className="p-2 mx-5 mt-5 rounded" onClick={initModal}>
          

          {/* <div>
  <button type="button" classname="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
  </button>
  <div classname="modal fade" id="exampleModal" tabIndex="{-1}" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div classname="modal-dialog" role="document">
      <div classname="modal-content">
        <div classname="modal-header">
          <h5 classname="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button type="button" classname="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">x</span>
          </button>
        </div>
        <div classname="modal-body">...</div>
        <div classname="modal-footer">
          <button type="button" classname="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" classname="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</div> */}

          <h1 className="text-center text-white p-2">SOS</h1>
          <h1 className="text-center heart">🤍</h1>
          <Modal show={isShow}>
            <Modal.Header closeButton onClick={initModal}>
              <Modal.Title>React Modal Popover Example</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={initModal}>
                Close
              </Button>
              <Button variant="dark" onClick={initModal}>
                Store
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}
