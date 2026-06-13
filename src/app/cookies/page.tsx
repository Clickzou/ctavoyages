import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description:
    "Politique de gestion des cookies du site CTA Voyages : définition, types de cookies, consentement, durée de conservation et paramétrage de votre navigateur.",
};

export default function Page() {
  return (
    <main className="pt-[72px]">
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-gutter">
          <h1 className="font-h1 text-[28px] sm:text-[36px] md:text-h2 text-on-surface mb-8">
            Politique de cookies
          </h1>

          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            La présente politique explique ce que sont les cookies, comment le
            site de CTA Voyages les utilise et comment vous pouvez en maîtriser
            l&apos;usage. Elle complète notre{" "}
            <Link
              href="/confidentialite"
              className="text-primary font-medium hover:underline"
            >
              politique de confidentialité
            </Link>
            .
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            1. Qu&apos;est-ce qu&apos;un cookie&nbsp;?
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Un cookie est un petit fichier texte déposé et lu sur votre terminal
            (ordinateur, tablette, smartphone) lors de la consultation d&apos;un
            site web. Il permet notamment d&apos;assurer le bon fonctionnement
            du site, de mémoriser certaines préférences ou de mesurer
            l&apos;audience. La notion de « cookies » recouvre ici l&apos;ensemble
            des traceurs déposés et lus, par exemple, lors de la consultation
            d&apos;un site ou de l&apos;utilisation d&apos;un service.
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            2. Les cookies utilisés sur ce site
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Selon votre navigation et vos choix, les catégories de cookies
            suivantes peuvent être utilisées&nbsp;:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            <li>
              <strong>Cookies strictement nécessaires&nbsp;:</strong>{" "}
              indispensables au fonctionnement du site et à la fourniture des
              services que vous demandez (navigation, sécurité, soumission des
              formulaires). Ils ne requièrent pas votre consentement et ne
              peuvent pas être désactivés depuis nos réglages.
            </li>
            <li>
              <strong>Cookies de mesure d&apos;audience&nbsp;:</strong> destinés
              à établir des statistiques de fréquentation et à améliorer le site
              (pages consultées, parcours de navigation). Lorsqu&apos;ils ne
              sont pas exemptés de consentement, ils ne sont déposés
              qu&apos;avec votre accord.
            </li>
            <li>
              <strong>Cookies fonctionnels&nbsp;:</strong> permettant de
              mémoriser vos préférences afin d&apos;améliorer votre confort de
              navigation.
            </li>
          </ul>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            [À COMPLÉTER : préciser les outils de mesure d&apos;audience
            réellement employés, ex. Google Analytics / Vercel Analytics, ou
            indiquer qu&apos;aucun outil de suivi n&apos;est utilisé.]
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            3. Polices Google Fonts
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Ce site utilise le service Google Fonts pour l&apos;affichage de ses
            polices de caractères. Selon le mode de chargement, l&apos;affichage
            de ces polices peut entraîner une connexion aux serveurs de Google
            et la transmission de données techniques telles que votre adresse
            IP. Pour limiter ce partage, les polices sont, dans la mesure du
            possible, optimisées et servies localement via le mécanisme intégré
            de Next.js. Pour en savoir plus, vous pouvez consulter la politique
            de confidentialité de Google.
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            4. Votre consentement
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            À l&apos;exception des cookies strictement nécessaires, le dépôt de
            cookies non essentiels est subordonné à votre consentement préalable
            et peut être refusé. Vous pouvez accepter, refuser ou retirer votre
            consentement à tout moment, sans que cela n&apos;affecte la licéité
            des traitements antérieurs. Le retrait du consentement est aussi
            simple que son recueil.
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            5. Durée de conservation
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            La durée de vie des cookies varie selon leur finalité. Conformément
            aux recommandations de la CNIL, les cookies soumis à consentement et
            les informations collectées par leur intermédiaire sont conservés
            pour une durée n&apos;excédant pas treize (13) mois&nbsp;; votre
            choix (acceptation ou refus) est, quant à lui, conservé pour une
            durée maximale de six (6) mois. À l&apos;expiration de ces délais,
            votre consentement vous sera de nouveau demandé.
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            6. Paramétrer votre navigateur
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Vous pouvez à tout moment configurer votre navigateur afin
            d&apos;accepter ou de refuser les cookies, d&apos;être averti
            lorsqu&apos;un cookie est déposé, ou de supprimer ceux déjà
            enregistrés. Le paramétrage diffère selon le navigateur&nbsp;:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            <li>Google Chrome&nbsp;: Réglages &gt; Confidentialité et sécurité &gt; Cookies&nbsp;;</li>
            <li>Mozilla Firefox&nbsp;: Paramètres &gt; Vie privée et sécurité&nbsp;;</li>
            <li>Safari&nbsp;: Préférences &gt; Confidentialité&nbsp;;</li>
            <li>Microsoft Edge&nbsp;: Paramètres &gt; Cookies et autorisations de site.</li>
          </ul>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed mt-3">
            La désactivation de certains cookies peut toutefois altérer votre
            expérience de navigation et l&apos;accès à certaines
            fonctionnalités du site. Pour en savoir plus sur les cookies et vos
            droits, vous pouvez consulter le site de la CNIL&nbsp;:{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              www.cnil.fr
            </a>
            .
          </p>

          <h2 className="font-h3 text-[20px] sm:text-[22px] font-bold text-on-surface mt-10 mb-4">
            7. Contact
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
            Pour toute question relative à cette politique de cookies,
            écrivez-nous à{" "}
            <a
              href="mailto:voyages@cta-events.com"
              className="text-primary font-medium hover:underline"
            >
              voyages@cta-events.com
            </a>{" "}
            ou via notre{" "}
            <Link
              href="/demande-renseignement"
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
