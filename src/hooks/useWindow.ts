import {useEffect, useMemo, useRef, useState} from "react";
import {useMediaQuery} from "@chakra-ui/react";
type UseWindowProps = {
    onResize?: (dimensions: DimensionProps) => void
    onScroll?: (scroll: ScrollProps) => void
}
type DimensionProps = {

    innerWidth: number
    innerHeight: number
    outerHeight: number
    outerWidth: number
    screen: Screen
    screenLeft: number
    screenTop: number
    screenX: number
    screenY: number
}
export function useElementIsVisible(element?: HTMLElement) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    console.log({isIntersecting})

    const observer = useRef<any>();

    useEffect(() => {
        observer.current = new IntersectionObserver(([entry]) =>{
                console.log({entry})
                setIsIntersecting(entry.isIntersecting)
            },
        )
        if (element && observer?.current) {

            observer.current?.observe(element);

            return () => {
                observer.current?.disconnect();
            };
        }
    }, [element, observer]);

    return isIntersecting;
}
type ScrollProps = { x: number, y: number }
export function useWindow({onResize, onScroll}: UseWindowProps) {
    const [target, setTarget] = useState<Window>()
    const [dimensions, setDimensions] = useState<DimensionProps>()
    const [scroll, setScroll] = useState<ScrollProps>()
    const [fullscreen, setFullscreen] = useState(true)
    // const [isMobile] = useMediaQuery('(max-width: 1280)')
    // const [isHighDefinition] = useMediaQuery('(min-width: 1366px)')

    const [isMobile, setIsMobile] = useState(false)
    const [isMedium, setIsMedium] = useState(false)
    const [isHighDefinition, setIsHighDefinition] = useState(false)
    const scrollToElement = (element: HTMLElement) => {
        return target?.scrollTo({
            behavior: "smooth",
            top: element.offsetTop
        })
    }
    const onResizeEvent = (e: Event) => {
        const targetX = e.target as Window
        setTarget(targetX)
        const newDimensions = {
            innerWidth: targetX?.innerWidth,
            innerHeight: targetX?.innerHeight,
            outerHeight: targetX?.outerHeight,
            outerWidth: targetX?.outerWidth,
            screen: targetX?.screen,
            screenLeft: targetX?.screenLeft,
            screenTop: targetX?.screenTop,
            screenX: targetX?.screenX,
            screenY: targetX?.screenY
        }
        setFullscreen(!targetX.screenTop && !targetX.screenY)
        setDimensions(newDimensions)
        onResize && onResize(newDimensions)
        const width = targetX?.innerWidth
        if (width >= 768 && width <= 1280) {
            setIsMedium(true)
        } else {
            setIsMedium(false)
        }

        if (width < 1280) {
            setIsMobile(true)
            setIsHighDefinition(false)
        } else if (width < 1366) {
            setIsMobile(false)
            setIsHighDefinition(false)
        } else {
            setIsMobile(false)
            setIsHighDefinition(true)
        }

    }

    useEffect(() => {
        setTarget(window)
        setFullscreen(!window.screenTop && !window.screenY)
        window.addEventListener('resize', onResizeEvent, false)
        return () => window.removeEventListener('resize', onResizeEvent, false)
    }, [])

    const onScrollEvent = (e: Event) => {
        console.log(123, {e})
        setScroll({
            y: window.scrollY,
            x: window.scrollX
        })
        onScroll && onScroll({
            y: window.scrollY,
            x: window.scrollX
        })


    }

    useEffect(() => {
        const width = window.innerWidth
        if (width >= 768 && width <= 1280) {
            setIsMedium(true)
        } else {
            setIsMedium(false)
        }
        if (width <= 1280) {
            setIsMobile(true)
            setIsHighDefinition(false)
        } else if (width < 1366) {
            setIsMobile(false)
            setIsHighDefinition(false)
        } else {
            setIsMobile(false)
            setIsHighDefinition(true)
        }
    }, [])

    useEffect(() => {
        console.log(123, 321)
        window.addEventListener('scroll', onScrollEvent, false)
        return () => window.removeEventListener('scroll', onScrollEvent, false)
    }, [])
    return {
        target,
        dimensions,
        scroll,
        isMedium,
        fullscreen,
        isMobile,
        isHighDefinition,
        scrollToElement
    }
}