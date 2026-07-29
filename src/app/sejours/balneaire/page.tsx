import type { Metadata } from "next";
import ThemeTemplate from "@/components/theme/ThemeTemplate";
import { getThemeContent } from "@/lib/theme-content";

const content = getThemeContent("balneaire")!;

export const metadata: Metadata = {
  alternates: { canonical: "/sejours/balneaire" },
  title: content.meta.title,
  description: content.meta.description,
};

export default function SejourBalneairePage() {
  return <ThemeTemplate content={content} />;
}
