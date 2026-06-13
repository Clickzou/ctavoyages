import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et de protection des données de CTA Voyages.",
};

export default function Page() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      intro="CTA Voyages s'engage à protéger vos données personnelles et à respecter votre vie privée conformément au RGPD."
    />
  );
}
