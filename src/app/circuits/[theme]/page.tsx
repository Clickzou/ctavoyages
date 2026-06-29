import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ThemeTemplate from "@/components/theme/ThemeTemplate";
import { CIRCUITS_THEMES, CIRCUIT_THEME_SLUGS } from "@/lib/theme-content/circuits";

export function generateStaticParams() {
  return CIRCUIT_THEME_SLUGS.map((theme) => ({ theme }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ theme: string }>;
}): Promise<Metadata> {
  const { theme } = await params;
  const content = CIRCUITS_THEMES[theme];
  if (!content) return {};
  return { title: content.meta.title, description: content.meta.description };
}

export default async function CircuitThemePage({
  params,
}: {
  params: Promise<{ theme: string }>;
}) {
  const { theme } = await params;
  const content = CIRCUITS_THEMES[theme];
  if (!content) notFound();
  return <ThemeTemplate content={content} />;
}
