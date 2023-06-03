import {Flex, FlexProps} from "@chakra-ui/react";
import {ReactNode} from "react";

type ContainerProps = FlexProps & {
}

export function Container({children, ...rest}: ContainerProps) {
    return (
        <Flex className={`w-full px-4 py-10 xl:py-28 xl:px-40 ${rest.className}`}>
            {children}
        </Flex>
    )
}