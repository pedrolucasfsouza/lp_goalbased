import { Text } from "@/components/Text";
import { Wrapper } from "@/components/Wrapper";
import { useWindow } from "@/hooks/useWindow";
import { Flex } from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import { useToast } from "@/hooks/useToast";
import Fade from "react-reveal/Fade";
import LoginIcon from "../../../../../public/icons/External.svg";
import InviteIcon from "../../../../../public/icons/Invite.svg";
import LogoutMobileIcon from "../../../../../public/icons/logout-mobile.svg";

type HeaderProps = {};

export function Header({}: HeaderProps) {
  const { toast } = useToast();
  const [scrollPosition, setScrollPosition] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState({
    password: false,
  });
  const { isMobile, isMedium } = useWindow({
    onResize: () => {
      //console.log(123, 333)
      if (!isMobile) {
        setIsMenuOpen(false);
      }
    },
    onScroll: ({ y }) => {
      //console.log(123, 555)
      setScrollPosition((prev) => {
        return y;
      });
    },
  });

  const closeMenu = () => setIsMenuOpen(false);
  const onScrollEvent = (e: Event) => {
    //console.log(555, {e})
  };

  useEffect(() => {
    //console.log(123, 321)
    window.addEventListener("scroll", onScrollEvent, false);
    return () => window.removeEventListener("scroll", onScrollEvent, false);
  }, []);

  return (
    <>
      <Flex className={`w-full min-h-[60px] xl:min-h-[72px]`} />
      <Flex
        className={`w-full bg-white !fixed ${
          scrollPosition > 72 && `!bg-[#202637]/70 backdrop-blur`
        } ${
          isMedium && `!px-14`
        } p-4 xl:p-40 !py-4 z-[100] h-[60px] xl:h-[72px] transition-all top-0 left-0 ${
          isMenuOpen &&
          `!items-start ${
            scrollPosition > 72 ? `!bg-[#202637]/70 backdrop-blur` : `!bg-white`
          } !h-[450px] z-[5000] rounded-b-xl`
        }`}
      >
        <Wrapper
          className={`items-center justify-between h-full ${
            isMenuOpen && `m-0 flex-col !justify-start`
          }`}
        >
          <Flex className={`items-center justify-between min-w-full gap-8`}>
            {scrollPosition > 72 ? (
              <Link
                href={`/`}
                className={`!max-w-max ${isMenuOpen && `!hidden`}`}
              >
                <img
                  src={"/logo.svg"}
                  className={`w-[90px] min-w-[90px] xl:min-w-[120px] xl:w-[120px]`}
                />
              </Link>
            ) : (
              <Link
                href={`/`}
                className={`!max-w-max ${isMenuOpen && `!hidden`}`}
              >
                <img
                  src={"/logo-color.svg"}
                  className={`w-[90px] min-w-[90px] xl:min-w-[120px] xl:w-[120px]`}
                />
              </Link>
            )}
            <>
              {isMobile ? (
                <Flex
                  className={`items-center ${
                    isMenuOpen && `w-full justify-between pl-4`
                  }`}
                >
                  <Link
                    href={`${
                      process.env.REACT_APP_API_URL ||
                      "http://dev.app.boleta.ai"
                    }/fila-de-espera`}
                  >
                    <Button className={`!py-2 !h-max`}>
                      <Flex
                        className={`items-center gap-2 cursor-pointer [&>svg>path]:fill-white`}
                      >
                        {isMenuOpen && <InviteIcon />}
                        <Text
                          className={`h3-semibold-uppercase xl:!h-4 !text-white`}
                        >
                          SOLICITE SEU CONVITE
                        </Text>
                      </Flex>
                    </Button>
                  </Link>
                  <Flex
                    className={` border-transparent border scale-50 origin-right rounded-full transition-all ${
                      isMenuOpen && `!scale-50 !border-[#A4AABB]`
                    }`}
                  >
                    <Hamburger
                      toggled={isMenuOpen}
                      color={
                        scrollPosition > 72
                          ? `white`
                          : !isMenuOpen
                          ? `#A4AABB`
                          : `black`
                      }
                      direction="right"
                      onToggle={(open) => {
                        setIsMenuOpen(open);
                      }}
                    />
                  </Flex>
                </Flex>
              ) : (
                <>
                  <Flex className={`items-center gap-8 [&>a]:min-w-max`}>
                    <Link
                      href={`/`}
                      className={`h2-semibold-uppercase ${
                        scrollPosition > 72 ? `!text-white` : `!text-gray_1`
                      } cursor-pointer`}
                    >
                      INÍCIO
                    </Link>
                    <Link
                      href={`${
                        process.env.REACT_APP_API_URL ||
                        "http://dev.app.boleta.ai"
                      }/nossos-servicos`}
                      className={`h2-semibold-uppercase ${
                        scrollPosition > 72 ? `!text-white` : `!text-gray_1`
                      } cursor-pointer`}
                    >
                      NOSSO SERVIÇOS
                    </Link>
                    <Link
                      href={`${
                        process.env.REACT_APP_API_URL ||
                        "http://dev.app.boleta.ai"
                      }/quem-somos`}
                      className={`h2-semibold-uppercase ${
                        scrollPosition > 72 ? `!text-white` : `!text-gray_1`
                      } cursor-pointer`}
                    >
                      QUEM SOMOS
                    </Link>
                  </Flex>

                  <Flex className={`gap-8 items-center`}>
                    <Link
                      href={`${
                        process.env.REACT_APP_API_URL || "http://.boleta.ai"
                      }/fila-de-espera`}
                    >
                      <Button className={`!py-2`}>
                        <Flex
                          className={`items-center gap-2 cursor-pointer [&>svg>path]:fill-white`}
                        >
                          <InviteIcon />
                          <Text
                            className={`h3-semibold-uppercase xl:!h-4 !text-white`}
                          >
                            SOLICITE SEU CONVITE
                          </Text>
                        </Flex>
                      </Button>
                    </Link>

                    <Link
                      href={`${
                        process.env.REACT_APP_API_URL ||
                        "http://dev.app.boleta.ai"
                      }/login`}
                    >
                      <Flex
                        className={`items-center gap-2 cursor-pointer [&>svg>path]:fill-gray_1 ${
                          scrollPosition > 72 ? `[&>svg>path]:!fill-white` : ``
                        }`}
                      >
                        <LoginIcon />
                        <Text
                          className={`h2-semibold-uppercase ${
                            scrollPosition > 72 ? `!text-white` : `!text-gray_1`
                          }`}
                        >
                          LOGIN
                        </Text>
                      </Flex>
                    </Link>
                  </Flex>
                </>
              )}
            </>
          </Flex>
          {(!isMobile || isMenuOpen) && (
            <Flex className={`w-full xl:justify-end xl:[&>div]:w-max`}>
              <Fade>
                <Flex
                  className={`gap-8 xl:gap-10 flex-col xl:flex-row h-max justify-start w-full xl:!w-max p-4 !pt-12 xl:!pb-0`}
                  onMouseLeave={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {!isMobile ? (
                    <></>
                  ) : (
                    <>
                      <Link href={`/`}>
                        <Flex
                          className={`items-center gap-2 cursor-pointer  [&>svg>path]:stroke-gray_1 [&>svg>path]:hover:stroke-blue_primary [&>p]:hover:!text-blue_primary`}
                        >
                          <Text
                            className={`h1-semibold ${
                              scrollPosition > 72
                                ? `!text-white`
                                : `!text-gray_1`
                            }`}
                          >
                            Início
                          </Text>
                        </Flex>
                      </Link>
                      <Flex className={`w-full h-[1px] bg-gray_3`} />

                      <Link href={`/nossos-servicos`}>
                        <Flex
                          className={`items-center gap-2 cursor-pointer  [&>svg>path]:stroke-gray_1 [&>svg>path]:hover:stroke-blue_primary [&>p]:hover:!text-blue_primary`}
                        >
                          <Text
                            className={`h1-semibold ${
                              scrollPosition > 72
                                ? `!text-white`
                                : `!text-gray_1`
                            }`}
                          >
                            Nossos serviços
                          </Text>
                        </Flex>
                      </Link>
                      <Flex className={`w-full h-[1px] bg-gray_3`} />
                      <Link href={`/quem-somos`}>
                        <Flex
                          className={`items-center gap-2 cursor-pointer [&>svg>g>path]:!fill-gray_1 [&>svg>g>path]:hover:!fill-blue_primary [&>p]:hover:!text-blue_primary`}
                        >
                          <Text
                            className={`h1-semibold ${
                              scrollPosition > 72
                                ? `!text-white`
                                : `!text-gray_1`
                            }`}
                          >
                            Quem somos
                          </Text>
                        </Flex>
                      </Link>
                      <Flex className={`w-full h-[1px] bg-gray_3`} />

                      <Link
                        href={`${
                          process.env.REACT_APP_API_URL ||
                          "http://dev.app.boleta.ai"
                        }/login`}
                      >
                        <Flex
                          className={`items-center gap-2 cursor-pointer [&>svg>g>path]:!fill-gray_1 ${
                            scrollPosition > 72
                              ? `[&>svg>path]:!fill-white`
                              : ``
                          } [&>svg>path]:hover:!fill-blue_primary [&>p]:hover:!text-blue_primary`}
                        >
                          <LogoutMobileIcon />
                          <Text
                            className={`h1-semibold ${
                              scrollPosition > 72
                                ? `!text-white`
                                : `!text-gray_1`
                            }`}
                          >
                            Login
                          </Text>
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
  );
}
