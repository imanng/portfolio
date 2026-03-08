import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { LinkIcon } from '@phosphor-icons/react/ssr'
import { projectData } from '@/data'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Side projects and apps I’ve built as an indie developer — from tools to small products.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I’ve built."
      intro="A mix of side projects, open-source tools, and experiments. I build to learn and to solve real problems — have a look and reach out if you want to collaborate or contribute."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projectData.map((project) => (
          <Card as="li" key={project.name}>
            {project.logo && (
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
            )}
            <h2 className={`text-base font-semibold text-zinc-800 dark:text-zinc-100 ${project.logo ? 'mt-6' : ''}`}>
              {project.links.length > 0 ? (
                <Card.Link href={project.links[0].href} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </Card.Link>
              ) : (
                project.name
              )}
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <div className="relative z-10 mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              {project.links.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <LinkIcon className="h-6 w-6 flex-none" weight="duotone" />
                  <span className="ml-2">{link.label}</span>
                </a>
              ))}
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
