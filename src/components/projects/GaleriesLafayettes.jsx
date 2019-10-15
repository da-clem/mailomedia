import React from 'react'
import { BGGaleriesLafayettes } from '../icons'

export default function GaleriesLafayettes() {
  return (
    <div className="p5-8">
      <div className="row py-3 text-center text-lg-left">
        <div className="col-12 col-lg-6 ">
          <h1>Les Galeries Lafayette</h1>
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
      <div className="bg-light w-100">
        <img alt="BGGaleriesLafayettes" src={BGGaleriesLafayettes} className="w-100 object-cover" />
      </div>
      <div className="d-flex justify-content-center text-center py-3 px-lg-10">
        <p>
          Les Galeries Lafayette ont sollicité notre intervention, afin de mener à bien des actions fortes,
          durant les périodes commerciales relatives aux 3J et aux soldes.<br /><br />
          L'objectif premier était de <strong>favoriser un plus gros volume de ventes</strong>, en privilégiant une approche
          de conquêtes de nouveaux clients mixant deux objectifs : COS (coût par vente) et CAC (coût
          d’acquisition par nouveau client).<br /><br />
          Compte tenu de la contrainte de temps à laquelle nous avons dû faire face, nous avons opté
          pour des campagnes e-mailing et display destinées à mettre en avant les produits d’appel. Notre
          <strong>engagement de performance</strong> a été respecté grâce à notre parfaite maîtrise du <strong>coût par vente</strong>.
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
