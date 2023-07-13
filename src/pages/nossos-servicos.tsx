import {DefaultTemplate} from "@/templates/Default";
import {Container} from "@/components/Container";
import {Wrapper} from "@/components/Wrapper";
import {Box, Flex, SimpleGrid, Stack} from "@chakra-ui/react";
import {Text} from "@/components/Text";
import {useWindow} from "@/hooks/useWindow";
import {Button} from "@/components/Button";
import ArrowTopRight from "../../public/icons/arrow-right-top.svg"
import {Accordion} from "@/components/Accordion";
import {Link} from "@/components/Link";
import ArrowDown from "../../public/icons/arrow-down.svg"
import BoletaaiLogo from "../../public/logo.svg"
import Slide from "react-reveal/Slide"
import {useCallback} from "react";

export const handleGoToNextSection = (isMobile: boolean) => {
    window.scrollTo({
        top: window.innerHeight + (isMobile ? 60 : 72),
        behavior: 'smooth'
    })
}
export default function Home() {
    const {isMobile, isMedium} = useWindow({})


    const OpportunityItem = () => {
        return (
            <Flex className={`flex-1 bg-white rounded-[24px] p-4 items-center gap-6`}>
                <Flex className={`w-12 h-12 bg-blue_primary rounded-[12px]`}>
                </Flex>
                <Text className={`!text-gray_1 h2-semibold`}>Cáculo de IR</Text>
            </Flex>
        )
    }

    const Element = useCallback(({title, description, image, tabletImage, mobileImage, black}: any) => {
        return (
            <Container className={`relative xl:!pb-10  bg-[#FAFAFA] z-50`}>
                <Wrapper
                    className={`my-0 xl:my-auto items-start xl:items-center justify-start xl:justify-center !flex-col gap-10 [&>div]:overflow-hidden`}>
                    <Flex
                        className={`w-full z-50 gap-16 flex-col xl:flex-row ${black ? `bg-1` : `bg-white` } pb-0 px-6 pt-6 xl:px-16 xl:py-32 rounded-[24px] shadow-common relative`}>
                        <Stack spacing={16} className={`xl:w-[46%]`}>
                            <Box className={`bg-blue_primary w-max p-2 rounded-[16px]`}>
                                <img src={`/icons/darf-title.svg`} className={`w-[32px]`}/>
                            </Box>
                            <Text className={`${black ? `!text-white` : `!text-gray_1` }  text-[28px] xl:text-[38px] font-semibold`} style={{
                                lineHeight: `111%`,
                                letterSpacing: `-4% `
                            }}>{title}</Text>
                            <Text className={`${black ? `!text-gray_3` : `!text-gray_2` } inter text-[14px] xl:text-[16px] !mt-8`}>
                                {description}
                            </Text>
                        </Stack>
                        <Flex className={`justify-center items-center w-full xl:w-5/12 h-full xl:absolute right-0 bottom-0`}>
                            <Slide right>
                                <img
                                    src={isMedium ? tabletImage : isMobile ? mobileImage : image}
                                    className={`xl:absolute right-0 bottom-0 max-h-full object-cover`}
                                />
                            </Slide>
                        </Flex>
                    </Flex>
                </Wrapper>
            </Container>
        )
    }, [isMedium, isMobile])


    const ElementRTL = useCallback(({title, description, image, tabletImage, mobileImage}: any) => {
        return (
            <Container className={`relative xl:!pt-0 xl:!pb-10  bg-[#FAFAFA] z-50`}>
                <Wrapper
                    className={`my-0 xl:my-auto items-start xl:items-center justify-start xl:justify-center !flex-col gap-10 [&>div]:overflow-hidden`}>
                    <Flex
                        className={`w-full z-50 gap-16 flex-col xl:flex-row bg-1 pt-0 px-6 pb-6 xl:px-16 xl:py-32  rounded-[24px] shadow-common relative justify-end`}>
                        <Flex className={`justify-center items-center w-full xl:w-5/12 h-full xl:absolute left-0 bottom-0`}>
                            <Slide left>
                                <img
                                    src={isMedium ? tabletImage : isMobile ? mobileImage : image}
                                    className={`xl:absolute left-0 top-0 xl:max-h-full object-cover`}
                                />
                            </Slide>
                        </Flex>
                        <Stack spacing={16} className={`xl:w-[46%]`}>
                            <Box className={`bg-blue_primary w-max p-2 rounded-[16px]`}>
                                <img src={`/icons/graphics.svg`} className={`w-[32px]`}/>
                            </Box>
                            <Text className={`!text-white text-[28px] xl:text-[38px] font-semibold`} style={{
                                lineHeight: `111%`,
                                letterSpacing: `-4% `
                            }}>{title}</Text>
                            <Text className={`!text-gray_3 inter text-[14px] xl:text-[16px] !mt-8`}>
                                {description}
                            </Text>
                        </Stack>
                    </Flex>
                </Wrapper>
            </Container>
        )
    }, [isMedium, isMobile])
    return (
        <DefaultTemplate>
            <Container className={`relative !pt-24  min-h-screen z-50`}>
                <Wrapper className={`my-0 xl:my-auto items-start xl:items-center justify-start xl:justify-center`}>
                    <img className={`absolute left-0 w-full h-full top-0 hidden xl:block object-cover`}
                         src={`/backgrounds/nossos-servicos-1.png`}/>
                    <img className={`absolute left-0 w-full h-auto bottom-0 ${isMedium && `!hidden`} xl:hidden `}
                         src={`/backgrounds/nossos-servicos-1-mobile.png`}/>
                    <img className={`absolute left-0 w-full h-auto bottom-0 -z-[1] ${!isMedium && `!hidden`} `}
                         src={`/backgrounds/nossos-servicos-1-tablet.png`}/>
                    <img className={`absolute left-0 w-full h-auto bottom-0 -z-[2] ${!isMedium && `!hidden`} `}
                         src={`/backgrounds/quem-somos-5.png`}/>
                    <Slide left>
                        <Flex className={`flex-1 w-full z-50 gap-16 flex-col-reverse xl:flex-row`}>
                            <Stack spacing={isMobile ? 32 : 40} className={`z-50`}>
                                <Text className={`h1-semibold !text-blue_primary`}>NOSSOS SERVIÇOS</Text>
                                <Text className={`text-[30px] xl:text-[44px] font-semibold max-w-[500px]`} style={{
                                    lineHeight: `111%`,
                                    letterSpacing: `-4% `
                                }}>Nossa central de inteligência por dentro.</Text>
                                <Flex className={`gap-2 cursor-pointer`}
                                      onClick={() => handleGoToNextSection(isMobile)}>
                                    <Text className={`!text-gray_3 inter h2-regular xl:text-[16px]`}>
                                        Conheça todos os nossos serviços.
                                    </Text>
                                    <ArrowDown className={`scale-75 origin-top xl:scale-100`}/>

                                </Flex>
                            </Stack>

                        </Flex>
                    </Slide>
                </Wrapper>
            </Container>
            <Element
                title={`Cálculo de DARF`}
                description={<>
                    Nós sabemos que a declaração do Imposto de Renda pode ser um verdadeiro pesadelo para
                    muitos investidores. Por isso, <span className={`font-semibold`}>oferecemos um serviço completo de cálculo de DARF</span>,
                    que vai ajudar você a declarar seus investimentos de forma correta e sem dor de cabeça.
                </>}
                mobileImage={`/images/nossos-servicos-1-mobile.png`}
                tabletImage={`/images/nossos-servicos-1-tablet.png`}
                image={`/images/nossos-servicos-1.png`}
            />
            <ElementRTL
                title={`Visão geral dos investimentos`}
                description={<>
                    Com o boleta.ai, você tem uma visão completa e detalhada de todos os seus investimentos.
                    Nossa plataforma mostra para você em um único lugar todas as informações importantes
                    sobre suas aplicações financeiras.
                </>}
                mobileImage={`/images/nossos-servicos-2-mobile.png`}
                tabletImage={`/images/nossos-servicos-2-tablet.png`}
                image={`/images/nossos-servicos-2.png`}
            />
            <Element
                title={`Cálculo de performance`}
                description={<>
                    Saber o quanto você está ganhando com seus investimentos é fundamental para tomar
                    decisões acertadas. Com o boleta.ai, você tem acesso a um serviço exclusivo de cálculo
                    de performance, que vai ajudar você a entender como seus investimentos estão
                    performando.
                </>}
                mobileImage={`/images/nossos-servicos-3-mobile.png`}
                tabletImage={`/images/nossos-servicos-3-tablet.png`}
                image={`/images/nossos-servicos-3.png`}
            />
            <ElementRTL
                title={`Relatório de rentabilidade`}
                description={<>
                    Você pode gerar relatórios completos de rentabilidade de seus investimentos. Isso
                    ajudará você a entender como suas aplicações financeiras estão rendendo ao longo do
                    tempo, e tomar decisões mais embasadas sobre onde investir seu dinheiro.
                </>}
                mobileImage={`/images/nossos-servicos-4-mobile.png`}
                tabletImage={`/images/nossos-servicos-4-tablet.png`}
                image={`/images/nossos-servicos-4.png`}
            />
            <Element
                title={`Margens e garantias`}
                description={<>
                    Fornecemos informações atualizadas sobre as margens e garantias para suas operações.
                    Assim, você terá mais segurança para diversificar suas aplicações e fazer um
                    planejamento levando a alavancagem em consideração. Isso pode contribuir para que você
                    se aproxime de bons resultados com seus investimentos.
                </>}
                mobileImage={`/images/nossos-servicos-5-mobile.png`}
                tabletImage={`/images/nossos-servicos-5-tablet.png`}
                image={`/images/nossos-servicos-5.png`}
            />
            {isMobile || isMedium ? (
                <Element
                    black={true}
                    title={`Contratos e aluguéis`}
                    description={<>
                        Mantenha-se informado sobre seus contratos e aluguéis de ações. Com o boleta.ai você
                        terá de maneira simples e fácil a data de vencimento, data de execução, taxa de aluguel
                        e quanto custará ao final do contrato, ajudando você a tomar decisões fundamentadas.
                    </>}
                    mobileImage={`/images/nossos-servicos-6-mobile.png`}
                    tabletImage={`/images/nossos-servicos-6-tablet.png`}
                    image={`/images/nossos-servicos-6.png`}
                />
            ) : (
                <ElementRTL
                    title={`Contratos e aluguéis`}
                    description={<>
                        Mantenha-se informado sobre seus contratos e aluguéis de ações. Com o boleta.ai você
                        terá de maneira simples e fácil a data de vencimento, data de execução, taxa de aluguel
                        e quanto custará ao final do contrato, ajudando você a tomar decisões fundamentadas.
                    </>}
                    mobileImage={`/images/nossos-servicos-6-mobile.png`}
                    tabletImage={`/images/nossos-servicos-6-tablet.png`}
                    image={`/images/nossos-servicos-6.png`}
                />
            )}
            <Container className={`relative `}>
                <Wrapper className={`items-center justify-center`}>
                    <img className={`absolute left-0 w-full bottom-0 hidden xl:block`}
                         src={`/backgrounds/nossos-servicos-2.png`}/>
                    <img className={`absolute left-0 w-full bottom-0 xl:hidden`}
                         src={`/backgrounds/nossos-servicos-2-mobile.png`}/>
                    <Flex className={`flex-1 w-full z-50 flex-col `}>
                        <Stack spacing={16}
                               className={`flex-1 bg-white xl:items-center py-8 xl:py-16 px-6 xl:px-32 rounded-t-[12px] xl:rounded-t-[24px]`}>
                            <Flex className={`flex-col xl:flex-row xl:items-center gap-6`}>
                                <img src={"/icons/b3-blue.svg"} className={`w-[60px] xl:w-[60px]`}/>
                                <Text className={`text-[24px] xl:text-[34px] xl:text-center font-semibold !text-gray_1`}
                                      style={{
                                          lineHeight: `111%`,
                                          letterSpacing: `-4% `
                                      }}>Integração com a B3</Text>
                            </Flex>
                            <Text className={`!text-gray_2 xl:text-center inter text-[14px] xl:text-[16px]`}>
                                Aqui, os dados são coletados diretamente da B3. Isso significa que as informações sobre
                                as suas aplicações financeiras <br/> <br/>

                                Você não precisa mais perder tempo com planilhas complicadas e informações
                                desencontradas. Através da nossa plataforma, você tem tudo o que precisa para investir
                                com segurança e inteligência. <br/> <br/>

                                Faça parte do universo do investidor e descubra como é fácil e prático investir com o
                                boleta.ai.
                            </Text>
                        </Stack>
                        <Flex
                            className={`w-full h-[240px] xl:h-[320px] bg-cover bg-left xl:bg-center rounded-b-[8px] xl:rounded-b-[24px]`}
                            style={{backgroundImage: `url(/backgrounds/home-3.png)`}}>

                        </Flex>

                    </Flex>
                </Wrapper>
            </Container>
        </DefaultTemplate>
    )
}
