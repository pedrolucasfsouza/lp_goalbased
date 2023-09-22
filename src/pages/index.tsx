
import { Container } from "@/components/Container";
import { useWindow } from "@/hooks/useWindow";

import {  Flex, Stack, Image, Text, Box, Link, } from "@chakra-ui/react";
import CheckedIcon from '../../public/icons/confirmed-white.svg'
import GiftIcon from '../../public/icons/gift.svg'
import PeopleIcon from '../../public/icons/peoples.svg'
import CoinsIcon from '../../public/icons/coins.svg'
import XpIcon from '../../public/icons/xp.svg'
import GenialIcon from '../../public/icons/genial.svg'
import BtgIcon from '../../public/icons/btg.svg'
import AgoraIcon from '../../public/icons/agora.svg'
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

  const handleSubmit = async (data:any) => {

    try {
      const response = await submitData(data);

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
<Flex className="w-full bg-gray_1 flex-column justify-center min-h-screen" bgImage="url('/backgrounds/bg.jpg')"
  bgSize="cover"
  bgPosition="center">



{/*content*/}
  <Stack className="w-full p-4 xl:p-6 flex-col max-w-[1200px]">
    <Stack className="w-full flex-row xl:gap-6 gap-1 py-0 xl:py-8">
    <Flex>
  <Fade bottom> 
        <Stack className='gap-0 xl:gap-2 xl:pb-4 py-2  items-center xl:items-start'>

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
          <Stack className="rounded-xl flex xl:gap-4 gap-2 justify-center md:max-w-[500px] bg-[#fff] bg-opacity-80 xl:p-12 xl:pb-[28px] px-6 py-6 max-w-[500px] xl:max-w-[600px] shadow-md">
          {/* <Stack className="w-[24px] h-[24px] backdrop:blur-sm bg-[#0e1c63] rounded-md"></Stack> */}
          <Stack className="gap-1">
            <Text className='text-[#0e1c63] text-[16px] leading-5 xl:text-[22px] xl:leading-7'>Cuidamos do seu dinheiro para você <b>investir no que realmente é importante</b> para você.</Text>
            <Text className="text-[#0e1c63] font-light text-xs xl:text-sm">
            Você está pronto para <b>transformar</b> a maneira como o seu <b>patrimônio é gerenciado?</b></Text>
          </Stack>
            <Stack className="gap-4 xl:px-2 py-2 ">

            <Flex className="gap-2" align={'center'}>
               <Stack className="w-[24px] "> <Stack className="animate-bounce hover:animate-none"><Stack className="animate-pulse hover:animate-none"><CheckedIcon className={ 'scale-[0.70] xl:scale-[1] rounded-md'}/></Stack> </Stack></Stack><Text className="text-[#0e1c63]  text-xs xl:text-sm">Nós faremos todo trabalho para você, desde a seleção dos ativos à implementação e acompanhamento das estratégias.</Text>
                </Flex>


                <Flex className="gap-2" align={'center'}>
                  <Stack className="w-[24px] "><Stack className="animate-bounce hover:animate-none"><Stack className="animate-pulse hover:animate-none"><CheckedIcon className={ 'scale-[0.70] xl:scale-[1] rounded-md'}/></Stack> </Stack> </Stack><Text className="text-[#0e1c63] text-xs xl:text-sm">Dê a si mesmo o presente do tempo, enquanto cuidamos do seu patrimônio.</Text>
                </Flex>
                

            

                <Flex className="gap-2" align={'center'}>
                  <Stack className="w-[24px] "><Stack className="animate-bounce hover:animate-none"><Stack className="animate-pulse hover:animate-none"><GiftIcon className={ 'scale-[0.70] xl:scale-[1] rounded-md'}/></Stack> </Stack> </Stack><Text className="text-[#0e1c63] text-xs xl:text-sm">Complete o formulário e receba <b>um presente especial</b>. Desfrute de uma experiencia feita especialmente para você!</Text>
                </Flex>
 
                
            </Stack>

            {/*FOOTER CARD1*/}
              <Stack className="w-full flex !flex-row justify-between gap-2 bg-[#0e1c63] bg-opacity-80 rounded-xl p-1 py-2 xl:px-4 xl:py-4 " >

                  <Flex className="xl:gap-4 gap-1 w-full flex-col xl:flex-row" alignItems="center"> 
                 <Stack className="animate-pulse hover:animate-none">
                  <CoinsIcon/> 
                  </Stack>
                    <Text className="text-white text-[14px] xl:text-lg font-semi-bold text-center xl:text-start">+ de <b>260 MILHÕES<br /> SOB GESTÃO</b></Text>
                  </Flex>
                  {!isMobile ? <Stack className="w-[3px] h-full xl:h-[56px] bg-white bg-opacity-20"></Stack> : <></>}

                  <Flex className="xl:gap-4 gap-1 w-full flex-col xl:flex-row xl:justify-end !mt-0" alignItems="center"> 
                  <Stack className="animate-pulse hover:animate-none">
                  <PeopleIcon/>
                  </Stack> 
                    <Text className="text-white text-[14px] xl:text-lg font-semi-bold text-center xl:text-start">+ de <b>80 CLIENTES<br /> ATENDIDOS</b></Text>
                  </Flex>

              </Stack>

              <Flex className="gap-2" align={'center'}>
                  <Stack className="w-[24px] "><Stack><MapPinIcon/></Stack> </Stack><Text className="text-[#0e1c63] text-[10px] xl:text-xs">Av. Carlos Moreira Lima, 90 - Bento Ferreira - Vitória - ES, 29050-652 </Text>
                </Flex>

        </Stack> 

        </Fade>
        </Flex>
        

          {/*FORMULÁRIO*/}
        
          <Stack className="rounded-xl gap-4 justify-center bg-[#0e1c63] px-6 py-4 xl:px-12 xl:py-10 bg-opacity-80 max-w-[500px] w-full shadow-md">
            <Text autoFocus={false} className="text-white font-semibold text-center xl:text-start py-1 uppercase">PREENCHA PARA SABER MAIS:</Text>
            <Input autoFocus={false} resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'name'} label="NOME" placeholder="Digite seu nome"></Input>
            <Input autoFocus={false} resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'email'} label="E-MAIL" placeholder="Digite seu e-mail"></Input>
            <InputMask autoFocus={false} mask="phone" resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'telefone'} label="TELEFONE" placeholder="Digite seu telefone"></InputMask>
            <InputMask autoFocus={false} mask="currency" resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'investimento'} label="VALOR DISPONÍVEL P/ INVESTIR" placeholder="Digite o valor à investir $"></InputMask>
            <Button onClick={() => handleSignUp()} isLoading={isLoading}>QUERO SABER MAIS</Button>
            <Flex className="gap-2">
            <LockIcon/><Text className="text-white text-[10px] font-thin p-0">Os seus dados estão 100% seguros. Após o envio, você terá acesso à todas as informações relacionadas aos serviços exclusivos da Alphamar Investimentos.</Text>
            </Flex>
          </Stack>

 </Flex>

   {/*CORRETORAS*/}
   <Flex>
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
  </Flex>

</Stack> 

      </Stack>

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
