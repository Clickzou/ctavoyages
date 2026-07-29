import type { Metadata } from "next";
import DestinationTemplate from "@/components/destination/DestinationTemplate";
import japon from "@/lib/destination-content/japon";

export const metadata: Metadata = {
  alternates: { canonical: "/destination-japon" },
  title: japon.meta.title,
  description: japon.meta.description,
};

export default function DestinationJaponPage() {
  return <DestinationTemplate content={japon} />;
}
