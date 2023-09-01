import {Flex, FlexProps} from "@chakra-ui/react";
import {ReactNode} from "react";
import Fade from "react-reveal/Fade"
import {useWindow} from "@/hooks/useWindow";

type ContainerProps = FlexProps & {
    baseClassName?: string
}

export function Container({children, baseClassName, ...rest}: ContainerProps) {
    const {isMedium} = useWindow({})
    return (
        <Flex className={`${baseClassName}`}>
            <Fade>
                <Flex {...rest} className={`w-full ${isMedium ? `px-8 py-8` : `px-8 py-8 xl:py-8 xl:px-8`}  ${rest.className}`}>
                    {children}
                </Flex>
            </Fade>
        </Flex>
    )
}