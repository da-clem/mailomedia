import React from 'react'

export default function GaleriesLafayettes() {
  return (
    <div className="pb-8">
      <div className="row py-3 text-center text-lg-left">
        <div className="col-12 col-lg-6 ">
          <h1>Galeries Lafayettes</h1>
          <p className="text-primary small">#COS #SOLDES #BLACKFRIDAY #FRENCHDAYS</p>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-around justify-content-lg-end mt-2 mt-lg-0">
          <div className="pl-lg-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              objectif
            </p>
            <p>CAC<br />COS</p>
          </div>
          <div className="pl-lg-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              secteur
            </p>
            <p>Prêt à porter<br />parfumerie<br />make-up</p>
          </div>
          <div className="pl-lg-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              timeframe
            </p>
            <p>2019</p>
          </div>
        </div>
      </div>
      <div className="bg-light py-10 w-100"></div>
      <div className="d-flex justify-content-center text-center py-3 px-lg-10">
        <p>
          Nous accompagnons les Galeries Lafayette
          sur leur problématique d’acquisition durant
          leurs temps forts commerciaux : 3J, soldes,
          Black Friday, French Days. Délais très courts
          et objectif de COS sont au rendez-vous!
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">14.8</p>
          <p>Moyenne du COS (cost of sales) sur nos campagnes</p>
        </div>
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">4 jours</p>
          <p>Délais moyens de mise en place d’une <br /> opération d’acquisition</p>
        </div>
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">
            7,833<small>M</small>
          </p>
          <p>Utilisateurs touchés par nos campaignes</p>
        </div>
      </div>
    </div>
  )
}
