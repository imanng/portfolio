import {
  XLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  GooglePlayLogoIcon,
  AppStoreLogoIcon,
} from '@phosphor-icons/react/ssr'

export const socialIconsMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  x: XLogoIcon,
  github: GithubLogoIcon,
  linkedin: LinkedinLogoIcon,
  playStore: GooglePlayLogoIcon,
  appStore: AppStoreLogoIcon,
}
