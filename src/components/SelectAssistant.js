import React, { useState } from "react";

function SelectAssistant({ assistant, setCommand }) {
  const [value, setValue] = useState("");

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <form className="mb-5" onSubmit={() => setCommand(value)}>
          <div className="form-group">
            <input onChange={e => setValue(e.target.value)} value={value} name="" id="text-input" className="form-control form-control-lg mt-5 input-custom" placeholder="" />
          </div>

          <button className="btn btn-primary btn-lg btn-block">COMMUNICATE</button>
        </form>

        <button className="btn btn-default btn-lg btn-block mb-5 negative-margin" id="favoritesButton" data-toggle="modal" data-target="#favorites">
          <i className="far fa-star"></i> FAVORITES
        </button>
        <a href="#">
          <button className="btn btn-success btn-lg btn-block negative-margin" id="saveButton">
            Save
          </button>
        </a>
      </div>
    </div>
  );
}

export default SelectAssistant;
