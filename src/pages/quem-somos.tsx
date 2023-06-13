import {DefaultTemplate} from "@/templates/Default";
import {Container} from "@/components/Container";
import {Wrapper} from "@/components/Wrapper";
import {Flex, SimpleGrid, Stack} from "@chakra-ui/react";
import {Text} from "@/components/Text";
import {useWindow} from "@/hooks/useWindow";
import {Button} from "@/components/Button";
import ArrowTopRight from "../../public/icons/arrow-right-top.svg"
import {Accordion} from "@/components/Accordion";
import {Link} from "@/components/Link";
import ArrowDown from "../../public/icons/arrow-down.svg"
import BoletaaiLogo from "../../public/logo.svg"
import Slide from "react-reveal/Slide";

export default function Home() {
    const {isMobile} = useWindow({})

    const OpportunityItem = () => {
        return (
            <Flex className={`flex-1 bg-white rounded-[24px] p-4 items-center gap-6`}>
                <Flex className={`w-12 h-12 bg-blue_primary rounded-[12px]`}>
                </Flex>
                <Text className={`!text-gray_1 h2-semibold`}>Cáculo de IR</Text>
            </Flex>
        )
    }
    return (
        <DefaultTemplate>
            <Container className={`relative !pt-24  min-h-screen`}>
                <Wrapper className={`my-0 md:my-auto items-start md:items-center justify-start md:justify-center`}>
                    <img className={`absolute left-0 w-full h-full top-0 hidden md:block object-cover`}  src={`/backgrounds/quem-somos-1.png`} />
                    <img className={`absolute left-0 w-full h-full top-0 md:hidden object-cover`}  src={`/backgrounds/quem-somos-1-mobile.png`} />
                    <Flex className={`flex-1 w-full z-50 gap-16 flex-col-reverse md:flex-row`}>
                        <Slide left>
                            <Stack spacing={40} className={`flex-1`}>
                                <Text className={`h1-semibold !text-blue_primary`}>QUEM SOMOS</Text>
                                <Text className={`text-[30px] md:text-[48px] font-semibold`} style={{
                                    lineHeight: `111%`,
                                    letterSpacing: `-4% `
                                }}>Princípios que governam o nosso universo.</Text>
                                <Flex className={`gap-2`}>
                                    <Text className={`!text-gray_3 inter h2-regular md:text-[16px]`}>
                                        Saiba mais.
                                    </Text>
                                    <ArrowDown className={`scale-75 origin-top md:scale-100`} />

                                </Flex>
                            </Stack>
                        </Slide>
                        <Stack className={`flex-1 min-w-6/12 justify-center items-center`}>
                            <img src={`/icons/boletaai.svg`} className={`w-[512]`} />
                        </Stack>

                    </Flex>
                </Wrapper>
            </Container>
            <Container className={`relative !pt-24  min-h-screen`}>
                <Wrapper className={`my-0 md:my-auto items-start md:items-center justify-start md:justify-center`}>
                    <img className={`absolute left-0 w-full h-full top-0 hidden md:block object-cover`}  src={`/backgrounds/quem-somos-2.png`} />
                    <img className={`absolute left-0 w-full h-full top-0 md:hidden object-cover`}  src={`/backgrounds/quem-somos-2-mobile.png`} />
                    <Slide left>
                    <Flex className={`flex-1 w-full z-50 gap-16 flex-col md:flex-row`}>

                        <Stack spacing={40} className={`md:w-5/12`}>
                            <img src={`/icons/missao.svg`} className={`w-[60px]`} />
                            <Text className={`text-[36px] md:text-[38px] font-semibold`} style={{
                                lineHeight: `111%`,
                                letterSpacing: `-4% `
                            }}>Missão.</Text>
                            <Text className={`!text-white inter h2-regular md:text-[16px]`}>
                                Nossa plataforma tem como MISSÃO ser a <span className={`font-semibold`}>Central de Inteligência do Investidor</span>. Sabemos o quanto é importante tomar decisões assertivas na hora de investir o seu dinheiro, por isso, queremos facilitar e otimizar a forma como o investidor cuida dos seus investimentos. <br /> <br />

                                Ofereceremos aos nossos usuários uma visão institucional de seus investimentos, para que possam tomar as melhores decisões.
                            </Text>
                        </Stack>
                    </Flex>
                    </Slide>
                </Wrapper>
            </Container>
            <Container className={`relative !pt-24  min-h-screen`}>
                <Wrapper className={`my-0 md:my-auto items-start md:items-center justify-start md:justify-center`}>
                    <img className={`absolute left-0 w-full h-full top-0 hidden md:block object-cover`}  src={`/backgrounds/quem-somos-3.png`} />
                    <img className={`absolute left-0 w-full h-full top-0 md:hidden object-cover`}  src={`/backgrounds/quem-somos-3-mobile.png`} />
                    <Slide right>
                    <Flex className={`flex-1 w-full z-50 gap-16 flex-col md:flex-row justify-end`}>

                            <Stack spacing={40} className={`md:w-5/12`}>
                                <img src={`/icons/visao.svg`} className={`w-[60px]`} />
                                <Text className={`text-[36px] md:text-[38px] font-semibold`} style={{
                                    lineHeight: `111%`,
                                    letterSpacing: `-4% `
                                }}>Visão.</Text>
                                <Text className={`!text-white inter h2-regular md:text-[16px]`}>
                                    Nossa VISÃO é ser a referência na entrega de soluções precisas para o investidor.  Estamos empenhados em alcançar esse objetivo através de nossa constante busca pela inovação e excelência em nossos serviços, trazendo mais inteligência para o dia a dia do investidor.
                                </Text>
                            </Stack>
                    </Flex>
                    </Slide>
                </Wrapper>
            </Container>

            <Container className={`relative !pt-24  min-h-screen`}>
                <Wrapper className={`my-0 md:my-auto items-start md:items-center justify-start md:justify-center`}>
                    <img className={`absolute left-0 w-full h-full top-0 hidden md:block object-cover`}  src={`/backgrounds/quem-somos-4.png`} />
                    <img className={`absolute left-0 w-full h-full top-0 md:hidden object-cover`}  src={`/backgrounds/quem-somos-4-mobile.png`} />
                    <Slide left>
                    <Flex className={`flex-1 w-full z-50 gap-16 flex-col md:flex-row`}>
                        <Stack spacing={40} className={`md:w-5/12`}>
                            <img src={`/icons/principios.svg`} className={`w-[60px]`} />
                            <Text className={`text-[36px] md:text-[38px] font-semibold`} style={{
                                lineHeight: `111%`,
                                letterSpacing: `-4% `
                            }}>Princípios.</Text>
                            <Stack spacing={32}>
                                <Text className={`!text-white inter h2-regular md:text-[16px]`}>
                                    Nós construímos tudo isso com a orientação dos nossos PRINCÍPIOS, que são a base do nosso trabalho e guiam a nossa conduta em todas as áreas:

                                </Text>
                                <ul className={`!list !list-disc [&>li]:marker:!text-white pl-5`}>
                                    <li><Text className={`!text-white inter h2-regular md:text-[16px]`}>Tecnologia e Inovação</Text></li>
                                    <li><Text className={`!text-white inter h2-regular md:text-[16px]`}>Qualidade e Excelência</Text></li>
                                    <li><Text className={`!text-white inter h2-regular md:text-[16px]`}>Profundidade de conhecimento</Text></li>
                                    <li><Text className={`!text-white inter h2-regular md:text-[16px]`}>Dedicação e performance</Text></li>
                                </ul>
                            </Stack>
                        </Stack>
                    </Flex>
                    </Slide>
                </Wrapper>
            </Container>

            <Container className={`relative !pt-24  min-h-screen`}>
                <Wrapper className={`items-start md:items-center justify-start md:justify-center`}>
                    <img className={`absolute left-0 w-full h-full top-0 hidden md:block object-cover`}  src={`/backgrounds/quem-somos-5.png`} />
                    <img className={`absolute left-0 w-full h-full top-0 md:hidden object-cover`}  src={`/backgrounds/quem-somos-5-mobile.png`} />
                    <Slide bottom>
                    <Flex className={`flex-1 w-full z-50 gap-16 flex-col md:flex-row`}>
                        <Stack spacing={40} className={` items-center`}>
                            <Text className={`!text-gray_3 inter text-[16px] md:text-[24px] text-center`}>
                                Nosso compromisso com esses princípios é a base do nosso trabalho e nos guia em todas as decisões e ações que tomamos. Estamos comprometidos em fornecer aos nossos usuários <span className={`!text-white`}>uma plataforma que atenda às suas necessidades e ajude-os a cuidar do seu dinheiro de forma mais inteligente e eficiente.</span>

                            </Text>
                            <Button className={`!px-6  !text-[12px] md:!h1-semibold w-max`} >Faça parte desse universo <ArrowTopRight className={`ml-4 md:ml-12 scale-75 md:scale-100`} /></Button>
                        </Stack>
                    </Flex>
                    </Slide>
                </Wrapper>
            </Container>
        </DefaultTemplate>
    )
}
