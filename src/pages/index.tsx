
import { Container } from "@/components/Container";
import { useWindow } from "@/hooks/useWindow";

import {  Flex, Stack, Image, Text, Box, } from "@chakra-ui/react";
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
import { InputMask } from "@/components/InputMask";

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

  const handleSubmit = async (data:any) => {

    try {
      const response = await submitData(data);

      if (response.success) {
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
  <Stack className="w-full p-2 xl:p-6 flex-col max-w-[1200px]">
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

<Flex className="xl:gap-6 gap-2 items-center flex-col lg:flex-row justify-between">
        {/*CARD 1 DESCUBRA*/}
        <Flex>
        <Fade left>
          <Stack className="rounded-xl flex xl:gap-4 gap-2 justify-center md:max-w-[500px] bg-[#384599] bg-opacity-60 xl:p-12 xl:pb-[28px] px-4 py-6 max-w-[500px] xl:max-w-[600px] shadow-md">

          <Text className='text-white text-[16px] leading-5 xl:text-[24px] xl:leading-6'>Descubra como a <b>Alphamar Investimentos</b> pode te ajudar a gerenciar o <b>seu patrimônio e da sua familia.</b></Text>
          <Text className="text-white font-light text-xs xl:text-sm">Se você acredita que uma alocação eficaz é a que alia gestão de risco com maximização de retorno, o seu lugar é entre os 1% que de fato ganham dinheiro no mercado financeiro.</Text>
        
            <Stack className="gap-4 xl:px-2 py-2">
                <Flex className="gap-2" align={'center'}>
                  <Stack className="w-[24px] "><CheckedIcon className={ 'scale-[0.70] xl:scale-[1]'}/></Stack> <Text className="text-white text-xs xl:text-sm">Não recebemos comissões de instituições financeiras, gerando total alinhamento aos interesses do investidor.</Text>
                </Flex>

                <Flex className="gap-2" align={'center'}>
                  <Stack className="w-[24px] "><CheckedIcon className={ 'scale-[0.70] xl:scale-[1]'}/></Stack> <Text className="text-white text-xs xl:text-sm">Não recebemos comissões de instituições financeiras, gerando total alinhamento aos interesses do investidor.</Text>
                </Flex>
            </Stack>

            {/*FOOTER CARD1*/}
              <Stack className="w-full flex !flex-row justify-between gap-2 bg-[#5463b6] bg-opacity-60 rounded-xl p-1 py-2 xl:p-2 xl:py-4 " >

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

        </Fade>
        </Flex>

          {/*FORMULÁRIO*/}
        
          <Stack className="rounded-xl gap-4 justify-center bg-[#384599] px-6 py-4 xl:p-12 bg-opacity-80 max-w-[500px] w-full shadow-md">
            <Text className="text-white font-semibold text-center xl:text-start py-2">PREENCHA O FORMULÁRIO ABAIXO:</Text>
            <Input resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'name'} label="NOME" placeholder="Digite seu nome"></Input>
            <Input resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'email'} label="E-MAIL" placeholder="Digite seu e-mail"></Input>
            <InputMask mask="phone" resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'telefone'} label="TELEFONE" placeholder="Digite seu telefone"></InputMask>
            <InputMask mask="currency" resetField={resetField} clearable={true} control={control} rules={{required: "Campo obrigatório"}} name={'investimento'} label="VALOR DISPONÍVEL P/ INVESTIR" placeholder="Digite o valor à investir $"></InputMask>
            <Button onClick={() => handleSignUp()} isLoading={isLoading}> QUERO CONHECER MAIS</Button>
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
