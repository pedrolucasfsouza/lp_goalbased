
import { Container } from "@/components/Container";
import { useWindow } from "@/hooks/useWindow";

import {  Flex, Stack, Image, Text, Box, Link, Button as ButtonInvestir } from "@chakra-ui/react";
import CheckedIcon from '../../public/icons/confirmed-white.svg'
import GiftIcon from '../../public/icons/gift.svg'
import PeopleIcon from '../../public/icons/peoples.svg'
import CoinsIcon from '../../public/icons/coins.svg'
import XpIcon from '../../public/icons/xp.svg'
import GenialIcon from '../../public/icons/genial.svg'
import BtgIcon from '../../public/icons/btg.svg'
import AgoraIcon from '../../public/icons/ai-logo-agora.svg'
import InstagramIcon from '../../public/icons/Instagram.svg'
import LockIcon from '../../public/icons/lock.svg'
import FacebookIcon from '../../public/icons/Facebook.svg'
import LinkedinIcon from '../../public/icons/LinkedIn.svg'
import MapPinIcon from '../../public/icons/map.svg'
import {Input} from '../components/Input'
import { Button } from "@/components/Button";
import  {submitData}  from "./api/submit";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {useToast} from "@/hooks/useToast";
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import Fade from "react-reveal/Fade";
import { InputMask } from "@/components/InputMask";
import { useRouter } from "next/router";
import { chakra } from '@chakra-ui/react'

export type SignUpProps = {
    email: string
    password: string
    password_confirm?: string
    name: string
    document_number: string
    phone_number: string
    invite_code: string
    create_first_admin_user: boolean
    terms?: boolean
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();
  const { utm_campaign, utm_content} = router.query


const {toast} = useToast()
	const {
		control,
		trigger,
		clearErrors,
		watch,
		getValues,
		resetField,
		reset
	} = useForm<SignUpProps>()
	useWindow({
		onEnterClick: () => {
			if (!isLoading) {
				handleSignUp()
			}
		}
	})
    const { isMobile, isMedium } = useWindow({
    onScroll: () => {},
    onResize: (dimensions) => {},
  });


  const MagicLink = chakra<typeof NextLink, NextLinkProps>(NextLink, {
    shouldForwardProp: (prop) => ['href', 'target', 'children'].includes(prop),
  })

  const scrollToSection = () => {
    const targetSection = document.getElementById("cadastro");
  
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  const handleSubmit = async (data:any) => {

    try {
      const response = await submitData({...data, campanha: utm_campaign, conteudo: utm_content});

      if (response.success) {
        await router.push('/sucesso');
        toast({message: 'Cadastro efetuado com sucesso', type: "success"})
      } else {
        toast({message: 'Ocorreu algum erro ao cadastrar', type: "error"})
      }
    } catch (error) {
      toast({message: 'Ocorreu algum erro ao cadastrar', type: "error"})
    }
  };
  	const handleSignUp = async () => {
		try {
			if (!await trigger()) {
				return
			}
      setIsLoading(true)
			const payload = getValues()
      await handleSubmit(payload)
			setIsLoading(false)

		} catch (e) {
      setIsLoading(false)
		}
	}

  useEffect(() => {

		watch((data, {name}) => {
			clearErrors(name)

		})
	}, [])



  return (
    <>
<Flex className="w-full bg-[#313978] flex-column justify-center min-h-70"
  bgSize="cover"
  bgPosition="center">



{/*content*/}
  <Stack className="w-full p-4 xl:p-6 flex-col max-w-[1200px]">
    <Stack className="w-full flex-row xl:gap-6 gap-1 py-0 xl:py-8">
    <Flex>
  <Fade bottom> 
        <Stack className='gap-0 xl:gap-2 xl:pb-2 items-center xl:items-start'>

          <Flex>

          <img width={isMobile ? 120 : 172} src='/logo-large.svg' alt='logo' />
          </Flex>
        </Stack>
        </Fade>
</Flex>
{/*CARD CENTRAL*/}

<Flex className="xl:gap-6 gap-2 items-center flex-col lg:flex-row justify-between ">
        {/*CARD 1 DESCUBRA*/}
        <Flex>
        <Fade left>
  <Stack className="rounded-xl flex xl:gap-4 gap-2  md:max-w-[500px] bg-opacity-80 py-6 px-4 max-w-[500px] xl:max-w-[600px]">
  <Flex className="flex-col gap-2">
    {/* <Stack className="bg-[#1B204A] p-1 w-48">
    <Text className="text-white font-bold text-[16px]">O QUE FAZEMOS?</Text></Stack> */}
<Text className="text-white font-bold text-[26px]"><b>Fundo de Ações focado em rentabilidade</b></Text>

<Text className="text-gray_3 font-medium text-[14px]">Aumente o seu patrimônio enquanto desfruta de mais tempo e qualidade de vida. Concentre-se em seus aportes, enquanto assumimos a responsabilidade pelo estudo e estratégia.</Text>

</Flex>
        </Stack> 

        </Fade>
        </Flex>
        

          {/*FORMULÁRIO*/}
        <div id="cadastro">
          <Stack className="rounded-xl gap-4 justify-center bg-[#1B204A] px-6 py-4 xl:px-12 xl:py-10 bg-opacity-80 max-w-[500px] w-full shadow-md">
           
            <Text autoFocus={false} className="text-white font-semibold xl:text-start py-1 uppercase">QUERO CONHECER O FUNDO DE AÇÕES:</Text>
            <Input autoFocus={false} resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'name'} label="NOME" placeholder="Digite seu nome"></Input>
            <Input autoFocus={false} resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'email'} label="E-MAIL" placeholder="Digite seu e-mail"></Input>
            <InputMask autoFocus={false} mask="phone" resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'telefone'} label="TELEFONE" placeholder="Digite seu telefone"></InputMask>
            {/* <InputMask autoFocus={false} mask="currency" resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'investimento'} label="VALOR DISPONÍVEL P/ INVESTIR" placeholder="Digite o valor à investir $"></InputMask> */}
            <Button onClick={() => handleSignUp()} isLoading={isLoading}>QUERO CONHECER</Button>
            <Flex className="gap-2">
            <LockIcon/><Text className="text-white text-[10px] font-thin p-0">Os seus dados estão 100% seguros. Após o envio, você terá acesso as informações do <b>fundo de ações</b> da Alphamar Investimentos.</Text>
            </Flex>
          </Stack>
          </div>

 </Flex>
</Stack> 
      </Stack>
    </Flex>


{/*O QUE É O FUNDO?*/}
<Flex className="box-shadow-custom w-full bg-[#1B204A] justify-center">
    <Stack className=" p-4 py-8 max-w-[1200px] w-full gap-2 ">
    <Flex>
   <Fade bottom>
   <Stack className="gap-4">
   <Flex className="justify-left"><Stack className="bg-[#313978] py-2 px-6"> <Text className="font-bold text-white text-center text-[16px] xl:text-[16px] ">O QUE É O FUNDO DE AÇÕES ALPHAMAR?</Text></Stack></Flex>

   <Text className="text-white font-medium text-[14px]">O fundo de Ações da Alphamar investimentos é composto por ações escolhidas cuidadosamente por nosso time de gestão. Atualmente Estamos entre os 7% melhores fundos abertos no ano de 2023. </Text>
   <Flex className="justify-center xl:justify-start">
   <ButtonInvestir onClick={() => scrollToSection()} className="border-white 
            cursor-pointer 
            !flex 
            text-[white]
            items-center 
            border 
            !py-4 
            max-w-[180px]
            !px-16
            h2-semibold 
            rounded-xl
            shadow-xl
            transition-all
            hover:opacity-80">Quero Saber Mais</ButtonInvestir></Flex>

  </Stack>
  </Fade>
  </Flex>
  </Stack>
  </Flex>


  <Flex className="box-shadow-custom w-full bg-[white] justify-center">
    <Stack className=" p-4 py-8 max-w-[1200px] w-full gap-2 ">
    <Flex>
   <Fade bottom>
   <Stack className="">
   <Flex className="justify-LEFT"><Stack className="bg-[#1B204A] py-2 px-6"> <Text className="font-bold text-white text-center text-[16px] xl:text-[16px] ">O QUE É A ALPHAMAR INVESTIMENTOS?</Text></Stack></Flex>

   <Text className="text-[#1B204A] font-medium text-[14px]">A Alphamar Investimentos é a maior gestora de patrimônio independente no estado do Espírito Santo. Nossa sede fica na capital Vitória. Estamos no mercado desde 2012 e fazemos a gestão de mais de R$260 milhões com clientes que reconhecem o valor de uma gestão profissional dos seus investimentos.</Text>

  </Stack>
  </Fade>
  </Flex>
  </Stack>
  </Flex>


{/*DEPOIMENTO*/}
  <Flex className="box-shadow-custom w-full bg-white justify-center">
    <Stack className=" p-4 max-w-[1200px] w-full gap-2 ">
      <Flex className="justify-center flex-col gap-2">
        <Flex className="justify-center"><Stack className="bg-[#1B204A] py-2 px-6"> <Text className="font-bold text-white text-center text-[16px] xl:text-[16px] ">DEPOIMENTOS</Text></Stack></Flex>
         <Text className="text-center text-gray_3">O que os nossos clientes estão falando de nós...</Text>
    </Flex>

    <Flex className="gap-4 justify-center flex-col align-middle items-center xl:flex-row">
      <Stack className="bg-[#313978] p-4 max-w-[296px] h-full">
        <Text className="text-white font-bold text-[22px]">Iolanda</Text>
        <Text className="text-white font-medium">“Receptividade, cordialidade, clareza nas explicações, paciência para ouvir o cliente e disponibilidade para novos contatos.”</Text>
      </Stack>

      <Stack className="bg-[#313978] p-4 max-w-[296px] h-full">
        <Text className="text-white font-bold text-[22px]">Helena</Text>
        <Text className="text-white font-medium">“Estou muito satisfeita com o serviço de gestão de investimentos da Alphamar. São profissionais competentes, que estão sempre me informando sobre os resultados e me mantendo tranquila. Tenho certeza que meu patrimônio está em boas mãos. Recomendo!”</Text>
      </Stack>

      <Stack className="bg-[#313978] p-4 max-w-[296px] h-full">
        <Text className="text-white font-bold text-[22px]">Henrique</Text>
        <Text className="text-white font-medium">“Melhor empresa de investimentos do Espírito Santo, sem dúvida alguma. Resultados consistentes e atendimento de excelência.”</Text>
      </Stack>
    </Flex>

    </Stack>
  </Flex>


{/*DEPOIMENTO*/}
<Flex className="box-shadow-custom w-full bg-[#1B204A] justify-center">
    <Stack className=" p-4 max-w-[1200px] w-full gap-2 ">
    <Flex>
   <Fade bottom>
   <Stack className="gap-6 py-8 ">
    <Flex className="justify-center">
      <Stack className="bg-[#1B204A] py-2 px-8">
            <Text className="font-bold text-white text-center text-[16px] xl:text-[16px] ">INSTITUIÇÕES PARCEIRAS</Text>
            </Stack></Flex>
        <Flex className="gap-16 flex-row flex-wrap items-center justify-center w-full">
            <XpIcon/>
            <GenialIcon/>
            <BtgIcon/>
            <AgoraIcon/>
        </Flex>
  </Stack>
  </Fade>
  </Flex>
  </Stack>
  </Flex>


  <Flex className="box-shadow-custom w-full bg-[#1B204A] justify-center">
    <Flex className=" p-4 max-w-[1200px] w-full gap-6 flex-col align-middle justify-center items-center">
      <Flex className="justify-center flex-col gap-2">
        <Flex className="justify-center"><Stack className="bg-[#313978] py-2 px-6"> <Text className="font-bold text-white text-center text-[16px] xl:text-[16px] ">VAMOS INVESTIR?</Text></Stack></Flex>
         {/* <Text className="text-center text-gray_3">Conheça hoje asessoria premium</Text> */}
    </Flex>
    <Text className="text-white font-bold text-[32px] text-center max-w-[600px]">Comece agora a contar com uma gestão profissional e deixe de se preocupar com seus investimentos.</Text>

    <ButtonInvestir onClick={() => scrollToSection()} className="border-white 
            cursor-pointer 
            !flex 
            text-[white]
            items-center 
            border 
            !py-4 
            !px-16
            h2-semibold 
            rounded-xl
            shadow-xl
            transition-all
            hover:opacity-80">Quero Investir</ButtonInvestir>
    </Flex>



  </Flex>



{/*FOOTER*/}

<Flex className="w-screen justify-center bg-[#253074]">
    <Flex className="max-w-[1200px] w-full xl:py-12 justify-center xl:justify-between gap-4 flex-wrap p-6">
    <Flex className="flex-col justify-end">
      <Flex className=" w-full gap-6 pb-4 ">
      <MagicLink target='_blank' href={`https://www.instagram.com/alphamar/?hl=en`} 
      className={`text-sm text-white font-medium cursor-pointer hover:underline`}>
                      <InstagramIcon className={`[&>path]:hover:!fill-[#8f8f8f] scale-[1.6] xl:scale-[2] origin-bottom-left [&>path]:transition-all`} />
       </MagicLink>

       <MagicLink target='_blank' href={`https://www.facebook.com/alphamarinvestimentos/?locale=pt_BR`} 
      className={`text-sm text-white font-medium cursor-pointer hover:underline`}>
                      <FacebookIcon className={`[&>path]:hover:!fill-[#8f8f8f] scale-[1.6] xl:scale-[2] origin-bottom-left [&>path]:transition-all`} />
       </MagicLink>

       <MagicLink target='_blank' href={`https://www.linkedin.com/company/alphamar-investimentos/`} 
      className={`text-sm text-white font-medium cursor-pointer hover:underline`}>
                      <LinkedinIcon className={`[&>path]:hover:!fill-[#8f8f8f] scale-[1.6] xl:scale-[2] origin-bottom-left [&>path]:transition-all`} />
       </MagicLink>

      </Flex>
      <Text className="text-white font-light text-sm">Av. Carlos Moreira Lima, 90 - Bento Ferreira - Vitória - ES, 29050-652</Text>
    </Flex>
    
    <Stack className="w-full xl:w-auto">
      <Text className="text-sm text-[#ffffff] font-medium pb-0">ALPHAMAR</Text>
      <MagicLink target='_blank' href={`https://www.alphamarinvest.com/sobre`} 
      className={`text-sm text-white font-medium cursor-pointer hover:underline`}>
                      Sobre nós
       </MagicLink>
       <MagicLink  target='_blank' href={`https://www.alphamarinvest.com/copy-of-sobre-2`} 
      className={`text-sm text-white font-medium cursor-pointer hover:underline`}>
      Nossos serviços
       </MagicLink>
      <MagicLink  target='_blank' href={`https://www.alphamarinvest.com/d%C3%BAvidasfrequentes`} 
      className={`text-sm text-white font-medium cursor-pointer hover:underline`}>
      Dúvidas Frequentes
       </MagicLink>
    </Stack>

    <Stack className="w-full xl:w-auto">
      <Text className="text-sm text-[#C8C8C8] font-medium pb-0 ">FALE CONOSCO</Text>
        <MagicLink  target='_blank' href={`https://api.whatsapp.com/send?phone=5527998195578&text=Vim%20pelo%20landingpage%20da%20Alphamar%20Investimentos%20e%20gostaria%20de%20saber%20mais.`} 
        className={`text-sm text-white font-medium cursor-pointer hover:underline`}>
        (27) 99819-5578
        </MagicLink>
      <Text className="text-sm text-white font-medium">contato@alphamarinvest.com</Text>
    </Stack>
    </Flex>

  </Flex>
  <Flex className="w-screen justify-center bg-[#374080] py-2 xl:py-4">
    <Stack className="max-w-[1200px] w-full ">
      <Text className="text-white font-light text-xs xl:text-sm text-center xl:text-start">Desenvolvido por Alphamar Investimentos LTDA  •  CNPJ: 11.000.859/0001-17  •  Todos os direitos reservados.</Text>
    </Stack>
  </Flex>
  </>
  );
}