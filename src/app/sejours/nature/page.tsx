import type { Metadata } from "next";
import ThemeTemplate from "@/components/theme/ThemeTemplate";
import { getThemeContent } from "@/lib/theme-content";

const content = getThemeContent("nature")!;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function NaturePage() {
  return <ThemeTemplate content={content} />;
}
