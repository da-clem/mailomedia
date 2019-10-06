import React from 'react'
import { BGTUI } from '../icons'

export default function TUI() {
  return (
    <div className="pb-8">
      <div className="row py-3 text-center text-lg-left">
        <div className="col-12 col-lg-6 ">
          <h1>TUI</h1>
          <p className="text-primary small">#ROI #EMAILING #COS #TRAVEL</p>
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
            <p>Travel</p>
          </div>
          <div className="pl-lg-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              timeframe
            </p>
            <p>2019</p>
          </div>
        </div>
      </div>
      <div className="bg-light w-100">
        <img alt="BGTUI" src={BGTUI} className="w-100 object-cover" />
      </div>
      <div className="d-flex justify-content-center text-center py-3 px-lg-10">
        <p>
          Nous pilotons la diffusion des campagnes
          de ventes directes en e-mailing avec pour
          objectif principal de toujours diminuer le
          COS dans un contexte concurrentiel très
          fort et des périodes commerciales
          saisonnières.
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">9.5</p>
          <p>Moyenne du COS (cost of sales) sur nos campagnes</p>
        </div>
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">
            1100<small>%</small>
          </p>
          <p>ROI obtenu sur l’intégralité de nos campagnes</p>
        </div>
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">
            27,315<small>M</small>
          </p>
          <p>Utilisateurs touchés par nos campaignes</p>
        </div>
      </div>
    </div>
  )
}
