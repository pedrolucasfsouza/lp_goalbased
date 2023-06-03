import {
    Flex,
    Input as ChakraUiInput,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    InputProps as ChakraUiInputProps,
    Text
} from '@chakra-ui/react'
import ClearIcon from "../../../public/icons/clear-input.svg"
import ShowPasswordIcon from "../../../public/icons/show-password.svg"
import {Control, useController, UseControllerProps, useForm, UseFormResetField} from "react-hook-form";
import {ReactNode, useEffect, useState} from "react";
type InputProps = (ChakraUiInputProps & Partial<UseControllerProps<any, any>>) & {
    label?: string
    labelClassName?: string
    name?: string
    mask?: "BRL" | "USD" | "%"
    inputRef?: any
    rightIcon?: ReactNode
    rightIconClassName?: string
    groupClassName?: string
    clearable?: boolean
    onRightIconClick?: () => void
    resetField?: UseFormResetField<any>
}
export function Input({label, labelClassName, inputRef, groupClassName, rightIconClassName, clearable, resetField, onRightIconClick, name = "", mask,  ...input}: InputProps) {
    const {control: controlDefault} = useForm()
    const [type, setType] = useState(mask ? "number" : input.type)
    const {fieldState, field} = useController({
        control: input.control || controlDefault,
        rules: input.rules,
        name: name,
        defaultValue: input.defaultValue
    })

    return (
        <>
            <label className={`flex flex-col ${labelClassName ? labelClassName : ``}`}>
                {label && (
                    <Text className={"mb-2 h3-semibold-uppercase line-clamp-1 text-gray_2"}>{label}</Text>
                )}
                <InputGroup className={`${groupClassName} `}>
                    <ChakraUiInput
                        {...input}
                        {...field}
                        ref={inputRef}
                        type={type}
                        className={`flex-1 transition-all rounded-none !border-gray_1 border-b !outline-none py-2 bg-transparent h2-semibold !text-[16px] text-white ${!!input.className && input.className} placeholder:text-white placeholder:h2-semibold`}
                        onChange={(e) => {
                            if (input.onChange) {
                                input.onChange(e)
                            }
                            field.onChange(e)
                            return e
                        }}
                        _active={{borderColor: `#3239F4 !important`}}
                        _focus={{borderColor: `#3239F4 !important`}}
                        _focusVisible={{borderColor: `#3239F4 !important`}}
                        _invalid={{borderColor: `#E53E3E !important`}}
                        {...(fieldState?.error ? {isInvalid: true} : {})}
                    />
                    {(clearable || input?.rightIcon || input?.type === "password") && (
                        <InputRightAddon className={`cursor-pointer flex gap-2  absolute right-0 top-0 bottom-0 my-auto ${rightIconClassName}`} onClick={(e) => {
                            (clearable && resetField) && resetField(name!, {
                                keepDirty: false,
                                keepError: false,
                                keepTouched: false,
                                defaultValue: ""})
                            onRightIconClick && onRightIconClick()
                            input?.type === "password"  && setType(prev => {
                                if (prev === "password") {
                                    return "text"
                                } else {
                                    return "password"
                                }
                            })
                        }}>
                            {!!input?.rightIcon && input?.rightIcon}
                            {clearable && (
                                <ClearIcon className={``} />
                            )}
                            {input?.type === "password" && (
                                <ShowPasswordIcon />
                            )}
                        </InputRightAddon>
                    )}
                </InputGroup>
                {fieldState?.error?.message && (
                    <Flex className={`mt-2 items-center gap-2`}>
                        <img className={`w-4 h-4`} src={"/icons/error.svg"} />
                        <Text className={"text-[10px] font-medium line-clamp-1 text-red"}>{fieldState?.error?.message}</Text>
                    </Flex>
                )}
            </label>
        </>
    )
}