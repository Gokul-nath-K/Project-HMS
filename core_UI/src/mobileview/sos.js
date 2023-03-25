import React from 'react'
import Appbar from './components/appbar';
export default function Sos() {
  return (
    <>
    <a className="btn" href="#open-modal"> Sos Trigger</a>
    <div id="open-modal" className="modal-window">
        <div>
            <div className="alertcompx">
                <div className="call-animation">
                    <div className="aertdiv" width={135}>⚠️</div>
                </div>
            </div>
            <div className="d-flex">
            <a href="#" title="Close" className="modal-accept">Accept</a>
            <a href="#" title="Close" className="modal-close">Reject</a>
            </div>
        </div>
    </div>

    <Appbar/>
    </>
  )
}
