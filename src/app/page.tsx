import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { BriefcaseIcon, BuildingOfficeIcon, CloudArrowDownIcon } from '@phosphor-icons/react/ssr'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { resumeUrl, socialData, workData, type WorkRole } from '@/data'
import { socialIconsMap } from '@/components/icons'

const PHOTO_SIZE = { width: 576, height: 640 }

async function getPhotoUrls(count: number): Promise<string[]> {
  const now = new Date()
  const seed = `${String(now.getDate()).padStart(2, '0')}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getFullYear()).slice(-2)}`
  return Array.from(
    { length: count },
    (_, i) => `https://picsum.photos/seed/${seed}-${i}/${PHOTO_SIZE.width}/${PHOTO_SIZE.height}`,
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string; weight?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" target="_blank" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" weight="duotone" />
    </Link>
  )
}

function Role({ role }: { role: WorkRole }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {role.logo ? (
          <Image src={role.logo} alt="" className="h-full w-full object-cover" width={40} height={40} />
        ) : (
          <BuildingOfficeIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" weight="duotone" />
        )}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" weight="duotone" />
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {workData.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href={resumeUrl} target="_blank" variant="secondary" className="group mt-6 w-full">
        Download CV
        <CloudArrowDownIcon className="h-5 w-5 text-zinc-400 transition group-active:text-zinc-600 dark:group-hover:text-zinc-50 dark:group-active:text-zinc-50" weight="duotone" />
      </Button>
    </div>
  )
}

function Photos({ urls }: { urls: string[] }) {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex gap-5 overflow-x-auto overflow-y-hidden py-4 sm:gap-8 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-[max(0px,50%-11rem)] pr-[max(0px,50%-11rem)] sm:pl-[max(0px,50%-18rem)] sm:pr-[max(0px,50%-18rem)]">
        {urls.map((src, imageIndex) => (
          <div
            key={src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 snap-center',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={src}
              alt=""
              width={PHOTO_SIZE.width}
              height={PHOTO_SIZE.height}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles: ArticleWithSlug[] = []
  let photoUrls = await getPhotoUrls(5)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            An indie developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m An (also call me Niko), a senior software engineer and indie
            developer. I love programming, from designing system architecture to
            diving deep into frameworks and problem-solving.
          </p>
          <div className="mt-6 flex gap-6">
            {socialData
              .filter((e) => !['playStore', 'appStore'].includes(e.key))
              .map((e) => (
                <SocialLink
                  key={e.key}
                  href={e.link}
                  aria-label={e.value}
                  icon={socialIconsMap[e.key]}
                />
              ))}
          </div>
        </div>
      </Container>
      <Photos urls={photoUrls} />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))
            ) : (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                No articles yet.
              </p>
            )}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
