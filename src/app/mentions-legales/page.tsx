import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/mentions-legales" },
  title: "Mentions légales",
  description:
    "Mentions légales du site CTA Voyages : éditeur, immatriculation Atout France, garantie financière, assurance responsabilité civile professionnelle et hébergeur.",
};

export default function Page() {
  return (
    <main className="pt-[72px]">
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-gutter">
          <Breadcrumbs
            className="mb-4"
            items={[
              { label: "Accueil", href: "/" },
              { label: "Mentions légales" },
            ]}
          />
          <h1 className="font-h1 text-[28px] sm:text-[36px] md:text-h2 text-on-surface mb-8">
            Mentions légales
          </h1>

          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Conformément aux dispositions des articles 6-III et 19 de la loi
            n&deg;&nbsp;2004-575 du 21 juin 2004 pour la confiance dans
            l&apos;économie numérique (LCEN), il est porté à la connaissance des
            utilisateurs du site les présentes mentions légales.
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            1. Éditeur du site
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Le site est édité par&nbsp;:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            <li>
              <strong>Raison sociale&nbsp;:</strong> CTA Events
            </li>
            <li>
              <strong>Marque commerciale&nbsp;:</strong> CTA Voyages
            </li>
            <li>
              <strong>Forme juridique&nbsp;:</strong> SAS, société par actions
              simplifiée
            </li>
            <li>
              <strong>Capital social&nbsp;:</strong> 500&nbsp;000,00&nbsp;€
              (fixe)
            </li>
            <li>
              <strong>Siège social&nbsp;:</strong> 99 rue de Fenouillet, 31200
              Toulouse, France
            </li>
            <li>
              <strong>SIRET&nbsp;:</strong> 384 622 684 00072
            </li>
            <li>
              <strong>RCS&nbsp;:</strong> 384 622 684 R.C.S. Toulouse
            </li>
            <li>
              <strong>N&deg; TVA intracommunautaire&nbsp;:</strong>{" "}
              FR05 384 622 684
            </li>
            <li>
              <strong>Directeur de la publication&nbsp;:</strong>{" "}
              Jean-Jacques Castanet
            </li>
            <li>
              <strong>Téléphone&nbsp;:</strong>{" "}
              <a
                href="tel:+33534391391"
                className="text-primary font-medium hover:underline"
              >
                +33 (0)5 34 391 391
              </a>
            </li>
            <li>
              <strong>Email&nbsp;:</strong>{" "}
              <a
                href="mailto:contact@cta-events.com"
                className="text-primary font-medium hover:underline"
              >
                contact@cta-events.com
              </a>
            </li>
            <li>
              <strong>Horaires&nbsp;:</strong> du lundi au jeudi de 9h à 18h, le
              vendredi de 9h à 17h
            </li>
          </ul>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            2. Immatriculation Atout France
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            En qualité d&apos;agence de voyages, CTA Voyages est immatriculée au
            registre des opérateurs de voyages et de séjours tenu par Atout
            France, conformément aux articles L.211-1 et suivants du Code du
            tourisme.
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            <li>
              <strong>N&deg; d&apos;immatriculation Atout France&nbsp;:</strong>{" "}
              IM031110034
            </li>
            <li>
              <strong>Atout France&nbsp;:</strong> 79-81 rue de Clichy, 75009
              Paris
            </li>
            <li>
              <strong>Membre du réseau&nbsp;:</strong> TourCom
            </li>
          </ul>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            3. Garantie financière
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Conformément à l&apos;article L.211-18 du Code du tourisme, CTA
            Voyages dispose d&apos;une garantie financière destinée à assurer le
            remboursement des fonds reçus au titre des prestations de voyages et
            de séjours.
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            <li>
              <strong>Garant&nbsp;:</strong> AXA Assurances
            </li>
            <li>
              <strong>Adresse du garant&nbsp;:</strong>{" "}
              Espace ARAMIS, 35B route de Toulouse, 32600 L&apos;Isle-Jourdain
            </li>
            <li>
              <strong>Montant / référence de la garantie&nbsp;:</strong> ARCUS
              A58005
            </li>
          </ul>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            4. Assurance responsabilité civile professionnelle
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Conformément à l&apos;article L.211-18 du Code du tourisme, CTA
            Voyages a souscrit une assurance garantissant les conséquences
            pécuniaires de sa responsabilité civile professionnelle.
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            <li>
              <strong>Assureur (RCP)&nbsp;:</strong> HISCOX
            </li>
            <li>
              <strong>Adresse de l&apos;assureur&nbsp;:</strong> 49 avenue de
              l&apos;Opéra, 75002 Paris, France
            </li>
            <li>
              <strong>N&deg; de police&nbsp;:</strong>{" "}
              PL-FR-PSC900278430/00
            </li>
          </ul>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            5. Hébergeur du site
          </h2>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            <li>
              <strong>Hébergeur&nbsp;:</strong> Vercel Inc.
            </li>
            <li>
              <strong>Adresse&nbsp;:</strong> 440 N Barranca Avenue #4133,
              Covina, CA 91723, États-Unis
            </li>
            <li>
              <strong>Contact&nbsp;:</strong>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                vercel.com
              </a>{" "}
              — privacy@vercel.com
            </li>
          </ul>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            6. Propriété intellectuelle
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            L&apos;ensemble des éléments composant ce site (structure, textes,
            logos, marques, images, photographies, vidéos, illustrations,
            graphismes, mises en page, bases de données, code source) est la
            propriété exclusive de CTA Voyages ou de ses partenaires, et est
            protégé par les dispositions du Code de la propriété intellectuelle.
          </p>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            Toute reproduction, représentation, modification, publication,
            adaptation ou exploitation, totale ou partielle, de ces éléments,
            par quelque procédé que ce soit et sur quelque support que ce soit,
            est interdite sans l&apos;autorisation écrite préalable de CTA
            Voyages. Toute exploitation non autorisée est susceptible de
            constituer une contrefaçon engageant la responsabilité civile et
            pénale de son auteur.
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            7. Liens hypertextes
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Le site peut contenir des liens hypertextes vers des sites tiers.
            CTA Voyages n&apos;exerce aucun contrôle sur ces sites et décline
            toute responsabilité quant à leur contenu, leurs pratiques ou leur
            politique de protection des données. La création de liens vers le
            présent site est soumise à l&apos;accord préalable de CTA Voyages.
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            8. Données personnelles et cookies
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Le traitement de vos données personnelles est détaillé dans notre{" "}
            <Link
              href="/confidentialite"
              className="text-primary font-medium hover:underline"
            >
              politique de confidentialité
            </Link>
            . L&apos;utilisation des cookies est précisée dans notre{" "}
            <Link
              href="/cookies"
              className="text-primary font-medium hover:underline"
            >
              politique de cookies
            </Link>
            .
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            9. Droit applicable
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Les présentes mentions légales sont régies par le droit français. En
            cas de litige et à défaut de résolution amiable, les tribunaux
            français seront seuls compétents. Pour toute question relative au
            site, vous pouvez nous écrire à{" "}
            <a
              href="mailto:voyages@cta-events.com"
              className="text-primary font-medium hover:underline"
            >
              voyages@cta-events.com
            </a>{" "}
            ou utiliser notre{" "}
            <Link
              href="/demande-devis"
              className="text-primary font-medium hover:underline"
            >
              formulaire de demande de renseignement
            </Link>
            .
          </p>

          <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant leading-relaxed mt-12 italic">
            Dernière mise à jour : juin 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
