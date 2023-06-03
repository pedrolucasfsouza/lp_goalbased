import {
    Flex,
    Input as ChakraUiInput,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    InputProps as ChakraUiInputProps,
    Text, useCheckbox, Box
} from '@chakra-ui/react'
import ClearIcon from "../../../public/icons/clear-input.svg"
import ShowPasswordIcon from "../../../public/icons/show-password.svg"
import {Control, useController, UseControllerProps, useForm, UseFormResetField} from "react-hook-form";
import {ReactNode, useEffect, useState} from "react";
import {Button} from "@/components/Button";
type InputProps = (ChakraUiInputProps & Partial<UseControllerProps>) & {
    label?: string
    labelClassName?: string
    name?: string
    mask?: "BRL" | "USD" | "%"
    inputRef?: any
    rightIcon?: ReactNode
    groupClassName?: string
    clearable?: boolean
    onRightIconClick?: () => void
    resetField?: UseFormResetField<any>
}
export function CheckboxButton({label, labelClassName, inputRef, groupClassName, clearable, resetField, onRightIconClick, name = "", mask,  ...input}: InputProps) {
    const {control: controlDefault} = useForm()
    const {fieldState, field} = useController({
        control: input.control || controlDefault,
        rules: input.rules,
        name: name,
        defaultValue: input.defaultValue
    })
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox({...field, defaultChecked: field?.value})

    // useEffect(() => {
    //     field.onChange(state.isChecked)
    // }, [state.isChecked])

    console.log({inputValue: field.value, inputName: field.name, field})

    return (
        <>
            <label className={`flex flex-col ${labelClassName ? labelClassName : ``}`} {...htmlProps}>
                    <ChakraUiInput
                        hidden={true}
                        {...input}
                        {...field}
                        ref={inputRef}
                        {...getInputProps()}
                        // type={type}
                        // onChange={(e) => {
                        //
                        //     console.log({e})
                        //     if (input.onChange) {
                        //         input.onChange(e)
                        //     }
                        //     field.onChange(e?.target?.checked)
                        //     return e?.target?.checked
                        // }}
                    />

                <Button {...getLabelProps()} as={"span"} {...getCheckboxProps()} className={`!py-1 !px-2 ${state.isChecked ? `!bg-blue_primary` : `bg-gray_1`} hover:bg-gray_2`}>
                    <Text className={`h4-semibold-uppercase`}>{label}</Text>
                </Button>
                {/*{label && (*/}
                {/*    <Text className={"mb-2 text-[10px] font-medium line-clamp-1 text-gray_2"}>{label}</Text>*/}
                {/*)}*/}
                {/*{fieldState?.error?.message && (*/}
                {/*    <Flex className={`mt-2 items-center gap-2`}>*/}
                {/*        <img className={`w-4 h-4`} src={"/icons/error.svg"} />*/}
                {/*        <Text className={"text-[10px] font-medium line-clamp-1 text-red"}>{fieldState?.error?.message}</Text>*/}
                {/*    </Flex>*/}
                {/*)}*/}

                {/*<input {...getInputProps()} hidden />*/}
                {/*<Button {...getLabelProps()} as={"span"} {...getCheckboxProps()} className={`!py-1 !px-2 ${state.isChecked ? `bg-blue_primary` : `bg-gray_1`}`}>*/}
                {/*    <Text className={`h4-semibold-uppercase`}>ORDENS</Text>*/}
                {/*</Button>*/}
                {/*<Text color="gray.700" >Click me</Text>*/}
            </label>
        </>
    )
}