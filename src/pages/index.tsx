
import { Container } from "@/components/Container";
import { useWindow } from "@/hooks/useWindow";

import {  Flex, Stack, Image, Text } from "@chakra-ui/react";



export default function Home() {
  const { isMobile, isMedium } = useWindow({
    onScroll: () => {},
    onResize: (dimensions) => {},
  });

  return (
   <Container className="bg-[url('http://localhost:3002/backgrounds/bg.jpg')] no-repeat h-[1200px] w-full">
    <Flex className="align-center flex-row flex w-full justify-center">
      <Stack className="w-full p-[24px] flex-col gap-12  max-w-[1400px]">

      <Stack className="w-full flex-row">
        <Image width={164} height={40} src='https://static.wixstatic.com/media/6d7235_e3b476a582194297a1a2b740c6ec20e4~mv2.png/v1/fill/w_176,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Alphamar-Logomarca-Gesta%CC%83o-de-Investimen.png' alt='Dan Abramov' />
          <Text className="text-white font-light text-sm">Desfrute da vida que cuidamos do seu patrimônio</Text>
      </Stack> 

      <Stack className="p-4 rounded-md bg-red !flex-row gap-8 justify-center">
      <Stack className=" bg-white bg-opacity-20 rounded-xl !p-4">
          <Text className="text-white font-light text-sm">Desfrute da vida que cuidamos do seu patrimônio</Text>
        </Stack> 
        <Stack className=" bg-white bg-opacity-20 rounded-xl !p-4">
          <Text className="text-white font-light text-sm">Desfrute da vida que cuidamos do seu patrimônio</Text>
        </Stack> 
        <Stack className=" bg-white bg-opacity-20 rounded-xl !p-4">
          <Text className="text-white font-light text-sm">Desfrute da vida que cuidamos do seu patrimônio</Text>
        </Stack> 
      </Stack>

      </Stack>

      </Flex>
    </Container>
  );
}
