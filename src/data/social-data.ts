type SocialItem = {
  key: string
  name: string
  link: string
  value: string
}

export const socialData: SocialItem[] = [
  {
    key: 'playStore',
    name: 'Play Store',
    link: 'https://play.google.com/store/apps/dev?id=7424335623282867504',
    value: 'Play Store',
  },
  {
    key: 'appStore',
    name: 'App Store',
    link: 'https://apps.apple.com/vn/developer/an-nguyen/id1864472374',
    value: 'App Store',
  },
  {
    key: 'x',
    name: 'X',
    link: 'https://x.com/im_anng',
    value: 'im_anng',
  },
  {
    key: 'github',
    name: 'GitHub',
    link: 'https://github.com/imanng',
    value: 'imanng',
  },
  {
    key: 'linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/imanng/',
    value: 'imanng',
  },
]

export const socialDataMap = socialData.reduce(
  (acc, cur) => {
    acc[cur.key] = cur
    return acc
  },
  {} as Record<string, SocialItem>,
)
