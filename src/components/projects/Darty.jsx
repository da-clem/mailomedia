import React from 'react'

export default function Darty() {
  return (
    <div className="pb-8">
      <div className="row py-3 text-center text-lg-left">
        <div className="col-12 col-lg-6 ">
          <h1>DARTY</h1>
          <p className="text-primary small">#ROI #COS #PERFORMANCE #HIGHTECH</p>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-around justify-content-lg-end mt-2 mt-lg-0">
          <div className="pl-lg-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              objectif
            </p>
            <p>ROI<br />COS</p>
          </div>
          <div className="pl-lg-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              secteur
            </p>
            <p>High tech<br />Informatique <br /> Electroménager</p>
          </div>
          <div className="pl-lg-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              timeframe
            </p>
            <p>2018-2019</p>
          </div>
        </div>
      </div>
      <div className="bg-light py-10 w-100"></div>
      <div className="d-flex justify-content-center text-center py-3 px-lg-10">
        <p>
          Nous accompagnons la marque dans ses
          périodes commerciales fortes (soldes, Black
          friday...) <br /> pour atteindre ses objectifs
          d’acquisition de nouveaux clients et de
          conversions dans un contexte très ROIste.
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">11.3</p>
          <p>Moyenne du COS (cost of sales) sur nos campagnes</p>
        </div>
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">2</p>
          <p>Années de collaboration avec la marque</p>
        </div>
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">
            7,515<small>M</small>
          </p>
          <p>Utilisateurs touchés par nos campaignes</p>
        </div>
      </div>
    </div>
  )
}
