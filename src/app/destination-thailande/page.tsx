import type { Metadata } from "next";
import DestinationTemplate from "@/components/destination/DestinationTemplate";
import thailande from "@/lib/destination-content/thailande";

// Publication programmée : les articles proposés sur la fiche se mettent à jour
// au plus toutes les heures (un article paru à sa date y entre sans redéploiement).
export const revalidate = 3600;

export const metadata: Metadata = {
  alternates: { canonical: "/destination-thailande" },
  title: thailande.meta.title,
  description: thailande.meta.description,
};

export default function DestinationThailandePage() {
  return <DestinationTemplate content={thailande} />;
}
