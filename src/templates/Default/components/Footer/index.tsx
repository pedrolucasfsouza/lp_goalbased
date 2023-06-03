import {Flex, Stack} from "@chakra-ui/react";
import {Container} from "@/components/Container";
import {Wrapper} from "@/components/Wrapper";
import {Text} from "@/components/Text";
import InstagramIcon from "../../../../../public/icons/Instagram.svg"
import FacebookIcon from "../../../../../public/icons/Facebook.svg"
import LinkedinIcon from "../../../../../public/icons/LinkedIn.svg"
import {Link} from "@/components/Link";
import {useWindow} from "@/hooks/useWindow";

export function Footer() {
    const {isMobile} = useWindow({})
    return (
        <>
            {/*<Flex className={`w-full min-h-[1px] bg-gray_1`}/>*/}
            <Container className={`md:!py-16`}>
                <Wrapper>
                    <Stack className={`justify-between w-full`}>
                        <Flex className={`justify-between w-full`}>
                            <Flex className={`items-center gap-12`}>
                                <img src={"/logo.svg"} className={`w-[90px] md:w-[120px]`}/>
                                {!isMobile && (
                                    <Text className={`h2-semibold`}>© 2023 Boleta.ai - Rua Capote Valente, 39 - São Paulo, SP - 05409-000</Text>
                                )}
                            </Flex>
                            <Flex className={`gap-4 `}>
                                <Link href={`https://instagram.com`} >
                                    <InstagramIcon className={`[&>path]:hover:!fill-blue_primary md:scale-125 origin-right [&>path]:transition-all`} />
                                </Link>
                                <Link href={`https://instagram.com`} >
                                    <FacebookIcon className={`[&>path]:hover:!fill-blue_primary md:scale-125 origin-right [&>path]:transition-all`} />
                                </Link>
                                <Link href={`https://instagram.com`} >
                                    <LinkedinIcon className={`[&>path]:hover:!fill-blue_primary md:scale-125 origin-right [&>path]:transition-all`} />
                                </Link>
                            </Flex>
                        </Flex>
                        {isMobile && (
                            <Text className={`h3-semibold`}>© 2023 Boleta.ai - Rua Capote Valente, 39 - São Paulo, SP - 05409-000</Text>
                        )}
                    </Stack>
                </Wrapper>

            </Container>
        </>
    )
}