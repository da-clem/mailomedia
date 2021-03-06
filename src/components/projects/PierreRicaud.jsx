import React from 'react'
import { BGPierreRicaud } from '../icons'

export default function PierreRicaud() {
  return (
    <div className="pb-1">
      <div className="row py-3 text-center text-lg-left">
        <div className="col-12 col-lg-6 ">
          <h1>Dr Pierre Ricaud</h1>
          <p className="text-primary small">#CAC #EUROPE #MULTICANAL #MAKEUP</p>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-around justify-content-lg-end mt-2 mt-lg-0">
          <div className="pl-lg-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              objectif
            </p>
            <p>CAC<br />Nouveaux clients</p>
          </div>
          <div className="pl-lg-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              secteur
            </p>
            <p>Retail<br /> Make-up</p>
          </div>
          <div className="pl-lg-3 flex-grow-0">
            <p className="small font-weight-bold text-uppercase text-primary">
              timeframe
            </p>
            <p>2017-2019</p>
          </div>
        </div>
      </div>
      <div className="bg-light w-100">
        <img alt="BGPierreRicaud" src={BGPierreRicaud} className="w-100 object-cover" />
      </div>
      <div className="d-flex justify-content-center text-center py-3 px-lg-10">
        <p>
          L’enseigne Dr Pierre Ricaud est notre cliente depuis 2017 et appartient au groupe Yves Rocher.
          Nous avons été sollicités, afin d’<strong>acquérir de nouveaux clients</strong>, avec un <strong>coût d'acquisition
          compétitif</strong>. Notre action a été conduite avec succès, à l'<strong>échelle européenne</strong> et a fait l’objet de
          campagnes de "collecte" (enrichissement de la base de données) et d’opérations
          évènementielles sur les <strong>réseaux sociaux</strong>.<br /><br />
          Nous contribuons à rendre l’image de marque plus forte en Europe (France, Belgique,
          Allemagne...) à travers des opérations d’enrichissement de profils du PRM/CRM en nouvelles
          clientes avec un objectif de CAC (coût d’acquisition par nouvelle cliente).
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">
            <small>+</small>32<small>k</small>
          </p>
          <p>Nouvelles clientes en Europe</p>
        </div>
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">
            3
          </p>
          <p>Années de collaboration avec la marque</p>
        </div>
        <div className="col-12 col-lg-4 text-center mb-3">
          <p className="display-2 text-primary mb-1">
            36,712<small>M</small>
          </p>
          <p>Utilisateurs touchés par nos campagnes</p>
        </div>
      </div>
    </div>
  )
}

