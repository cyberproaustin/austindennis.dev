import Link from "next/link";
import { PageIntro } from "@/components/ui";
import { getArticles } from "@/lib/writing";
export default function Writing() {
  const articles = getArticles();
  return (
    <>
      <PageIntro
        eyebrow="WRITING / FIELD NOTES"
        title="The decisions behind the systems."
      >
        <p>
          Long-form notes on cloud infrastructure, platform engineering, and
          security in software delivery.
        </p>
      </PageIntro>
      {articles.length ? (
        <div>
          {articles.map((article) => (
            <article className="writing-preview" key={article.slug}>
              <p className="eyebrow">{article.date}</p>
              <h2>
                <Link href={`/writing/${article.slug}/`}>{article.title}</Link>
              </h2>
              <p>{article.summary}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="eyebrow">ARTICLES IN PREPARATION</p>
          <h2>A writing desk, ready for field notes.</h2>
          <p>
            No articles have been published yet. Future writing will document
            real engineering work and the lessons that come from it.
          </p>
        </div>
      )}
    </>
  );
}
