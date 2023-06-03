import { toast as toastify } from 'react-toastify';
import {timeYear} from "d3-time";
import {ReactNode} from "react";
import ErrorIcon from "../../public/icons/toast-error.svg"
import SuccessIcon from "../../public/icons/toast-success.svg"
import WarningIcon from "../../public/icons/toast-warning.svg"
import CloseIcon from "../../public/icons/close.svg"
import {Flex, Stack} from "@chakra-ui/react";
import {Text} from "@/components/Text";
type ToastProps = {
    type: `info` | `warning` | `success` | `error`
    message: string
}
export function useToast() {
    const toast = ({...props}: ToastProps) => {
        let type: string, className: any, icon: ReactNode
        switch (props?.type) {
            case 'info':
                type = "Info"
                className = {
                    border: `borderRed`
                }
                icon = <WarningIcon />
                break;
            case 'warning':
                type = "Alerta"
                className = {
                    border: `borderRed`
                }
                icon = <WarningIcon />
                break;
            case 'success':
                type = "Sucesso"
                className = {
                    border: `borderRed`
                }
                icon = <SuccessIcon />
                break;
            case 'error':
                type = "Erro"
                className = {
                    border: `borderRed`
                }
                icon = <ErrorIcon />
                break;
        }
        const Message = () => {
            return (
                <Flex className={`items-center`}>
                    <Stack spacing={0}>
                        <p style={{
                            color: `#202637`,
                            fontSize: `16px`,
                            fontWeight: `600`
                        }}>
                        {type}
                        </p>
                        <p style={{
                            color: `#202637`,
                            fontSize: `10px`
                        }}>
                            {props.message}
                        </p>
                    </Stack>
                </Flex>
            )
        }
        return toastify(<Message />, {
            type: props.type,
            position: "top-center",
            // hideProgressBar: true,
            className: (context) => {
                context?.type
                return `${context?.defaultClassName}`
            },
            icon: icon,
            closeButton: <CloseIcon className={`m-auto`} />
        })
    }
    return {
        toast
    }
}