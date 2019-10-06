import React from "react";
import { Fade } from "react-reveal";
import Slider from "react-slick";
import styled from "styled-components"
import {
  VoyagePriveeGray,
  EvaneosGray,
  PierreRicaudGray,
  ShowRoomPriveeGray,
  EDFGray,
  VVFVillagesGray,
  PichetGray,
  FnacGray,
  IneldeaGray,
  EmmaGray,
  HomairGray,
  DartyGray,
  BlancheporteGray,
  VerychicGray,
  GFGray,
  TUIGray,
} from "./icons";

const CustomerCard = styled.div`
`

const CustomerLogo = styled.img`
  width: 150px;
  margin: auto;
  height: 80px;
  object-fit: contain;
`

export default function CustomersSection() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
          autoplay: true,
        }
      }
    ]
  };

  return (
    <div className="container my-10">
        <Fade>
          <Slider {...settings} >
            <CustomerCard>
              <CustomerLogo src={VoyagePriveeGray} alt="VoyagePriveeGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={PichetGray} alt="PichetGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={EmmaGray} alt="EmmaGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={BlancheporteGray} alt="BlancheporteGray" />
            </CustomerCard>

            <CustomerCard>
              <CustomerLogo src={PierreRicaudGray} alt="PierreRicaudGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={ShowRoomPriveeGray} alt="ShowRoomPriveeGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={EDFGray} alt="EDFGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={VVFVillagesGray} alt="VVFVillagesGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={EvaneosGray} alt="EvaneosGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={FnacGray} alt="FnacGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={HomairGray} alt="HomairGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={DartyGray} alt="DartyGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={IneldeaGray} alt="IneldeaGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={TUIGray} alt="TUIGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={VerychicGray} alt="VerychicGray" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={GFGray} alt="GFGray" />
            </CustomerCard>
          </Slider>
        </Fade>
    </div>
  );
}
