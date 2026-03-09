import type { ImageProps } from 'next/image'

import logoAdaptiveBits from '@/images/companies/logo-adaptive-bits.png'
import logoFitnessLock from '@/images/companies/logo-fitness-lock.webp'
import logoGotecq from '@/images/companies/logo-gotecq.jpeg'

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
    logo: logoFitnessLock,
    start: '2024',
    end: '2025',
  },
  {
    company: 'GoTECQ Vietnam, Ltd.',
    title: 'Flutter Developer',
    logo: logoGotecq,
    start: '2022',
    end: '2024',
  },
  {
    company: 'Adaptive Bits, Ltd.',
    title: 'Front-End Developer',
    logo: logoAdaptiveBits,
    start: '2019',
    end: '2022',
  },
]
