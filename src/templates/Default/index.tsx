import {TemplateProps} from "@/types";
import {Flex, Stack} from "@chakra-ui/react";
import {Header} from "@/templates/Default/components/Header";
import router from "next/router";
import {Suspense, useEffect, useState} from "react";
import {Footer} from "@/templates/Default/components/Footer";
import {FallbackLoader} from "@/components/FallbackLoader";
export function DefaultTemplate({children}: TemplateProps) {
    const [isShowing, setIsShowing] = useState({
        loss: false
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2500)
    }, [])

    if (isLoading) {
        return (
            <FallbackLoader />
        )
    }

    return (
            <Stack className={`bg-1 h-max min-h-screen overflow-y-hidden`} spacing={0}>
                <Header  />
                {children}
                <Flex className={`flex-1`} />
                <Footer />
            </Stack>
    )
}