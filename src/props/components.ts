import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core"

export type NavlinkProps = {
    type: string,
    href: string,
    icon: IconDefinition,
    iconSize: SizeProp,
    navText?: string   
}