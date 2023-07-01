import {TemplateProps} from "@/types";
import {Flex, Stack} from "@chakra-ui/react";
import {Header} from "@/templates/Default/components/Header";
import {Footer} from "@/templates/Default/components/Footer";

export default function Layout({children}: TemplateProps) {

    return (
        <Stack className={`bg-1 h-max min-h-screen overflow-y-hidden`} spacing={0}>
            <Header  />
            {children}
            <Flex className={`flex-1`} />
            <Footer />
        </Stack>
    )
}