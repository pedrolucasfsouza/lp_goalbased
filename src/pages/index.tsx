
import { Container } from "@/components/Container";
import { useWindow } from "@/hooks/useWindow";

import {  Flex, Stack, Image, Text, Box } from "@chakra-ui/react";
import CheckedIcon from '../../public/icons/confirmed-white.svg'
import PeopleIcon from '../../public/icons/peoples.svg'
import CoinsIcon from '../../public/icons/coins.svg'
import XpIcon from '../../public/icons/xp.svg'
import GenialIcon from '../../public/icons/genial.svg'
import BtgIcon from '../../public/icons/btg.svg'
import AgoraIcon from '../../public/icons/agora.svg'
import InstagramIcon from '../../public/icons/Instagram.svg'
import FacebookIcon from '../../public/icons/Facebook.svg'
import LinkedinIcon from '../../public/icons/LinkedIn.svg'
import {Input} from '../components/Input'
import { Button } from "@/components/Button";

export default function Home() {
  const { isMobile, isMedium } = useWindow({
    onScroll: () => {},
    onResize: (dimensions) => {},
  });

  return (
    <>
<Flex className=" w-full bg-gray_1 flex-column justify-center min-h-screen" bgImage="url('http://10.1.15.186:3000/backgrounds/bg.jpg')"
  bgSize="cover"
  bgPosition="center">



{/*content*/}
  <Stack className="w-full p-2 xl:p-6 flex-col max-w-[1400px]">

    <Stack className="w-full flex-row xl:gap-6 gap-1 py-0 xl:py-8">
        <Stack className='gap-0 xl:gap-2 xl:pb-4 py-2  items-center xl:items-start'>
          <img width={isMobile ? 120 : 170} src='http://10.1.15.186:3000/logo.png' alt='logo' />
           
        </Stack>

{/*CARD CENTRAL*/}
<Flex className="xl:gap-6 items-center gap-2 flex-col xl:flex-row ">
        {/*CARD 1 DESCUBRA*/}
        <Stack className="rounded-xl xl:gap-4 gap-2 justify-center bg-[#384599] bg-opacity-60 xl:p-12 px-4 py-6 max-w-[700px] shadow-md">

          <Text className='text-white text-[16px] leading-5 xl:text-[24px] xl:leading-6'>Descubra como a <b>Alphamar Investimentos</b> pode te ajudar a gerenciar o <b>seu patrimônio e da sua familia.</b></Text>
          <Text className="text-white font-light text-xs xl:text-sm">Se você acredita que uma alocação eficaz é a que alia gestão de risco com maximização de retorno, o seu lugar é entre os 1% que de fato ganham dinheiro no mercado financeiro.</Text>
        
            <Stack className="gap-4 xl:px-4 py-2">
                <Flex className="gap-2" align={'center'}>
                  <Stack className="w-[24px] "><CheckedIcon className={ 'scale-[0.70] xl:scale-[1]'}/></Stack> <Text className="text-white text-xs xl:text-sm">Não recebemos comissões de instituições financeiras, gerando total alinhamento aos interesses do investidor.</Text>
                </Flex>

                <Flex className="gap-2" align={'center'}>
                  <Stack className="w-[24px] "><CheckedIcon className={ 'scale-[0.70] xl:scale-[1]'}/></Stack> <Text className="text-white text-xs xl:text-sm">Não recebemos comissões de instituições financeiras, gerando total alinhamento aos interesses do investidor.</Text>
                </Flex>
            </Stack>

            {/*FOOTER CARD1*/}
              <Stack className="w-full flex !flex-row justify-between p-0 gap-2 xl:p-6 " >

                  <Flex className="xl:gap-4 gap-1 w-full flex-col xl:flex-row " alignItems="center"> 
                  <CoinsIcon/> 
                    <Text className="text-white text-[14px] xl:text-xl font-semi-bold text-center xl:text-start">+ de <b>260 MILHÕES<br /> SOB GESTÃO</b></Text>
                  </Flex>
                  {!isMobile ? <Stack className="w-[3px] h-full xl:h-[56px] bg-white bg-opacity-20"></Stack> : <></>}

                  <Flex className="xl:gap-4 gap-1 w-full flex-col xl:flex-row xl:justify-end  !mt-0" alignItems="center"> <PeopleIcon/> 
                    <Text className="text-white text-[14px] xl:text-xl font-semi-bold text-center xl:text-start">+ de <b>80 CLIENTES<br /> ATENDIDOS</b></Text>
                  </Flex>

              </Stack>

        </Stack> 

          {/*FORMULÁRIO*/}
          <Stack className="rounded-xl gap-4 justify-center bg-[#384599] px-6 py-4 xl:p-12 bg-opacity-90 max-w-[500px] w-full shadow-md">
            <Text className="text-white font-semibold text-center xl:text-start">PREENCHA O FORMULÁRIO ABAIXO:</Text>
            <Input label="NOME" placeholder="Digite seu nome"></Input>
            <Input label="E-MAIL" placeholder="Digite seu e-mail"></Input>
            <Input label="TELEFONE" placeholder="Digite seu telefone"></Input>
            <Input label="VALOR DISPONÍVEL INVESTIMENTO" placeholder="Digite o valor à investir $"></Input>

            <Button> QUERO CONHECER MAIS</Button>
          </Stack>
 </Flex>

   {/*CORRETORAS*/}
   <Stack className="gap-6 py-8">
            <Text className="font-bold text-white text-center text-[16px] xl:text-[20px] ">INSTITUIÇÕES PARCEIRAS</Text>
        <Flex className="gap-16 flex-row flex-wrap justify-center w-full">
            <XpIcon/>
            <GenialIcon/>
            <BtgIcon/>
            <AgoraIcon/>
        </Flex>
  </Stack>

</Stack> 

      </Stack>

    </Flex>
{/*FOOTER*/}
<Flex className="w-screen justify-center bg-[#4A538C]">
    <Flex className="max-w-[1400px] w-full xl:py-12 justify-center xl:justify-between gap-4 flex-wrap p-6">
    <Flex className="flex-col justify-end">
      <Flex className=" w-full gap-6 pb-4 ">
        <InstagramIcon className={`[&>path]:hover:!fill-green scale-[1.6] xl:scale-[2] origin-bottom-left [&>path]:transition-all`} />
        <FacebookIcon className={`[&>path]:hover:!fill-green scale-[1.6] xl:scale-[2] origin-bottom-left [&>path]:transition-all`}/>
        <LinkedinIcon className={`[&>path]:hover:!fill-green scale-[1.6] xl:scale-[2] origin-bottom-left [&>path]:transition-all`}/>
      </Flex>
      <Text className="text-white font-light text-sm">Av. Carlos Moreira Lima, 90 - Bento Ferreira - Vitória - ES, 29050-652</Text>
    </Flex>
    <Stack className="w-full xl:w-auto">
      <Text className="text-sm text-[#C8C8C8] font-medium pb-0">ALPHAMAR</Text>
      <Text className="text-sm text-white font-medium">Nosso serviços</Text>
      <Text className="text-sm text-white font-medium">Sobre nós</Text>
      <Text className="text-sm text-white font-medium">Dúvidas frequentes</Text>
    </Stack>

    <Stack className="w-full xl:w-auto">
      <Text className="text-sm text-[#C8C8C8] font-medium pb-0">FALE CONOSCO</Text>
      <Text className="text-sm text-white font-medium">27 9999-9999</Text>
      <Text className="text-sm text-white font-medium">contato@alphamarinvest.com</Text>
    </Stack>
    </Flex>


  </Flex>
  <Flex className="w-screen justify-center bg-[#374080] py-2 xl:py-4">
    <Stack className="max-w-[1400px] w-full ">
      <Text className="text-white font-light text-xs xl:text-sm text-center xl:text-start">Desenvolvido por Alphamar Investimentos LTDA  •  CNPJ: 18.061.570/0001-57  •  Todos os direitos reservados.</Text>
    </Stack>
  </Flex>
  </>
  );
}
