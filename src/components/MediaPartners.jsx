import React from 'react'
import { Slide } from "react-reveal"
import Slider from "react-slick";
import styled from "styled-components"
import {
  MediaAutoplus,
  MediaCapital,
  MediaCosmo,
  MediaCuisine,
  MediaDeco,
  MediaF,
  MediaFemme,
  MediaGQ,
  MediaGrazia,
  MediaJournal,
  MediaLemonde,
  MediaLeroutard,
  MediaM6,
  MediaMarieclaire,
  MediaSante,
  MediaSV,
  MediaTF,
  MediaTurbo,
  MediaVanity,
  MediaVerychic,
  MediaVogue,
} from "./icons";

const CustomerCard = styled.div`
`

const CustomerLogo = styled.img`
  width: 150px;
  margin: auto;
  height: 80px;
  object-fit: contain;
`

export default function MediaPartners() {
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
    <div className="container pt-4 pb-8">
      <Slide left>
        <h2 className="text-primary">Nos Partenaires Médias</h2>
        <hr className="border-primary ml-0 pb-2" />
        <Slide left>
          <Slider {...settings} >
            <CustomerCard>
              <CustomerLogo src={MediaAutoplus} alt="MediaAutoplus" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaCapital} alt="MediaCapital" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaCosmo} alt="MediaCosmo" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaCuisine} alt="MediaCuisine" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaDeco} alt="MediaDeco" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaF} alt="MediaF" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaFemme} alt="MediaFemme" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaGQ} alt="MediaGQ" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaGrazia} alt="MediaGrazia" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaJournal} alt="MediaJournal" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaLemonde} alt="MediaLemonde" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaLeroutard} alt="MediaLeroutard" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaM6} alt="MediaM6" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaMarieclaire} alt="MediaMarieclaire" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaSante} alt="MediaSante" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaSV} alt="MediaSV" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaTF} alt="MediaTF" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaTurbo} alt="MediaTurbo" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaVanity} alt="MediaVanity" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaVerychic} alt="MediaVerychic" />
            </CustomerCard>
            <CustomerCard>
              <CustomerLogo src={MediaVogue} alt="MediaVogue" />
            </CustomerCard>
          </Slider>
        </Slide>
      </Slide>
    </div>
  )
}
