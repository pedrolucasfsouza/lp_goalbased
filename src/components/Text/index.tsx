import {Text as ChakraUiText, TextProps as ChakraUiTextProps} from "@chakra-ui/react";
type TextProps = ChakraUiTextProps & {
    withoutStyles?: boolean
}

export function Text({children, withoutStyles, ...rest} : TextProps) {
    return (
        <ChakraUiText {...rest} className={`${!withoutStyles && `text-white`} ${rest?.className}`}>
            {children}
        </ChakraUiText>
    )
}