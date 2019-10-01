import React from "react";
import { Slide } from "react-reveal";
import styled from "styled-components"
import {
  VoyagePriveeGray,
  EvaneosGray,
  PierreRicaudGray,
  ShowRoomPriveeGray,
  EDFGray,
  VVFVillagesGray
} from "./icons";

const CustomerLogo = styled.img`
  width: 100%;
`

export default function CustomersSection() {
  return (
    <div className="container my-10">
      <div className="row text-center">
        <Slide left>
          <div className="col-6 col-lg-4 py-3 px-2 py-lg-5">
            <CustomerLogo src={VoyagePriveeGray} alt="VoyagePriveeGray" />
          </div>
          <div className="col-6 col-lg-4 py-3 px-2 py-lg-5">
            <CustomerLogo src={EvaneosGray} alt="EvaneosGray" />
          </div>
          <div className="col-6 col-lg-4 py-3 px-2 py-lg-5">
            <CustomerLogo src={PierreRicaudGray} alt="PierreRicaudGray" />
          </div>
        </Slide>
        <Slide right>
          <div className="col-6 col-lg-4 py-3 px-2 py-lg-5">
            <CustomerLogo src={ShowRoomPriveeGray} alt="ShowRoomPriveeGray" />
          </div>
          <div className="col-6 col-lg-4 py-3 px-2 py-lg-5">
            <CustomerLogo src={EDFGray} alt="EDFGray" />
          </div>
          <div className="col-6 col-lg-4 py-3 px-2 py-lg-5">
            <CustomerLogo src={VVFVillagesGray} alt="VVFVillagesGray" />
          </div>
        </Slide>
      </div>
    </div>
  );
}
