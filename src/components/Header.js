import React from "react";

function Header() {
  return (
    <div className="container text-center">
      <img src="./voiceJoy-app/assets/img/voiceJOY_main1-01.png" className="img-fluid mt-5 main-img mb-1" id="mainImage" alt="" />

      <section className="container mx-auto col-md-4 col-lg-4">
        <div className="">
          <h5>select one:</h5>
          <ul className="nav nav-pills nav-pills-primary" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="buttonAlexa" data-toggle="tab" href="#link1" role="tablist" aria-expanded="true">
                Alexa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="buttonGoogle" data-toggle="tab" href="#link2" role="tablist" aria-expanded="false">
                Google
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="buttonSiri" data-toggle="tab" href="#link3" role="tablist" aria-expanded="false">
                Siri
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Header;
