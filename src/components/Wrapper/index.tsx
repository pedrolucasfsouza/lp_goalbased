import {Flex, FlexProps} from "@chakra-ui/react";
import {ReactNode} from "react";

type WrapperProps = FlexProps & {
}

export function Wrapper({children, ...rest}: WrapperProps) {
    return (
        <Flex className={`max-w-full w-full xl:max-w-[1440px] m-auto flex-1 ${rest.className}`}>
            {children}
        </Flex>
    )
}