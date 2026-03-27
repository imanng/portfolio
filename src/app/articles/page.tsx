import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Notes and essays on software development, indie projects, and what I’m learning along the way.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Writing on building software and shipping as an indie developer."
      intro="Notes and essays on development, side projects, and what I’m learning along the way."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.length > 0 ? (
            articles.map((article) => (
              <Card as="article" key={article.slug}>
                <Card.Eyebrow as="time" dateTime={article.date} decorate>
                  {formatDate(article.date)}
                </Card.Eyebrow>
                <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
                <Card.Description>{article.description}</Card.Description>
                <Card.Cta>Read article</Card.Cta>
              </Card>
            ))
          ) : (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              No articles yet.
            </p>
          )}
        </div>
      </div>
    </SimpleLayout>
  )
}
