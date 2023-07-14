import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Link } from "@/components/Link";
import { Text } from "@/components/Text";
import { Wrapper } from "@/components/Wrapper";
import { useWindow } from "@/hooks/useWindow";
import { DefaultTemplate } from "@/templates/Default";
import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import Slide from "react-reveal/Slide";
import ArrowTopRight from "../../public/icons/arrow-right-top.svg";
import CoinsIcon from "../../public/icons/coins.svg";
import DARFIcon from "../../public/icons/darf.svg";
import GraphicIcon from "../../public/icons/graphics.svg";
import ContractIcon from "../../public/icons/oportunidades/contracts.svg";
import MarginsIcon from "../../public/icons/oportunidades/margins.svg";
import PerformanceIcon from "../../public/icons/oportunidades/performance.svg";
import PeoplesIcon from "../../public/icons/peoples.svg";

export default function Home() {
  const { isMobile, isMedium } = useWindow({
    onScroll: () => {},
    onResize: (dimensions) => {},
  });
  const OpportunityItem = ({ title, icon }: { title: string; icon?: any }) => {
    return (
      <Flex
        className={`flex-1 bg-gray_1/35 border-gray_1 border rounded-[24px] p-4 items-center gap-6`}
      >
        <Flex
          className={`w-12 h-12 bg-blue_primary rounded-[12px] justify-center items-center`}
        >
          {icon}
        </Flex>
        <Text className={`!text-white h2-semibold`}>{title}</Text>
      </Flex>
    );
  };
  return (
    <DefaultTemplate>
      <Container className={`relative !pt-24`}>
        <Wrapper className={`items-center justify-center`}>
          <img
            className={`absolute left-0 w-full top-0 hidden xl:block`}
            src={`/backgrounds/home-1.png`}
          />
          <img
            className={`absolute left-0 w-full top-0 xl:hidden`}
            src={`/backgrounds/home-1-mobile.png`}
          />
          <Flex className={`flex-1 w-full z-50 gap-16 flex-col xl:flex-row`}>
            <Flex className={`flex-1`}>
              <Slide left>
                <Stack spacing={40} className={`flex-1`}>
                  <img
                    src={"/icons/b3.svg"}
                    className={`w-[140px] xl:w-[140px]`}
                  />
                  <Text
                    className={`text-[30px] tracking-[-0.1rem] xl:tracking-[-0.2rem] xl:text-[44px] font-semibold`}
                    style={{
                      lineHeight: `111%`,
                    }}
                  >
                    Que tal ter sua DARF calculada automaticamente, sem pagar
                    por isso?
                  </Text>
                  <Text
                    className={`!text-gray_3 leading-[165%] inter h2-regular xl:text-[16px]`}
                  >
                    O Boleta.ai é a central de inteligência do investidor.
                    Oferecemos as mesmas tecnologias usadas pelos grandes
                    players do mercado financeiro, com integração direta na B3.
                  </Text>
                </Stack>
              </Slide>
            </Flex>
            <Stack
              className={`flex-1 ${
                isMedium && `w-8/12 mx-auto`
              } min-w-6/12 my-auto`}
            >
              <img src={"/images/home-1.png"} className={`w-full`} />
            </Stack>
          </Flex>
        </Wrapper>
      </Container>
      <Container className={`relative !pt-0`}>
        <Wrapper className={`items-center justify-center`}>
          <Flex className={`flex-1 w-full z-50 gap-16 flex-col xl:flex-row`}>
            <Stack spacing={40} className={`flex-1 items-center`}>
              <Slide left>
                <SimpleGrid
                  columns={isMedium ? 2 : isMobile ? 1 : 3}
                  className={`flex-1 w-full gap-3`}
                >
                  <OpportunityItem
                    title={`Cálculo de DARF`}
                    icon={<DARFIcon />}
                  />
                  <OpportunityItem
                    title={`Visão geral dos investimentos`}
                    icon={<CoinsIcon />}
                  />
                  <OpportunityItem
                    title={`Relatório de Rentabilidade`}
                    icon={<GraphicIcon />}
                  />
                  <OpportunityItem
                    title={`Cálculo de Performance`}
                    icon={<PerformanceIcon />}
                  />
                  <OpportunityItem
                    title={`Margens e Garantias`}
                    icon={<MarginsIcon />}
                  />
                  <OpportunityItem
                    title={`Contratos e Aluguéis`}
                    icon={<ContractIcon />}
                  />
                </SimpleGrid>
              </Slide>
              <Text
                className={`text-[24px] tracking-[-0.08rem] text-center font-semibold`}
                style={{
                  lineHeight: `111%`,
                }}
              >
                Bem-vindo! Há um universo de possibilidades.
              </Text>

              <Button className={`!px-6 !py-2 h-max !text-[16px] !mt-6`}>
                Conheça nossos serviços{" "}
                <ArrowTopRight
                  className={`ml-4 xl:ml-12 scale-75 xl:scale-100`}
                />
              </Button>
              {/*<Link href={`/`} className={`text-center text-blue_primary inter hidden xl:flex [&>svg>path]:fill-blue_primary`}>*/}
              {/*    Faça parte desse universo. <ArrowTopRight className={`scale-75 xl:scale-100`} />*/}
              {/*</Link>*/}
            </Stack>
          </Flex>
        </Wrapper>
      </Container>
      <Container className={`relative xl:!py-0`}>
        <Wrapper className={`items-center justify-center`}>
          <Flex
            className={`flex-1 w-full z-50 gap-16 flex-col xl:flex-row justify-between`}
          >
            <Stack
              spacing={isMobile ? 16 : 40}
              className={`flex-1 justify-center xl:items-start items-center`}
            >
              <Flex
                className={`w-12 h-12 bg-blue_primary rounded-[12px] justify-center items-center`}
              >
                <PeoplesIcon />
              </Flex>
              <Text
                className={`text-[24px] tracking-[-0.12rem] xl:text-[34px] !mt-4 text-center xl:text-left font-semibold`}
                style={{
                  lineHeight: `111%`,
                }}
              >
                Todas as corretoras em um só lugar.
              </Text>
              <Text
                className={`!text-gray_3 inter h2-regular xl:text-[16px] text-center xl:text-left`}
              >
                Conecte-se ao universo dos investimentos de uma forma
                revolucionária. Uma experiência <b>única</b> para os
                investidores que buscam uma plataforma inovadora, inteligente e
                intuitiva.
              </Text>
            </Stack>
            <Stack className={`flex-1 min-w-5/12 mx-auto max-w-[470px]`}>
              <img src={"/images/home-2.png"} className={`w-full`} />
            </Stack>
          </Flex>
        </Wrapper>
      </Container>
      <Container baseClassName={`z-50`} className={`relative !pb-0 z-50 `}>
        <Wrapper className={`items-center justify-center`}>
          <img
            className={`absolute left-0 w-full bottom-0 hidden xl:block`}
            src={`/backgrounds/home-2.png`}
          />
          <img
            className={`absolute left-0 w-full bottom-0 xl:hidden`}
            src={`/backgrounds/home-2.png`}
          />
          <Flex className={`flex-1 w-full z-50 flex-col translate-y-12`}>
            <Stack
              spacing={16}
              className={`flex-1 bg-white xl:bg-1 items-center py-8 xl:py-16 px-6 xl:px-32 rounded-t-[12px] xl:rounded-t-[24px]`}
            >
              <Flex className={`flex-col xl:flex-row items-center gap-6`}>
                <Flex
                  className={`w-12 h-12 bg-blue_primary rounded-[12px] justify-center items-center`}
                >
                  <img
                    src={"/icons/b3-mini.svg"}
                    className={`w-[32px] h-[32px]`}
                  />
                </Flex>
                <Text
                  className={`text-[24px] tracking-[-0.12rem] xl:text-[34px] text-center font-semibold !text-gray_1 xl:!text-white`}
                  style={{
                    lineHeight: `111%`,
                  }}
                >
                  Integração com a B3
                </Text>
              </Flex>
              <Text
                className={`!text-gray_2 xl:!text-gray_3 text-center inter text-[14px] xl:text-[16px]`}
              >
                Acreditamos que inteligência e tecnologia andam juntas e são
                essenciais para que você possa investir com segurança e
                confiança. Por isso, aqui os dados são coletados diretamente da
                B3.
              </Text>
            </Stack>
            <Flex
              className={`w-full h-[160px] xl:h-[320px] bg-cover bg-left xl:bg-center rounded-b-[8px] xl:rounded-b-[24px]`}
              style={{ backgroundImage: `url(/backgrounds/home-3.png)` }}
            ></Flex>
          </Flex>
        </Wrapper>
      </Container>
      <Container className={`relative bg-white z-40`}>
        <Wrapper className={`items-center justify-center`}>
          <Stack spacing={32} className={`flex-1 items-center py-16`}>
            <Text
              className={`text-[16px]  xl:text-[28px] !text-gray_1 text-center font-semibold`}
              style={{
                lineHeight: `130%`,
              }}
            >
              Você terá acesso a diversos serviços exclusivos, que tornarão a
              sua vida de investidor muito mais{" "}
              <span className={`text-blue_primary`}>
                fácil e descomplicada.
              </span>
            </Text>

            <Link href={`https://app.boleta.ai/fila-de-espera`}>
              <Button className={`!px-6 !py-2 !text-[16px]`}>
                Solicite seu convite{" "}
                <ArrowTopRight
                  className={`ml-4 xl:ml-12 scale-75 xl:scale-100`}
                />
              </Button>
            </Link>
            {/* <Flex
              className={`w-full h-[500px] bg-[#DFE0E4] rounded-[8px] xl:rounded-[24px] !mt-16`}
            /> */}
          </Stack>
        </Wrapper>
      </Container>
      <Container
        className={`relative !pt-0 bg-cover bg-bottom`}
        style={{ backgroundImage: `url(/backgrounds/home-4.png)` }}
      >
        <Wrapper className={`items-center justify-center bg-cover bg-center`}>
          <Flex className={`flex-1 w-full z-50 flex-col -translate-y-12`}>
            <Stack
              spacing={16}
              className={`flex-1 bg-1 items-center py-8 xl:py-16 px-6 xl:px-32 rounded-t-[12px] xl:rounded-t-[24px]`}
            >
              <Flex className={`flex-col xl:flex-row items-center gap-6`}>
                <Flex
                  className={`w-12 h-12 bg-blue_primary rounded-[12px] justify-center items-center`}
                >
                  <img
                    src={"/icons/medal.svg"}
                    className={`w-[32px] h-[32px]`}
                  />
                </Flex>
                <Text
                  className={`text-[24px] tracking-[-0.12rem] xl:text-[34px] text-center font-semibold`}
                  style={{
                    lineHeight: `111%`,
                  }}
                >
                  Prêmio Centelha
                </Text>
              </Flex>
              <Text
                className={`!text-gray_3 text-center inter text-[14px] xl:text-[16px]`}
              >
                A tecnologia desenvolvida pelo BOLETAAI foi reconhecida como uma
                das melhores inovações do ano de 2022 pelo Centelha/ES.
              </Text>
            </Stack>
            <Flex
              className={`w-full h-[160px] xl:h-[320px] bg-cover bg-center rounded-b-[8px] xl:rounded-b-[24px]`}
              style={{ backgroundImage: `url(/backgrounds/home-5.png)` }}
            ></Flex>
          </Flex>
        </Wrapper>
      </Container>
      <Container className={`relative !pt-0`}>
        <Wrapper className={`items-center justify-center`}>
          <Stack spacing={24} className={`w-full`}>
            <Stack
              spacing={16}
              className={`flex-1 bg-1 rounded-t-[24px] mb-12`}
            >
              <Flex className={`items-center gap-6`}>
                <Text
                  className={`xl:text-[34px] tracking-[-0.12rem]  text-[24px] font-semibold`}
                  style={{
                    lineHeight: `111%`,
                    letterSpacing: `-4% `,
                  }}
                >
                  Perguntas frequentes sobre o Boleta.ai
                </Text>
              </Flex>
              <Text className={`!text-gray_3 inter h2-regular xl:text-[20px]`}>
                Perguntas frequentes e respostas descomplicadas.
              </Text>
            </Stack>
            <Accordion
              defaultExpanded={true}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    1. Qual é o custo do boleta.ai?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                A nossa plataforma é GRATUITA na versão 1.0.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    2. Como faço para receber o convite?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                Você pode receber o convite através de um amigo que tenha
                cadastro na nossa plataforma ou aguardar que sua solicitação na
                lista de espera seja respondida.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    3. Quais vantagens de me cadastrar no boleta.ai?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                No boleta.ai fornecemos diversos serviço exclusivos que pode ser conferido na página "nosso serviços".
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    4. Como acesso o boleta.ai?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                Você acessa a nossa plataforma de qualquer navegador, tanto pelo
                celular como no computador.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    5. Quais corretoras funcionam com o boleta.ai?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                TODAS as corretoras funcionam no boleta.ai, não importa se você
                tem conta em mais de uma.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    6. De quais investimentos é feito o cálculo do Imposto de
                    Renda?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                Ações, FIIs (fundos de investimento imobiliário), BDRs
                (Brazilian Depositary Receipts), ETFs (Exchange Traded Funds),
                Futuros e opções.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    7. Preciso importar notas de corretagem ou inserir dados
                    mensais?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                Não. Os seus dados são extraídos diretamente da B3.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
          </Stack>
        </Wrapper>
      </Container>
    </DefaultTemplate>
  );
}
