import {Flex, Spinner, Stack} from "@chakra-ui/react";
import {Wrapper} from "@/components/Wrapper";
import {useWindow} from "@/hooks/useWindow";
import {useEffect, useState} from "react";
import {useToast} from "@/hooks/useToast";
import InviteIcon from "../../../../../public/icons/Invite.svg";
import LoginIcon from "../../../../../public/icons/External.svg";
import {Text} from "@/components/Text"
import {Button} from "@/components/Button";
import {Link} from "@/components/Link";

type HeaderProps = {
    onOpenLoss: () => void
}
export function Header({onOpenLoss}: HeaderProps) {
    const {toast} = useToast()
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoading, setIsLoading] = useState({
        password: false
    })
    const {isMobile} = useWindow({
        onResize: () => {
            console.log(123, 333)
            if (!isMobile) {
                setIsMenuOpen(false)
            }
        },
        onScroll: ({y}) => {
            console.log(123, 555)
            setScrollPosition(prev => {
                return y
            })
        }
    })

    const closeMenu = () => setIsMenuOpen(false)
    const onScrollEvent = (e: Event) => {
        console.log(555, {e})
    }

    useEffect(() => {
        console.log(123, 321)
        window.addEventListener('scroll', onScrollEvent, false)
        return () => window.removeEventListener('scroll', onScrollEvent, false)
    }, [])
    return (
        <>
            <Flex className={`w-full min-h-[60px] md:min-h-[72px]`}/>
            <Flex
                className={`w-full ${true ? `bg-white` : `bg-gray_1/35`} p-4 md:p-40 !py-4 z-[100] h-[60px] md:h-[72px] transition-all relative top-0 left-0 !absolute ${isMenuOpen && `!items-start !bg-white z-[5000] rounded-b-xl`}`}>
                <Wrapper
                    className={`items-center justify-between h-full ${isMenuOpen && `m-0 flex-col !justify-start`}`}>

                    <Flex className={`items-center justify-between w-full`}>
                        <Link href={`/`} className={`!max-w-max`} >
                            <img src={"/logo-color.svg"} className={`w-max`} />
                        </Link>


                            <Flex
                                className={`items-center gap-8 [&>a]:min-w-max`}>
                                <Link href={`/`} className={`h2-semibold-uppercase !text-gray_1 cursor-pointer`}>INÍCIO</Link>
                                <Link href={`/nossos-servicos`} className={`h2-semibold-uppercase !text-gray_1 cursor-pointer`}>NOSSO SERVIÇOS</Link>
                                <Link href={`/quem-somos`} className={`h2-semibold-uppercase !text-gray_1 cursor-pointer`}>QUEM SOMOS</Link>
                            </Flex>

                        <Flex className={`gap-8`}>


                            <Button className={`!py-1`}>
                                <Flex
                                    className={`items-center gap-2 cursor-pointer [&>svg>path]:fill-white`}>
                                    <InviteIcon/>
                                    <Text
                                        className={`h3-semibold-uppercase md:!h-4 !text-white`}>SOLICITE SEU CONVITE</Text>
                                </Flex>
                            </Button>

                            <Flex
                                className={`items-center gap-2 cursor-pointer [&>svg>path]:fill-gray_1`}>
                                <LoginIcon/>
                                <Text
                                    className={`h2-semibold-uppercase !text-gray_1`}>LOGIN</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Wrapper>
            </Flex>

        </>
    )
}