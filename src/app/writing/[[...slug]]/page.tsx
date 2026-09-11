import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { PageIntro } from "@/components/ui";
import { getArticles } from "@/lib/writing";
import WritingIndex from "@/components/writing-index";
export const dynamicParams = false;
export function generateStaticParams() {
  return [
    { slug: [] },
    ...getArticles().map((article) => ({ slug: [article.slug] })),
  ];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticles().find((a) => a.slug === slug?.[0]);
  return { title: article?.title ?? "Writing", description: article?.summary };
}
export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  if (!slug?.length) return <WritingIndex />;
  const article =
    slug.length === 1
      ? getArticles().find((a) => a.slug === slug[0])
      : undefined;
  if (!article) notFound();
  return (
    <article>
      <PageIntro
        eyebrow={`FIELD NOTES / ${article.date}`}
        title={article.title}
      >
        <p>{article.summary}</p>
      </PageIntro>
      <div className="prose">
        <ReactMarkdown skipHtml>{article.body}</ReactMarkdown>
      </div>
    </article>
  );
}
