import React from "react";
import { Fade } from "react-reveal";
import { Performance, Expertise, Social, Transparence } from "./icons";

export default function CustomerAcquisitionSection() {
  return (
    <div className="container text-center pt-4" id="solutions">
      <Fade>
        <h2 className="text-primary">A la conquête de nouveaux clients</h2>
        <hr className="border-primary" />
      </Fade>
      <Fade>
        <p className="font-weight-bold text-uppercase mb-2">L’ADN PARFAITE : </p>
        <p className="mb-6">
          Nos valeurs sont nos piliers fondateurs depuis maintenant plus de 5 ans.
          Vous souhaitez un engagement ? Le voici :
        </p>
      </Fade>
      <section className="row">
        <Fade>
          <div className="col-12 col-lg-6 pb-2">
            <article className="h-100 rounded shadow-lg pt-4 pb-6 px-2 px-md-4 px-lg-5 bg-gradient-secondary text-white">
              <header>
                <img src={Performance} alt="Performance" />
                <h3 className="my-2">Performance</h3>
              </header>
              <p>
                La culture du résultat avant tout. Assurer les KPIs et répondre
                aux objectifs. C’est notre valeur fondatrice, notre première
                promesse auprès de tous nos annonceurs.
              </p>
            </article>
          </div>
        </Fade>
        <Fade>
          <div className="col-12 col-lg-6 pb-2">
            <article className="h-100 rounded shadow-lg pt-4 pb-6 px-2 px-md-4 px-lg-5">
              <header>
                <img src={Expertise} alt="Expertise" />
                <h3 className="my-2">Expertise</h3>
              </header>
              <p>
                Connaître parfaitement l’éco-système digital et ses ressources.
                Nous assurons ka pleine maitrise de l’utilisation des principaux
                leviers d’acquisition pour obtenir les meilleures performances.
              </p>
            </article>
          </div>
        </Fade>
        <Fade>
          <div className="col-12 col-lg-6 pb-2">
            <article className="h-100 rounded shadow-lg pt-4 pb-6 px-2 px-md-4 px-lg-5">
              <header>
                <img src={Social} alt="Social" />
                <h3 className="my-2">Conseil</h3>
              </header>
              <p>
                Offrir le meilleur accompagnement à travers une équipe composée de
                spécialistes toujours disponibles. Des chefs de projets
                entièrement dédiés à la résolution de problématiques en apportant
                les recommandations nécessaires
              </p>
            </article>
          </div>
        </Fade>
        <Fade>
          <div className="col-12 col-lg-6 pb-2">
            <article className="h-100 rounded shadow-lg pt-4 pb-6 px-2 px-md-4 px-lg-5 bg-gradient-primary text-white">
              <header>
                <img src={Transparence} alt="Transparence" />
                <h3 className="my-2">Transparence</h3>
              </header>
              <p>
                La diffusion de toutes nos campagnes s’appuie sur un média plan
                transparant aux sources vérifiées. Nos actions sont
                systématiquement reportées et communiquées{" "}
              </p>
            </article>
          </div>
        </Fade>
      </section>
    </div>
  );
}
