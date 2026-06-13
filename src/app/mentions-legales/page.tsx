import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site CTA Voyages.",
};

export default function Page() {
  return (
    <LegalPage
      title="Mentions légales"
      intro="CTA Voyages — Groupe CTA, agence de voyages située 99 rue de Fenouillet, 31200 Toulouse."
    />
  );
}
