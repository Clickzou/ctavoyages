import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et de protection des données personnelles de CTA Voyages, conforme au RGPD : données collectées, finalités, durées de conservation et droits des utilisateurs.",
};

export default function Page() {
  return (
    <main className="pt-[72px]">
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-gutter">
          <h1 className="font-h1 text-[28px] sm:text-[36px] md:text-h2 text-on-surface mb-8">
            Politique de confidentialité
          </h1>

          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            CTA Voyages accorde une grande importance à la protection de votre
            vie privée et de vos données à caractère personnel. La présente
            politique a pour objet de vous informer, conformément au Règlement
            (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés modifiée,
            de la manière dont nous collectons, utilisons et protégeons vos
            données lorsque vous naviguez sur notre site ou utilisez nos
            formulaires.
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            1. Responsable du traitement
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Le responsable du traitement des données est&nbsp;:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            <li>CTA Voyages — Groupe CTA</li>
            <li>99 rue de Fenouillet, 31200 Toulouse, France</li>
            <li>
              Email&nbsp;:{" "}
              <a
                href="mailto:voyages@cta-events.com"
                className="text-primary font-medium hover:underline"
              >
                voyages@cta-events.com
              </a>
            </li>
            <li>
              Téléphone&nbsp;:{" "}
              <a
                href="tel:+33534391391"
                className="text-primary font-medium hover:underline"
              >
                +33 (0)5 34 391 391
              </a>
            </li>
            <li>
              SIRET&nbsp;: [À COMPLÉTER : numéro SIRET]
            </li>
          </ul>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            2. Données que nous collectons
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Nous collectons uniquement les données que vous nous transmettez
            volontairement via nos formulaires (demande de devis, demande de
            renseignement, inscription à la newsletter) ainsi que certaines
            données techniques de navigation. Il peut notamment s&apos;agir
            de&nbsp;:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            <li>
              données d&apos;identité&nbsp;: civilité, nom, prénom&nbsp;;
            </li>
            <li>
              données de contact&nbsp;: adresse email, numéro de téléphone&nbsp;;
            </li>
            <li>
              données relatives à votre projet de voyage&nbsp;: destination,
              dates, nombre de voyageurs, budget, préférences et messages
              libres&nbsp;;
            </li>
            <li>
              données techniques&nbsp;: adresse IP, type de navigateur, données
              de connexion et de navigation (voir notre{" "}
              <Link
                href="/cookies"
                className="text-primary font-medium hover:underline"
              >
                politique de cookies
              </Link>
              ).
            </li>
          </ul>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            Les champs obligatoires des formulaires sont signalés comme tels.
            À défaut de renseignement, nous pourrions être dans
            l&apos;impossibilité de traiter votre demande.
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            3. Finalités et bases légales du traitement
          </h2>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            <li>
              <strong>Répondre à vos demandes de devis et de
              renseignement</strong> et établir des propositions de voyage —
              base légale&nbsp;: mesures précontractuelles prises à votre
              demande / intérêt légitime.
            </li>
            <li>
              <strong>Gérer la relation commerciale</strong> et le suivi de
              votre dossier — base légale&nbsp;: exécution du contrat ou de
              mesures précontractuelles.
            </li>
            <li>
              <strong>Vous adresser notre newsletter</strong> et nos offres —
              base légale&nbsp;: votre consentement, que vous pouvez retirer à
              tout moment.
            </li>
            <li>
              <strong>Assurer la sécurité et le bon fonctionnement du
              site</strong> et réaliser des mesures d&apos;audience — base
              légale&nbsp;: intérêt légitime et/ou consentement selon le type de
              cookie.
            </li>
            <li>
              <strong>Respecter nos obligations légales et
              réglementaires</strong> — base légale&nbsp;: obligation légale.
            </li>
          </ul>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            4. Destinataires des données
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Vos données sont destinées aux services internes habilités de CTA
            Voyages. Elles peuvent également être communiquées aux destinataires
            suivants, dans la limite de leurs attributions&nbsp;:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            <li>
              <strong>FormSubmit</strong>, prestataire technique
              (sous-traitant) assurant l&apos;acheminement par email des
              messages envoyés depuis nos formulaires&nbsp;;
            </li>
            <li>
              <strong>le réseau TourCom</strong>, dont CTA Voyages est membre,
              ainsi que nos partenaires et prestataires de voyage (compagnies,
              hôteliers, réceptifs), lorsque cela est nécessaire à la
              réalisation de votre projet&nbsp;;
            </li>
            <li>
              notre <strong>hébergeur</strong> et nos prestataires techniques
              intervenant pour le fonctionnement du site&nbsp;;
            </li>
            <li>
              les autorités administratives ou judiciaires, lorsque la loi
              l&apos;exige.
            </li>
          </ul>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            Nous ne vendons ni ne louons vos données personnelles à des tiers.
            En cas de transfert de données hors de l&apos;Union européenne par
            l&apos;un de nos sous-traitants, des garanties appropriées (clauses
            contractuelles types) sont mises en œuvre.
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            5. Durées de conservation
          </h2>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            <li>
              <strong>Prospects / demandes sans suite&nbsp;:</strong> 3 ans à
              compter du dernier contact.
            </li>
            <li>
              <strong>Clients&nbsp;:</strong> pendant la durée de la relation
              commerciale, puis archivage selon les obligations légales
              applicables (notamment comptables et fiscales).
            </li>
            <li>
              <strong>Newsletter&nbsp;:</strong> jusqu&apos;au retrait de votre
              consentement (désinscription).
            </li>
            <li>
              <strong>Données de navigation / cookies&nbsp;:</strong> selon les
              durées précisées dans notre{" "}
              <Link
                href="/cookies"
                className="text-primary font-medium hover:underline"
              >
                politique de cookies
              </Link>
              .
            </li>
          </ul>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            6. Vos droits
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Conformément à la réglementation, vous disposez des droits suivants
            sur vos données&nbsp;:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            <li>droit d&apos;accès et d&apos;information&nbsp;;</li>
            <li>droit de rectification&nbsp;;</li>
            <li>droit à l&apos;effacement (« droit à l&apos;oubli »)&nbsp;;</li>
            <li>droit à la limitation du traitement&nbsp;;</li>
            <li>droit d&apos;opposition, notamment à la prospection&nbsp;;</li>
            <li>droit à la portabilité de vos données&nbsp;;</li>
            <li>
              droit de retirer votre consentement à tout moment, sans remettre
              en cause la licéité des traitements antérieurs&nbsp;;
            </li>
            <li>
              droit de définir des directives relatives au sort de vos données
              après votre décès.
            </li>
          </ul>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            Pour exercer ces droits, écrivez-nous à{" "}
            <a
              href="mailto:voyages@cta-events.com"
              className="text-primary font-medium hover:underline"
            >
              voyages@cta-events.com
            </a>{" "}
            ou par courrier à&nbsp;: CTA Voyages, 99 rue de Fenouillet, 31200
            Toulouse. Une preuve d&apos;identité pourra vous être demandée. Si
            vous estimez, après nous avoir contactés, que vos droits ne sont pas
            respectés, vous pouvez introduire une réclamation auprès de la CNIL
            (3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              www.cnil.fr
            </a>
            ).
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            7. Sécurité des données
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            CTA Voyages met en œuvre des mesures techniques et
            organisationnelles appropriées (transmission chiffrée via HTTPS,
            restriction des accès, sélection de sous-traitants présentant des
            garanties suffisantes) afin de préserver la confidentialité,
            l&apos;intégrité et la disponibilité de vos données et de les
            protéger contre tout accès non autorisé, perte ou altération.
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            8. Délégué à la protection des données (DPO)
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Pour toute question relative à la protection de vos données, vous
            pouvez contacter notre référent en la matière&nbsp;:{" "}
            [À COMPLÉTER : nom et coordonnées du DPO ou du référent données, si
            désigné] — à défaut, par email à{" "}
            <a
              href="mailto:voyages@cta-events.com"
              className="text-primary font-medium hover:underline"
            >
              voyages@cta-events.com
            </a>
            .
          </p>

          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-6">
            Vous pouvez également consulter nos{" "}
            <Link
              href="/mentions-legales"
              className="text-primary font-medium hover:underline"
            >
              mentions légales
            </Link>{" "}
            ou nous adresser une{" "}
            <Link
              href="/demande-renseignement"
              className="text-primary font-medium hover:underline"
            >
              demande de renseignement
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
