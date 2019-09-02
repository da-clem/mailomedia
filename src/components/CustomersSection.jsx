import React from "react";
import { Slide } from "react-reveal";
import {
  VoyagePriveeGray,
  EvaneosGray,
  PierreRicaudGray,
  ShowRoomPriveeGray,
  EDFGray,
  VVFVillagesGray
} from "./icons";

export default function CustomersSection() {
  return (
    <div className="container my-10">
      <div className="row text-center">
        <Slide left>
          <div className="col-12 col-md-6 col-lg-4 py-5">
            <img src={VoyagePriveeGray} alt="VoyagePriveeGray" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 py-5">
            <img src={EvaneosGray} alt="EvaneosGray" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 py-5">
            <img src={PierreRicaudGray} alt="PierreRicaudGray" />
          </div>
        </Slide>
        <Slide right>
          <div className="col-12 col-md-6 col-lg-4 py-5">
            <img src={ShowRoomPriveeGray} alt="ShowRoomPriveeGray" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 py-5">
            <img src={EDFGray} alt="EDFGray" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 py-5">
            <img src={VVFVillagesGray} alt="VVFVillagesGray" />
          </div>
        </Slide>
      </div>
    </div>
  );
}
