import React from 'react'

export default function Model() {
  return (
    <>
    <a className="btn" href="#open-modal"> Modal</a>
    <div id="open-modal" className="modal-window">
        <div>
        <a href="#" title="Close" className="modal-close">Close</a>
        <h1>Voilà!</h1>
        <div>css model</div>
        </div>
    </div>
    </>
  )
}
