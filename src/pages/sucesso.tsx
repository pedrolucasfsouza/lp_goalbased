
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
import  {submitData}  from "./api/submit";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {useToast} from "@/hooks/useToast";
import Fade from "react-reveal/Fade";


export default function Home() {

    const { isMobile, isMedium } = useWindow({
    onScroll: () => {},
    
    onResize: (dimensions) => {},
  });

  useEffect(() => {
    // Adicione a tag de conversão aqui
    const script = document.createElement("script");
    script.innerHTML = `
      gtag('event', 'conversion', {'send_to': 'AW-11334924122/pX_hCN6K_-AYENru9Jwq'});
    `;
    document.head.appendChild(script);
  }, []);


  return (
    <>
<Flex className="w-full bg-gray_1 flex-column justify-center min-h-screen" bgImage="url('/backgrounds/bg.jpg')"
  bgSize="cover"
  bgPosition="center">



{/*content*/}
  <Stack className="w-full p-2 xl:p-6 flex-col max-w-[1200px]">

    <Stack className="w-full flex-row xl:gap-6 gap-1 py-0 xl:py-8">
        <Stack className='gap-0 xl:gap-2 xl:pb-4 py-2  items-center xl:items-start'>
          <img width={isMobile ? 120 : 170} src='/logo-large.svg' alt='logo' />
           
        </Stack>

{/*CARD CENTRAL*/}
<Fade top>
<Flex className="justify-center">
<Flex className="rounded-xl flex flex-col text-sm md:text-md justify-center bg-[#384599] bg-opacity-60 p-6 max-w-[800px] shadow-md">
       <Text className="text-white font-medium text-xl pb-6">
        Sucesso!
       </Text>

       <Text className="text-white font-thin text-md">
       Seu formulário foi recebido pela Alphamar Investimentos. Em alguns instantes o nosso <b>Departamento de relações com o investidor</b> entrará em contato via telefone.
       </Text>
 </Flex>
 </Flex>
 </Fade>
   {/*CORRETORAS*/}
   <Fade bottom>
   <Stack className="gap-6 py-8">
            <Text className="font-bold text-white text-center text-[16px] xl:text-[20px] ">INSTITUIÇÕES PARCEIRAS</Text>
        <Flex className="gap-16 flex-row flex-wrap justify-center w-full">
            <XpIcon/>
            <GenialIcon/>
            <BtgIcon/>
            <AgoraIcon/>
        </Flex>
  </Stack>
  </Fade>
</Stack> 

      </Stack>

    </Flex>
{/*FOOTER*/}
<Flex className="w-screen justify-center bg-[#4A538C]">
    <Flex className="max-w-[1200px] w-full xl:py-12 justify-center xl:justify-between gap-4 flex-wrap p-6">
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
    <Stack className="max-w-[1200px] w-full ">
      <Text className="text-white font-light text-xs xl:text-sm text-center xl:text-start">Desenvolvido por Alphamar Investimentos LTDA  •  CNPJ: 18.061.570/0001-57  •  Todos os direitos reservados.</Text>
    </Stack>
  </Flex>
  </>
  );
}
