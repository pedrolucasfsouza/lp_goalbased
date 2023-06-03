import {
    Accordion as ChakraUiAccordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    AccordionProps as ChakraUiAccordionProps,
    Box, Flex, Text
} from "@chakra-ui/react";
import {CSSProperties, ReactNode, useState} from "react";
import DownIcon from "../../../public/icons/accordion-down.svg"
import RightIcon from "../../../public/icons/accordion-right.svg"

type AccordionProps = ChakraUiAccordionProps & {
    panelClassName?: string | undefined
    headerClassName?: string | undefined
    leftLineClassName?: string | undefined
    leftLineStyle?: any
    headerContainerClassName?: string | undefined
    defaultExpanded?: boolean
    removeLeftBorder?: boolean
    icon?: ReactNode
    header?: ReactNode
}


export function Accordion({children, header, icon, leftLineClassName, leftLineStyle, defaultExpanded = true, removeLeftBorder = false, ...rest}: AccordionProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded)
    return (
        <ChakraUiAccordion onChange={(e) => setIsExpanded(e === 0)} defaultIndex={!!defaultExpanded ? [0] : undefined} allowToggle {...rest} className={`relative rounded-none bg-transparent ${rest?.className}`}>

            <AccordionItem className={"border-none"}>
                <AccordionButton className={` rounded-md flex relative items-center gap-2 text-white bg-transparent ${rest?.headerClassName ?? `!p-0 !pr-0 !py-0 `} ${isExpanded && `!rounded-b-none`}`}>
                    <Flex className={`flex-1 text-left ${rest?.headerContainerClassName}`}>
                            {header}
                    </Flex>
                    {icon && (
                        <Flex className={`mr-2 items-center !text-white !fill-white`}>{icon}</Flex>
                    )}
                    {isExpanded ? (
                        <DownIcon size={24} />
                    ) : (
                        <RightIcon size={24} />
                    )}
                </AccordionButton>
                <AccordionPanel className={`p-0 !pt-6 pb-0 pr-8 ${rest?.panelClassName} `}>
                    {children}
                </AccordionPanel>
            </AccordionItem>
        </ChakraUiAccordion>
    )
}