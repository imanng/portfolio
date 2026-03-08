import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Notes and essays on software development, indie projects, and what I’m learning along the way.',
}

export default function ArticlesIndex() {
  return (
    <SimpleLayout
      title="Writing on building software and shipping as an indie developer."
      intro="Notes and essays on development, side projects, and what I’m learning along the way."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          No articles yet.
        </p>
      </div>
    </SimpleLayout>
  )
}
