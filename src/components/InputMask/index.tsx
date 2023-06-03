import {
    Flex,
    Input as ChakraUiInput,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Text
} from '@chakra-ui/react'
import { v4 as uuid } from 'uuid';
import {Control, useController, UseControllerProps, useForm, UseFormResetField} from "react-hook-form";
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import Cleave from "cleave.js";
import CleaveReact from "cleave.js/react"
import {CleaveOptions} from "cleave.js/options";
import ClearIcon from "../../../public/icons/clear-input.svg";
import ShowPasswordIcon from "../../../public/icons/show-password.svg";
import "cleave.js/dist/addons/cleave-phone.br";
type InputMaskProps = any & {
    options: CleaveOptions
    mask?: 'cpf' | 'zip_code' | 'currency' | 'float'
    label?: string
    labelClassName?: string
    inputRef?: any
    rightIcon?: ReactNode
    groupClassName?: string
    clearable?: boolean
    onRightIconClick?: () => void
    resetField?: UseFormResetField<any>
}
export function InputMask({label, labelClassName, inputRef, groupClassName, clearable, resetField, onRightIconClick, name = "", options, mask,  ...input}: InputMaskProps) {

    const [type, setType] = useState<string>(input.type ?? "text")
    const {control: controlDefault} = useForm()
    const [defaultOptions, setDefaultOptions] = useState<any>()

    const [uniqueId, setUniqueId] = useState<string|undefined>(undefined)
    const {fieldState, field} = useController({
        control: input.control || controlDefault,
        rules: input.rules,
        name: name,
        defaultValue: input.defaultValue
    })

    useEffect(() => {
    }, [])

    // useEffect(() => {
    //     if (uniqueId) {
    //         new Cleave(`.${uniqueId}`, {...defaultOptions, onValueChanged: (e) => {
    //                 if (defaultOptions.prefix) {
    //                     e.target.rawValue = e.target.rawValue.replace(defaultOptions.prefix, "")
    //                 }
    //
    //                 if (input?.onChange) {
    //                     input?.onChange(e)
    //                 }
    //                 field?.onChange(e)
    //             }})
    //     }
    // }, [uniqueId])
    useEffect(() => {
        setUniqueId(`cleave-${uuid()}`)
    }, [])

    useEffect(() => {
        if (mask === 'cpf') {
            setDefaultOptions({
                blocks: [3, 3, 3, 3],
                numericOnly: true,
                delimiters: ['.', '.', '-']
            })
        }
        if (mask === 'cnpj') {
            setDefaultOptions({
                blocks: [2, 3, 3, 4, 2],
                numericOnly: true,
                delimiters: ['.', '.', '/', '-']
            })
        }
        if (mask === 'cpf/cnpj') {
                if (field?.value?.length > 14) {
                    setDefaultOptions({
                        blocks: [2, 3, 3, 4, 2],
                        numericOnly: true,
                        delimiters: ['.', '.', '/', '-']
                    })
                } else {
                    setDefaultOptions({
                        blocks: [3, 3, 3, 3],
                        numericOnly: true,
                        delimiters: ['.', '.', '-']
                    })
                }
        }
        if (mask === 'phone') {
            setDefaultOptions({
                phone: true,
                prefix: "+55 ",
                phoneRegionCode: 'BR',
                noImmediatePrefix: true
            })
        }
        if (mask === 'currency') {
            setDefaultOptions({
                numeralThousandsGroupStyle: 'thousand',
                numeral: true,
                numericOnly: true,
                numeralDecimalMark: ",",
                numeralDecimalScale: 2,
                delimiter: ".",
                prefix: "R$ ",
                noImmediatePrefix: true
            })
        }
        if (mask === 'float') {
            setDefaultOptions({
                numeral: true,
                delimiter: "",
                numeralDecimalScale: 2,
                numeralDecimalMark: "."

            })
        }
        if (mask === 'integer') {
            setDefaultOptions({
                blocks: [10],
                numericOnly: true,

            })
        }

        if (mask === 'zip_code') {
            setDefaultOptions({
                blocks: [5, 4]
            })
        }
        console.log("here")
    }, [mask])

    console.log({mask})
    const CleaveReactInput = useCallback(({defaultOptions, input, field, inputRef, type, fieldState} :any) => {
        return (
            <CleaveReact
                options={
                    {...defaultOptions}
                }
                autoFocus
                {...input}
                {...field}
                ref={inputRef}
                type={type}
                className={`
                    flex-1 
                    ${!fieldState?.error && `
                        active:!border-[#3239F4] 
                        focus:!border-[#3239F4] 
                        focus-visible:!border-[#3239F4] 
                    `}
                    ${fieldState?.error && `!border-[#E53E3E]`}
                    transition-all 
                    rounded-none 
                    !border-gray_1 
                    border-b 
                    !outline-none 
                    py-2 
                    bg-transparent 
                    h2-semibold 
                    !text-[16px] 
                    text-white 
                    ${!!input.className && input.className} 
                    placeholder:text-white 
                    placeholder:h2-semibold
                `}
                onChange={(e) => {
                    // if (input.onChange) {
                    //     input.onChange(e)
                    // }
                    // field.onChange(e)
                    // return e
                    console.log({e})
                    if (defaultOptions.prefix) {
                        e.target.rawValue = e.target.rawValue.replace(defaultOptions.prefix, "")
                    }

                    if (input?.onChange) {
                        input?.onChange(e)
                    }
                    field?.onChange(e)
                }}
                // _active={{borderColor: `#3239F4 !important`}}
                // _focus={{borderColor: `#3239F4 !important`}}
                // _focusVisible={{borderColor: `#3239F4 !important`}}
                // _invalid={{borderColor: `#E53E3E !important`}}
                // {...(fieldState?.error ? {isInvalid: true} : {})}
            />
        )
    }, [defaultOptions])


    return (
        <>
            {/*<CleaveReact options={{*/}
            {/*    blocks*/}
            {/*}} />*/}

            <label className={`flex flex-col ${labelClassName ? labelClassName : ``}`}>
                {label && (
                    <Text className={"mb-2 h3-semibold-uppercase line-clamp-1 text-gray_2"}>{label}</Text>
                )}
                <InputGroup className={`${groupClassName} `}>
                    {defaultOptions && (
                        <CleaveReactInput
                            {...{
                                defaultOptions, input, field, inputRef, type, fieldState
                            }}
                        />
                    )}
                    {(clearable || input?.rightIcon || input?.type === "password") && (
                        <InputRightAddon className={`cursor-pointer flex gap-2  absolute right-0 top-0 bottom-0 my-auto`} onClick={(e) => {
                            (clearable && resetField) && resetField(name!, {
                                keepDirty: false,
                                keepError: false,
                                keepTouched: false,
                                defaultValue: mask === "currency" ? "R$ 0,00" :  mask === "phone" ? "+55 " : ""})
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