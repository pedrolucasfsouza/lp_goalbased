import {Button as ChakraUiButton, ButtonProps as ChakraUiButtonProps, Flex, Spinner} from "@chakra-ui/react"
import {HTMLProps} from "react";

type ButtonProps = (HTMLProps<HTMLButtonElement> & ChakraUiButtonProps) & {
    isLoading?: boolean
    theme?: 'blue' | string
}

export function Button({children, theme, ...rest}: ButtonProps) {
    return (
        <ChakraUiButton
            {...rest}
            isDisabled={rest?.isLoading}
            className={`
            border-transparent 
            cursor-pointer 
            !flex 
            items-center 
            border 
            !p-3 
            h2-semibold 
            h-[56px] 
            text-white 
            rounded-xl
            bg-[#5463b6]
            shadow-xl
            transition-all
            hover:opacity-80
            ${rest.className}
            `}
            _disabled={{opacity: `0.9`}}
            style={{}}
            // _active={{borderColor: `rgb(64 85 159 / 1) !important`}}
            // _focus={{borderColor: `rgb(64 85 159 / 1) !important`}}
            // _focusVisible={{borderColor: `rgb(64 85 159 / 1) !important`}}
            // _invalid={{borderColor: `#E53E3E !important`}}
        >
            {children}
        </ChakraUiButton>
    )
}