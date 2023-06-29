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
                <Flex {...rest} className={`w-full ${isMedium ? `px-14 py-14` : `px-4 py-10 xl:py-28 xl:px-40`}  ${rest.className}`}>
                    {children}
                </Flex>
            </Fade>
        </Flex>
    )
}