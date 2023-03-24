import React from "react";
// import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Sos() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="card h-100 bg-danger">
        <div className="p-2 mx-5 mt-5 rounded">
          <h1 className="text-center text-white p-2">SOS</h1>
          <h1 className="text-center heart">🤍</h1>
        </div>
      </div>
    </>
  );
}
