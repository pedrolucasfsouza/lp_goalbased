import {Flex, SimpleGrid, Stack} from "@chakra-ui/react";
import {Container} from "@/components/Container";
import {Wrapper} from "@/components/Wrapper";
import {Text} from "@/components/Text";
import InstagramIcon from "../../../../../public/icons/Instagram.svg"
import FacebookIcon from "../../../../../public/icons/Facebook.svg"
import LinkedinIcon from "../../../../../public/icons/LinkedIn.svg"
import {Link} from "@/components/Link";
import {useWindow} from "@/hooks/useWindow";

export function Footer() {
    const {isMobile, isMedium} = useWindow({})
    return (
        <>
            <Container className={`!py-16`}>
                <Wrapper>
                    <Stack className={`justify-between w-full`}>
                        <Flex className={`justify-between w-full flex-col xl:flex-row gap-16`}>
                            <Stack className={`h-full justify-between gap-8 ${isMedium && `!flex-row`}`}>
                                <Flex className={`items-center gap-12 `}>
                                    <Link href={`/`}>
                                        <img src={"/logo.svg"} className={`w-[165px]`}/>
                                    </Link>
                                </Flex>
                                <Flex className={`gap-6 w-max `}>
                                    <Link href={`https://instagram.com`} >
                                        <InstagramIcon className={`[&>path]:hover:!fill-blue_primary scale-[2] origin-bottom-left ${isMedium && `!origin-top-right`} [&>path]:transition-all`} />
                                    </Link>
                                    <Link href={`https://instagram.com`} >
                                        <FacebookIcon className={`[&>path]:hover:!fill-blue_primary scale-[2] origin-bottom-left ${isMedium && `!origin-top-right`} [&>path]:transition-all`} />
                                    </Link>
                                    <Link href={`https://instagram.com`} >
                                        <LinkedinIcon className={`[&>path]:hover:!fill-blue_primary scale-[2] origin-bottom-left ${isMedium && `!origin-top-right`} [&>path]:transition-all`} />
                                    </Link>
                                </Flex>
                            </Stack>
                            <Flex className={`gap-12 xl:gap-32 flex-col xl:flex-row`}>
                                <Flex className={`gap-12 xl:gap-32 flex-col md:flex-row [&>div]:flex-1 flex-1`}>
                                    <SimpleGrid spacing={16} columns={isMobile ? 2 : 1}>
                                        <Text className={`text-[12px] !text-gray_2 font-semibold col-span-2 xl:col-span-1`}>BOLETA.AI</Text>
                                        <Link className={`text-white hover:text-blue_primary text-[14px] font-semibold`} href={`/nossos-servicos`} >Nossos serviços</Link>
                                        <Link className={`text-white hover:text-blue_primary text-[14px] font-semibold`} href={`/quem-somos`} >Quem somos</Link>
                                        <Link className={`text-white hover:text-blue_primary text-[14px] font-semibold min-w-max`} href={`/`} >Acesso à plataforma</Link>
                                        <Link className={`text-white hover:text-blue_primary text-[14px] font-semibold`} href={`/`} >Solicite seu convite</Link>
                                    </SimpleGrid>
                                    <SimpleGrid spacing={16} columns={isMobile ? 2 : 1}>
                                        <Text className={`text-[12px] !text-gray_2 font-semibold col-span-2 xl:col-span-1`}>FALE COM A GENTE</Text>
                                        <Link className={`text-white hover:text-blue_primary text-[14px] font-semibold`} href={`/`} >Atendimento</Link>
                                        <Link className={`text-white hover:text-blue_primary text-[14px] font-semibold`} href={`/`} >Suporte</Link>
                                        <Link className={`text-white hover:text-blue_primary text-[14px] font-semibold`} href={`/`} >(27) 99999-9999</Link>
                                        <Link className={`text-white hover:text-blue_primary text-[14px] font-semibold`} href={`/`} >contato@boleta.ai</Link>
                                    </SimpleGrid>
                                </Flex>
                                <Flex className={`gap-12 xl:gap-32 flex-col md:flex-row [&>div]:flex-1`}>
                                    <SimpleGrid spacing={16} columns={isMobile ? 2 : 1} className={`mt-auto h-max !justify-end [&>a]:!h-max`}>
                                        <Link className={`text-white hover:text-blue_primary text-[12px]`} href={`/`} >Política de Privacidade</Link>
                                        <Link className={`text-white hover:text-blue_primary text-[12px]`} href={`/`} >Termos de uso</Link>
                                    </SimpleGrid>
                                    {isMedium && (
                                        <div />
                                    )}
                                </Flex>

                            </Flex>
                        </Flex>
                    </Stack>
                </Wrapper>

            </Container>
            <Flex className={`w-full min-h-[1px] bg-gray_1`}/>
            <Container className={``}>
                <Wrapper>
                    <Text className={`text-[12px] !text-gray_3 text-center xl:text-left`}>Desenvolvido por Boleta.ai Desenvolvimento de Software LTDA  •  CNPJ: 48.743.883/0001-56  •  Todos os direitos reservados.</Text>
                </Wrapper>

            </Container>
        </>
    )
}