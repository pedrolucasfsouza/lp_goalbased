import {Flex, Spinner, Stack} from "@chakra-ui/react";
import {Wrapper} from "@/components/Wrapper";
import Hamburger from 'hamburger-react'
import {useWindow} from "@/hooks/useWindow";
import {useEffect, useState} from "react";
import {Text} from "@/components/Text";

import InviteIcon from "../../../../../public/icons/Invite.svg";
import LoginIcon from "../../../../../public/icons/External.svg";
import LogoutIcon from "../../../../../public/icons/logout.svg";
import SettingsIcon from "../../../../../public/icons/settings.svg";
import HelpIcon from "../../../../../public/icons/help.svg";
import PrejuizosIcon from "../../../../../public/icons/prejuizos.svg";
import PasswordIcon from "../../../../../public/icons/password.svg";
import DeleteIcon from "../../../../../public/icons/delete.svg";
import LogoutMobileIcon from "../../../../../public/icons/logout-mobile.svg";
import AdminIcon from "../../../../../public/icons/administrator.svg";
import ProfileIcon from "../../../../../public/icons/profile-icon.svg";
import Fade from "react-reveal/Fade"
import {DropdownMenu} from "@/components/DropdownMenu";
import {useToast} from "@/hooks/useToast";
import {Link} from "@/components/Link";
import {Button} from "@/components/Button";

type HeaderProps = {
}

export function Header({}: HeaderProps) {
    const {toast} = useToast()
    const [scrollPosition, setScrollPosition] = useState(0);

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoading, setIsLoading] = useState({
        password: false
    })
    const {isMobile} = useWindow({
        onResize: () => {
            //console.log(123, 333)
            if (!isMobile) {
                setIsMenuOpen(false)
            }
        },
        onScroll: ({y}) => {
            //console.log(123, 555)
            setScrollPosition(prev => {
                return y
            })
        }
    })

    const closeMenu = () => setIsMenuOpen(false)
    const onScrollEvent = (e: Event) => {
        //console.log(555, {e})
    }

    useEffect(() => {
        //console.log(123, 321)
        window.addEventListener('scroll', onScrollEvent, false)
        return () => window.removeEventListener('scroll', onScrollEvent, false)
    }, [])

    return (
        <>
            <Flex className={`w-full min-h-[60px] md:min-h-[72px]`}/>
            <Flex
                className={`w-full bg-white p-4 md:p-40 !py-4 z-[100] h-[60px] md:h-[72px] transition-all relative top-0 left-0 !absolute ${isMenuOpen && `!items-start !bg-white !h-[450px] z-[5000] rounded-b-xl`}`}>
                <Wrapper
                    className={`items-center justify-between h-full ${isMenuOpen && `m-0 flex-col !justify-start`}`}>
                    <Flex className={`items-center justify-between min-w-full gap-8`}>
                        <Link href={`/`} className={`!max-w-max ${isMenuOpen && `!hidden`}`}>
                            <img src={"/logo-color.svg"}
                                 className={`w-[90px] min-w-[90px] md:min-w-[120px] md:w-[120px]`}/>
                        </Link>
                        <>
                            {isMobile ? (
                                <Flex className={`items-center ${isMenuOpen && `w-full justify-between pl-4`}`}>
                                    <Link href={`https://dev.boleta.ai/fila-de-espera`} >
                                        <Button className={`!py-2 !h-max`}>
                                            <Flex
                                                className={`items-center gap-2 cursor-pointer [&>svg>path]:fill-white`}>
                                                {isMenuOpen && (
                                                    <InviteIcon />
                                                )}
                                                <Text
                                                    className={`h3-semibold-uppercase md:!h-4 !text-white`}>SOLICITE SEU
                                                    CONVITE</Text>
                                            </Flex>
                                        </Button>
                                    </Link>
                                    <Flex
                                        className={` border-transparent border scale-50 origin-right rounded-full transition-all ${isMenuOpen && `!scale-50 !border-[#A4AABB]`}`}>

                                        <Hamburger toggled={isMenuOpen} color={(!isMenuOpen) ? `#A4AABB` : `black`}
                                                   direction="right" onToggle={(open) => {
                                            setIsMenuOpen(open)
                                        }}/>
                                    </Flex>
                                </Flex>
                            ) : (
                                <>
                                    <Flex
                                        className={`items-center gap-8 [&>a]:min-w-max`}>
                                        <Link href={`/`}
                                              className={`h2-semibold-uppercase !text-gray_1 cursor-pointer`}>INÍCIO</Link>
                                        <Link href={`/nossos-servicos`}
                                              className={`h2-semibold-uppercase !text-gray_1 cursor-pointer`}>NOSSO
                                            SERVIÇOS</Link>
                                        <Link href={`/quem-somos`}
                                              className={`h2-semibold-uppercase !text-gray_1 cursor-pointer`}>QUEM
                                            SOMOS</Link>
                                    </Flex>

                                    <Flex className={`gap-8`}>


                                        <Link href={`https://dev.boleta.ai/fila-de-espera`} >
                                            <Button className={`!py-1`}>
                                                <Flex
                                                    className={`items-center gap-2 cursor-pointer [&>svg>path]:fill-white`}>
                                                    <InviteIcon/>
                                                    <Text
                                                        className={`h3-semibold-uppercase md:!h-4 !text-white`}>SOLICITE SEU
                                                        CONVITE</Text>
                                                </Flex>
                                            </Button>
                                        </Link>

                                        <Link href={`https://dev.boleta.ai`}>

                                            <Flex
                                                className={`items-center gap-2 cursor-pointer [&>svg>path]:fill-gray_1`}>
                                                <LoginIcon/>
                                                <Text
                                                    className={`h2-semibold-uppercase !text-gray_1`}>LOGIN</Text>
                                            </Flex>
                                        </Link>
                                    </Flex>
                                </>
                            )}
                        </>
                    </Flex>
                    {((!isMobile || isMenuOpen)) && (
                        <Flex className={`w-full md:justify-end md:[&>div]:w-max`}>
                            <Fade>
                                <Flex
                                    className={`gap-8 md:gap-10 flex-col md:flex-row h-max justify-start w-full md:!w-max p-4 !pt-12 md:!pb-0`}
                                    onMouseLeave={() => {
                                        setIsMenuOpen(false)
                                    }}>
                                    {!isMobile ? (
                                        <>
                                        </>
                                    ) : (
                                        <>
                                            <Link href={`/`} >
                                                <Flex
                                                    className={`items-center gap-2 cursor-pointer  [&>svg>path]:stroke-gray_1 [&>svg>path]:hover:stroke-blue_primary [&>p]:hover:!text-blue_primary`}>
                                                    <Text className={`h1-semibold !text-gray_1`}>Início</Text>
                                                </Flex>
                                            </Link>
                                            <Flex className={`w-full h-[1px] bg-gray_3`}/>

                                            <Link href={`/nossos-servicos`} >
                                                <Flex
                                                    className={`items-center gap-2 cursor-pointer  [&>svg>path]:stroke-gray_1 [&>svg>path]:hover:stroke-blue_primary [&>p]:hover:!text-blue_primary`}>
                                                    <Text className={`h1-semibold !text-gray_1`}>Nossos serviços</Text>
                                                </Flex>
                                            </Link>
                                            <Flex className={`w-full h-[1px] bg-gray_3`}/>
                                            <Link href={`/quem-somos`} >
                                                <Flex
                                                    className={`items-center gap-2 cursor-pointer [&>svg>g>path]:!fill-gray_1 [&>svg>g>path]:hover:!fill-blue_primary [&>p]:hover:!text-blue_primary`}>
                                                    <Text className={`h1-semibold !text-gray_1`}>Quem somos</Text>
                                                </Flex>
                                            </Link>
                                            <Flex className={`w-full h-[1px] bg-gray_3`}/>

                                            <Link href={`https://dev.boleta.ai`}>
                                                <Flex
                                                    className={`items-center gap-2 cursor-pointer [&>svg>g>path]:!fill-gray_1 [&>svg>path]:hover:!fill-blue_primary [&>p]:hover:!text-blue_primary`}
                                                >
                                                    <LogoutMobileIcon/>
                                                    <Text className={`h1-semibold !text-gray_1`}>Login</Text>
                                                </Flex>
                                            </Link>
                                        </>
                                    )}
                                </Flex>

                            </Fade>
                        </Flex>
                    )}

                </Wrapper>
            </Flex>

        </>
    )
}