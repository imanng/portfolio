import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'
import { socialData } from '@/data'
import { socialIconsMap } from '@/components/icons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string; weight?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" weight="duotone" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m An (also call me Niko), a senior software developer based in Danang, Vietnam. 5+ years building products with React, Next.js, and Flutter.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m An (also call me Niko)
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I'm a software engineer with 5+ years of experience designing and
              developing products in technology companies. I love programming,
              from designing system architecture to diving deep into frameworks
              and problem-solving.
            </p>
            <p>
              I work across the stack: front-end with React and Next.js, mobile
              with Flutter, and back-end with Node.js and NestJS. I've shipped
              products for startups and teams — license management systems,
              AI-powered automation platforms, healthcare apps, and B2B SaaS —
              and I care about scalable architecture, clean code, and good DX.
            </p>
            <p>
              I also want to be an indie developer, so I keep learning and
              building more projects, exploring new tools, and sharing what I
              learn along the way.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list" className="grid grid-cols-2 gap-x-6 gap-y-2">
            {socialData.map((e) => (
              <SocialLink
                key={e.key}
                href={e.link}
                icon={socialIconsMap[e.key]}
              >
                {e.value}
              </SocialLink>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}
