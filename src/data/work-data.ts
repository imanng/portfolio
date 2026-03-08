import type { ImageProps } from 'next/image'

export type WorkRole = {
  company: string
  title: string
  logo?: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

export const workData: WorkRole[] = [
  {
    company: 'Freelance',
    title: 'Senior Front-End Developer',
    start: '2024',
    end: {
      label: 'Current',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: 'Fitness Snack Lock, LLC',
    title: 'Senior Flutter Developer',
    start: '2024',
    end: '2025',
  },
  {
    company: 'GoTECQ Viet Nam',
    title: 'Flutter Developer',
    start: '2022',
    end: '2024',
  },
  {
    company: 'FSC Software',
    title: 'Front-End Developer',
    start: '2019',
    end: '2022',
  },
]
