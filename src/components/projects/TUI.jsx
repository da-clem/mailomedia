import React from 'react'

export default function TUI() {
  return (
    <div className="pb-8">
      <div className="row py-3">
        <div className="col-12 col-lg-4">
          <h2>TUI</h2>
          <p className="text-center small">#ROI #EMAILING #COS #TRAVEL</p>
        </div>
        <div className="col-12 col-lg-8 d-flex justify-content-end">
          <div className="pl-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              objectif
                </p>
            <p>ROI<br />COS</p>
          </div>
          <div className="pl-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              secteur
            </p>
            <p>Travel</p>
          </div>
          <div className="pl-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              timeframe
            </p>
            <p>2019</p>
          </div>
        </div>
      </div>
      <div className="bg-light py-10 w-100"></div>
      <div className="row justify-content-center text-center py-3 px-10">
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
        <div className="col-12 pb-3">
          <h3>Data-keys</h3>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <p className="display-2 text-primary">9.5</p>
          <p>Moyenne du COS (cost of sales) sur nos campagnes</p>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <p className="display-2 text-primary">
            1100<small>%</small>
          </p>
          <p>ROI obtenu sur l’intégralité de nos campagnes</p>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <p className="display-2 text-primary">
            27,315<small>M</small>
          </p>
          <p>Utilisateurs touchés par nos campaignes</p>
        </div>
      </div>
    </div>
  )
}
