import type { iconMap } from "./icon-map"

export type IconName = keyof typeof iconMap

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  library?: string
  size?: number | string
  color?: string
  className?: string
}
