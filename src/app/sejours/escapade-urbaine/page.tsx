import type { Metadata } from "next";
import ThemeTemplate from "@/components/theme/ThemeTemplate";
import { getThemeContent } from "@/lib/theme-content";

const content = getThemeContent("escapade-urbaine")!;

export const metadata: Metadata = {
  alternates: { canonical: "/sejours/escapade-urbaine" },
  title: content.meta.title,
  description: content.meta.description,
};

export default function EscapadeUrbainePage() {
  return <ThemeTemplate content={content} />;
}
