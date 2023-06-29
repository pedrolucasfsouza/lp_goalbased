import {
    Modal as ChakraUiModal,
    ModalProps as ChakraUiModalProps,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Flex,
} from '@chakra-ui/react'
import {Button} from "../Button";
import React, {useEffect} from "react";
import {useWindow} from "@/hooks/useWindow";
import Hamburger from "hamburger-react";
import Slide from "react-reveal/Slide";

export type ModalProps = React.HTMLProps<HTMLDivElement> & {
    isOpen: boolean
    onOpen?: () => void
    onClose?: () => void
    header?: React.ReactNode
    footer?: React.ReactNode
}

export function Modal({isOpen, onOpen, onClose, header, footer, children}: ModalProps) {
    const {isOpen: modalIsOpen, onOpen: modalOnOpen, onClose: modalOnClose} = useDisclosure()
    const {isMobile} = useWindow({})

    useEffect(() => {
        if (isOpen) {
            if (!modalIsOpen) {
                modalOnOpen()
            }
        } else {
            if (modalIsOpen) {
                modalOnClose()
            }
        }
    }, [isOpen])

    const openModal = () => {
        // modalOnOpen()
        if (onOpen) {
            onOpen()
        }
    }
    const closeModal = () => {
        // modalOnClose()
        if (onClose) {
            onClose()
        }
    }
    return (
        <>
            <ChakraUiModal isOpen={modalIsOpen} onClose={closeModal}>
                <ModalOverlay className={` z-[5000] backdrop-blur-md `}/>
                <ModalContent
                    className={`bg-white w-full xl:!max-w-[500px] rounded-[16px] rounded-b-none xl:rounded-b-[16px] min-h-[200px] !absolute xl:!relative !bottom-0 !m-auto z-[5000] p-10 py-12`}>
                    <ModalHeader className={'!p-0 !pb-10 h'}>
                        {header && (
                            header
                        )}
                    </ModalHeader>
                    <ModalCloseButton className={`!top-4 !right-4 absolute bg-transparent`}>
                        <Flex
                            className={` border-transparent border border-[#A4AABB] !scale-50 rounded-full transition-all `}>
                            <Hamburger toggled={true} color={`#A4AABB`} size={24}
                                       direction="right"/>
                        </Flex>
                    </ModalCloseButton>
                    <ModalBody className={'!p-0'}>
                        {children}
                    </ModalBody>

                    {footer && (
                        <ModalFooter className={'!px-4'}>
                            {footer}
                        </ModalFooter>
                    )}
                </ModalContent>
            </ChakraUiModal>
        </>
    )
}