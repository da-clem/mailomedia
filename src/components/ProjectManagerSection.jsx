import React from 'react'
import { ProjectManager } from "./icons";

export default function ProjectManagerSection() {
  return (
    <div className="container py-10">
      <div className="row">
        <div className="col-12 col-lg-5">
          <img
            src={ProjectManager}
            alt="ProjectManager"
            className="float-lg-right"
          />
        </div>
        <div className="col-12 col-lg-7">
          <h2 className="text-primary">
            Un interlocuteur unique, notre chef de projet.
          </h2>
          <hr className="border-primary ml-0" />
          <p>
            Votre chef de projet vous accompagne dans le choix des différents
            moyens et canaux possibles pour créer la stratégie d'acquisition
            clients de votre entreprise, et dans le pilotage des campagnes qui
            généreront des prospects qualifiés. Il vous guide pour définir le
            périmètre digital d'intervention qui répond à vos enjeux
            d'acquisition (display, programmatique, e-mailing, social,
            référencement...) avec comme mission unique d'atteindre vos
            objectifs.
          </p>
        </div>
      </div>
    </div>
  );
}

