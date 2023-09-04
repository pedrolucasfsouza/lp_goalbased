
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
<Flex className=" w-full bg-gray_1 flex-column justify-center min-h-screen" bgImage="url('http://localhost:3000/backgrounds/bg.jpg')"
  bgSize="cover"
  bgPosition="center">



{/*content*/}
  <Stack className="w-full p-[24px] flex-col max-w-[1400px]">

    <Stack className="w-full flex-row gap-6 py-8">
        <Stack className='gap-6'>
          <img width={190} src='http://localhost:3000/logo.png' alt='logo' />
            <Text className="text-white font-light text-sm">Desfrute da vida que cuidamos do seu patrimônio</Text>
        </Stack>

{/*CARD CENTRAL*/}
<Flex className=" flex flex-row gap-6  justify-between">
        {/*CARD 1 DESCUBRA*/}
        <Stack className=" rounded-xl gap-4 justify-center bg-[#4A538C80] p-8  max-w-[700px] shadow-md">

          <Text className='text-white text-xl'>Descubra como a <b>Alphamar Investimentos</b> pode te ajudar a gerenciar o <b>seu patrimônio e da sua familia.</b></Text>
          <Text className="text-white font-light text-sm">Se você acredita que uma alocação eficaz é a que alia gestão de risco com maximização de retorno, o seu lugar é entre os 1% que de fato ganham dinheiro no mercado financeiro.</Text>
        
            <Stack className="gap-4 px-4 py-8">
                <Flex className="gap-2" align={'center'}>
                  <Stack className="w-[24px] "><CheckedIcon/></Stack> <Text className="text-white">Não recebemos comissões de instituições financeiras, gerando total alinhamento aos interesses do investidor.</Text>
                </Flex>

                <Flex className="gap-2" align={'center'}>
                  <Stack className="w-[24px] "><CheckedIcon/></Stack> <Text className="text-white">Não recebemos comissões de instituições financeiras, gerando total alinhamento aos interesses do investidor.</Text>
                </Flex>
            </Stack>

            {/*FOOTER CARD1*/}
              <Stack className=" w-full flex flex-row justify-between p-6" margin={'-32px'} direction={'row'}>
                  <Flex className="gap-4 w-full" alignItems="center"> <CoinsIcon/> 
                    <Text className="text-white text-xl font-semi-bold">+ de <b>260 MILHÕES<br /> SOB GESTÃO</b></Text>
                  </Flex>
                  <Stack className="w-[3px] h-full bg-white bg-opacity-20"></Stack>

                  <Flex className="gap-4 w-full justify-end" alignItems="center"> <PeopleIcon/> 
                    <Text className="text-white text-xl font-semi-bold ">+ de <b>80 CLIENTES<br /> ATENDIDOS</b></Text>
                  </Flex>

              </Stack>

        </Stack> 

          {/*FORMULÁRIO*/}
          <Stack className="rounded-xl gap-6 justify-center bg-[#4A538C80] p-8 bg-opacity-10 max-w-[600px] w-full shadow-md">
            <Text className="text-white font-semibold">PREENCHA O FORMULÁRIO ABAIXO:</Text>
            <Input label="NOME"></Input>
            <Input label="E-MAIL"></Input>
            <Input label="TELEFONE"></Input>

            <Button> QUERO CONHECER MAIS</Button>
          </Stack>
 </Flex>

   {/*CORRETORAS*/}
   <Stack className="gap-8 py-8">
            <Text className="font-bold text-white text-center text-[24px]">INSTITUIÇÕES PARCEIRAS</Text>
            <Flex className="gap-16 flex-row justify-center w-full">
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
    <Flex className="max-w-[1400px] w-full py-12 justify-between">
    <Flex className="flex-col justify-end">
      <Flex className=" w-full gap-6 pb-4 ">
        <InstagramIcon className={`[&>path]:hover:!fill-green scale-[2] origin-bottom-left [&>path]:transition-all`} />
        <FacebookIcon className={`[&>path]:hover:!fill-green scale-[2] origin-bottom-left [&>path]:transition-all`}/>
        <LinkedinIcon className={`[&>path]:hover:!fill-green scale-[2] origin-bottom-left [&>path]:transition-all`}/>
      </Flex>
      <Text className="text-white font-light text-sm">Av. Carlos Moreira Lima, 90 - Bento Ferreira - Vitória - ES, 29050-652</Text>
    </Flex>
    <Stack className="">
      <Text className="text-sm text-[#C8C8C8] font-medium pb-2">ALPHAMAR</Text>
      <Text className="text-sm text-white font-medium">Nosso serviços</Text>
      <Text className="text-sm text-white font-medium">Sobre nós</Text>
      <Text className="text-sm text-white font-medium">Dúvidas frequentes</Text>
    </Stack>

    <Stack className="">
      <Text className="text-sm text-[#C8C8C8] font-medium pb-2">FALE CONOSCO</Text>
      <Text className="text-sm text-white font-medium">27 9999-9999</Text>
      <Text className="text-sm text-white font-medium">contato@alphamarinvest.com</Text>
    </Stack>
    </Flex>


  </Flex>
  <Flex className="w-screen justify-center bg-[#374080] py-4">
    <Stack className="max-w-[1400px] w-full ">
      <Text className="text-white font-light text-sm">Desenvolvido por Alphamar Investimentos LTDA  •  CNPJ: 18.061.570/0001-57  •  Todos os direitos reservados.</Text>
    </Stack>
  </Flex>
  </>
  );
}
