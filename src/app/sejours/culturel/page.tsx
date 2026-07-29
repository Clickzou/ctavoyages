import type { Metadata } from "next";
import ThemeTemplate from "@/components/theme/ThemeTemplate";
import { getThemeContent } from "@/lib/theme-content";

const content = getThemeContent("culturel")!;

export const metadata: Metadata = {
  alternates: { canonical: "/sejours/culturel" },
  title: content.meta.title,
  description: content.meta.description,
};

export default function CulturelPage() {
  return <ThemeTemplate content={content} />;
}
