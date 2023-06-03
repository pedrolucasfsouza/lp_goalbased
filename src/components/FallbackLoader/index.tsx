import {Flex} from "@chakra-ui/react";
import {useEffect, useRef} from "react";
import lottie from "lottie-web";
import animationData from "./animation.json";
export function FallbackLoader() {
    const containerRef = useRef<any>();
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData,
        });
        return () => {
            anim.destroy(); // Limpa a animação quando o componente é desmontado
        };
    }, []);
    return (
        <>
            <Flex
                className={`!w-full !h-full fixed z-[5000] left-0 top-0 justify-center !bg-[#030203]`}
                id="teste"
            >
                <div ref={containerRef} style={{ width: "156px" }}></div>
            </Flex>
        </>
    )
}