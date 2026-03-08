import type { ImageProps } from 'next/image'

import logoAPIOverrides from '@/images/projects/logo-api-overrides.png'
import logoRecapIt from '@/images/projects/logo-recapit-ai.webp'
import logoScoreCounter from '@/images/projects/logo-score-counter.webp'
import logoCalorieFit from '@/images/projects/logo-calorie-fit.webp'
import logoSnapConvert from '@/images/projects/logo-snap-convert.webp'
import logoQuickDecide from '@/images/projects/logo-quick-decide.webp'
import logoPartyGames from '@/images/projects/logo-party-games.webp'
import logoVidKit from '@/images/projects/logo-vidkit.webp'

export type Project = {
  name: string
  description: string
  links: Array<{ href: string; label: string }>
  logo?: ImageProps['src']
}

export const projectData: Project[] = [
  {
    name: 'VidKit AI',
    description:
      'REST API for summaries, transcripts, analytics, and AI insights from YouTube, TikTok, Instagram, and Facebook.',
    links: [
      {
        href: 'https://vidkit.dev/',
        label: 'vidkit.dev',
      },
    ],
    logo: logoVidKit,
  },
  {
    name: 'API Overrides Tool',
    description:
      'Configure API overrides — intercept and modify responses. Web UI and proxy with full request matching.',
    links: [
      {
        href: 'https://api-overrides.anng.dev/',
        label: 'api-overrides.anng.dev',
      },
    ],
    logo: logoAPIOverrides,
  },
  {
    name: 'RecapIt - AI Video Insights',
    description:
      'Save TikTok, IG Reels and YouTube Shorts, then get AI summaries for restaurants, places, and tips.',
    links: [
      {
        href: 'https://clipmem.anng.dev',
        label: 'clipmem.anng.dev',
      },
    ],
    logo: logoRecapIt,
  },
  {
    name: 'Party Games - Secret Gift',
    description:
      'All-in-one party games for your events — play Secret Gift and more with friends.',
    links: [
      { href: 'https://party-games.anng.dev', label: 'party-games.anng.dev' },
    ],
    logo: logoPartyGames,
  },
  {
    name: 'Score Counter - Score Keeper',
    description: 'Simple score counter for any board game or sport.',
    links: [
      {
        href: 'https://scoreboardly.anng.dev',
        label: 'score-counter.anng.dev',
      },
    ],
    logo: logoScoreCounter,
  },
  {
    name: 'Calorie Fit: Chocolate Tracker',
    description:
      'Balance treats and sync steps — track chocolate and calories with Health integration.',
    links: [
      { href: 'https://calorie-fit.anng.dev', label: 'calorie-fit.anng.dev' },
    ],
    logo: logoCalorieFit,
  },
  {
    name: 'Snap Convert: AI Image Toolkit',
    description:
      'One-tap AI image tools — convert HEIC, WebP, and more with a simple interface.',
    links: [
      { href: 'https://snap-convert.anng.dev', label: 'snap-convert.anng.dev' },
    ],
    logo: logoSnapConvert,
  },
  {
    name: 'Quick Decide - Lucky Picker',
    description:
      'Spin wheel, flip coin, roll dice when you need a quick decision.',
    links: [
      { href: 'https://quick-decide.anng.dev', label: 'quick-decide.anng.dev' },
    ],
    logo: logoQuickDecide,
  },
]
