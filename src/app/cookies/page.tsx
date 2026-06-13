import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Politique de gestion des cookies du site CTA Voyages.",
};

export default function Page() {
  return (
    <LegalPage
      title="Politique de cookies"
      intro="Ce site utilise des cookies pour améliorer votre expérience de navigation et mesurer son audience."
    />
  );
}
