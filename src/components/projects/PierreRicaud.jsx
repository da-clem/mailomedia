import React from 'react'

export default function PierreRicaud() {
  return (
    <div className="pb-8">
      <div className="row py-3">
        <div className="col-12 col-lg-6 flex-grow-1">
          <h1>Dr Pierre Ricáud</h1>
          <p className="text-primary small">#CAC #EUROPE #MULTICANAL #MAKEUP</p>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-end">
          <div className="pl-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              objectif
            </p>
            <p>CAC<br />Nouveaux clients</p>
          </div>
          <div className="pl-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              secteur
            </p>
            <p>Retail<br /> Make-up</p>
          </div>
          <div className="pl-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              timeframe
            </p>
            <p>2017-2019</p>
          </div>
        </div>
      </div>
      <div className="bg-light py-10 w-100"></div>
      <div className="row text-center py-3">
        <p>
          Nous contribuons à rendre l’image de
          marque plus forte en Europe (France,
          Belgique, Allemagne...) à travers des
          opérations d’enrichissement de profils du
          PRM/CRM en nouvelles clientes avec un
          objectif de CAC.
        </p>
      </div>
      <div className="row">
        <div className="col-12 pb-3">
          <h3>Data-keys</h3>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <p className="display-2 text-primary">
            <small>+</small>32<small>k</small>
          </p>
          <p>Moyenne du COS (cost of sales) sur nos campagnes</p>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <p className="display-2 text-primary">3</p>
          <p>Années de collaboration avec la marque</p>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <p className="display-2 text-primary">36,712<small>M</small></p>
          <p>Utilisateurs touchés par nos campaignes</p>
        </div>
      </div>
    </div>
  )
}

