import type { Metadata } from "next";
import DestinationTemplate from "@/components/destination/DestinationTemplate";
import thailande from "@/lib/destination-content/thailande";

export const metadata: Metadata = {
  title: thailande.meta.title,
  description: thailande.meta.description,
};

export default function DestinationThailandePage() {
  return <DestinationTemplate content={thailande} />;
}
