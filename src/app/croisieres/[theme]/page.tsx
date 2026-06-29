import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ThemeTemplate from "@/components/theme/ThemeTemplate";
import {
  CROISIERES_THEMES,
  CROISIERE_THEME_SLUGS,
} from "@/lib/theme-content/croisieres";

export function generateStaticParams() {
  return CROISIERE_THEME_SLUGS.map((theme) => ({ theme }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ theme: string }>;
}): Promise<Metadata> {
  const { theme } = await params;
  const content = CROISIERES_THEMES[theme];
  if (!content) return {};
  return { title: content.meta.title, description: content.meta.description };
}

export default async function CroisiereThemePage({
  params,
}: {
  params: Promise<{ theme: string }>;
}) {
  const { theme } = await params;
  const content = CROISIERES_THEMES[theme];
  if (!content) notFound();
  return <ThemeTemplate content={content} />;
}
