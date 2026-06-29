import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ThemeTemplate from "@/components/theme/ThemeTemplate";
import { VSM_THEMES, VSM_THEME_SLUGS } from "@/lib/theme-content/voyage-sur-mesure";

export function generateStaticParams() {
  return VSM_THEME_SLUGS.map((theme) => ({ theme }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ theme: string }>;
}): Promise<Metadata> {
  const { theme } = await params;
  const content = VSM_THEMES[theme];
  if (!content) return {};
  return { title: content.meta.title, description: content.meta.description };
}

export default async function VsmThemePage({
  params,
}: {
  params: Promise<{ theme: string }>;
}) {
  const { theme } = await params;
  const content = VSM_THEMES[theme];
  if (!content) notFound();
  return <ThemeTemplate content={content} />;
}
