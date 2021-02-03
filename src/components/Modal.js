import React from "react";

function Modal() {
  return (
    <div className="modal fade" id="favorites" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              <i className="far fa-star"></i> FAVORITES
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" id="faveModal">
            <button className="btn btn-primary btn-lg btn-block favButton" id="favButton1">
              Thank you. <br />
              <span id="beKind">(Be kind, even to robots.)</span> <i className="fas fa-robot"></i>{" "}
              <span className="float-right">
                <i className="far fa-trash-alt" id="delete"></i>
              </span>
            </button>

            <button className="btn btn-primary btn-lg btn-block favButton" id="favButton2">
              What is the weather?{" "}
              <span className="float-right">
                <i className="far fa-trash-alt" id="delete"></i>
              </span>
            </button>
            <button className="btn btn-primary btn-lg btn-block favButton " id="favButton3">
              Set a 25 minute timer.{" "}
              <span className="float-right">
                <i className="far fa-trash-alt" id="delete"></i>
              </span>
            </button>
            <button className="btn btn-primary btn-lg btn-block favButton " id="favButton4">
              Turn on the lights.{" "}
              <span className="float-right">
                <i className="far fa-trash-alt" id="delete"></i>
              </span>
            </button>
            <button className="btn btn-primary btn-lg btn-block favButton" id="favButton5">
              Turn off the lights.{" "}
              <span className="float-right">
                <i className="far fa-trash-alt" id="delete"></i>
              </span>
            </button>
            <button className="btn btn-primary btn-lg btn-block favButton" id="favButton6">
              Please, stop.{" "}
              <span className="float-right">
                <i className="far fa-trash-alt" id="delete"></i>
              </span>
            </button>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
