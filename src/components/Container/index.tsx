import {Flex, FlexProps} from "@chakra-ui/react";
import {ReactNode} from "react";
import Fade from "react-reveal/Fade"

type ContainerProps = FlexProps & {
    baseClassName?: string
}

export function Container({children, baseClassName, ...rest}: ContainerProps) {
    return (
        <Flex className={`${baseClassName}`}>
            <Fade>
                <Flex {...rest} className={`w-full px-4 py-10 md:py-28 md:px-40 ${rest.className}`}>
                    {children}
                </Flex>
            </Fade>
        </Flex>
    )
}