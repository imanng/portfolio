export const seoMetadata = {
  title: {
    template: '%s - Niko',
    default: 'Niko - An indie developer',
  },
  description:
    "I'm An (also call me Niko), a senior software engineer and indie developer. I love programming, from designing system architecture to diving deep into frameworks and problem-solving.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}
