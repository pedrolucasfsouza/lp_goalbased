import {Box, Stack, StackProps} from "@chakra-ui/react";
import {ReactNode} from "react";
import * as React from "react";

type CardProps = StackProps & {
    children: ReactNode
    cardModel?: "1" | "2"
    isLoading?: boolean
}

export function Card({children, isLoading, cardModel = "1", ...rest}: CardProps) {
    let style = ``
    switch (cardModel) {
        case '1':
            style = `w-full md:w-6/12 md:p-12 p-2 gap-8 md:border-gray_1 md:border md:bg-gray_1/35   rounded-[16px] max-w-[480px]`
            break
        case '2':
            style = `p-4 gap-6 bg-gray_1/35 border border-gray_1  rounded-[16px]`
            break
    }
    return (
        <Stack spacing={0} {...rest} className={`${style}  ${isLoading && `opacity-70`} relative ${rest?.className}`}>
            {children}
            {isLoading && (
                <Box className={`absolute w-full h-full left-0 top-0 z-50`}/>
            )}
        </Stack>
    )
}