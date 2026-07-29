import type { Metadata } from "next";
import ThemeTemplate from "@/components/theme/ThemeTemplate";
import { getThemeContent } from "@/lib/theme-content";

const content = getThemeContent("famille")!;

export const metadata: Metadata = {
  alternates: { canonical: "/sejours/famille" },
  title: content.meta.title,
  description: content.meta.description,
};

export default function FamillePage() {
  return <ThemeTemplate content={content} />;
}
