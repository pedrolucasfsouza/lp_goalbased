import {Link as ChakraUiLink, LinkProps as ChakraUiLinkProps} from "@chakra-ui/react"
import NextLink from "next/link"
import {LinkProps as NextLinkProps} from "next/link"
import {ReactNode} from "react";
type LinkProps = NextLinkProps & {
    children: ReactNode
    className?: string
}
export function Link({children, href, className, ...rest}: LinkProps) {
    return (
        <>
            <NextLink {...rest} className={`flex-1 ${className}`} href={href}>
                {children}
            </NextLink>
        </>
    )
}