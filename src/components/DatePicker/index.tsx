import {
    Flex,
    Input as ChakraUiInput,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    InputProps as ChakraUiInputProps,
    Text, Stack, Button
} from '@chakra-ui/react'
import ReactDatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import br from 'date-fns/locale/pt-BR';
registerLocale('br', br)
import ClearIcon from "../../../public/icons/clear-input.svg"
import ShowPasswordIcon from "../../../public/icons/show-password.svg"
import {Control, useController, UseControllerProps, useForm, UseFormResetField} from "react-hook-form";
import {forwardRef, ReactNode, useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerDownIcon from "../../../public/icons/datepicker-down.svg";
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
    disabled?: boolean
}
export function DatePicker({label, labelClassName, inputRef, groupClassName, clearable, resetField, onRightIconClick, name = "", mask,  ...input}: InputProps) {
    const {control: controlDefault} = useForm()
    const [type, setType] = useState(mask ? "number" : input.type)
    const [isOpen, setIsOpen] = useState(false)
    const {fieldState, field} = useController({
        control: input.control || controlDefault,
        rules: input.rules,
        name: name,
        defaultValue: input.defaultValue
    })
    console.log({value1: input?.value})
    console.log({value2: field?.value})

    const CustomInput = (({ value, onClick, label }: any) => (
        <Button className={`items-center ${!input?.disabled ? `cursor-pointer` : `cursor-default`}`} onClick={onClick}>
            <Stack spacing={0}>
                <Text className={`h5-semibold !text-gray_2 !text-left`}>{label}</Text>
                <Text className={`h3-semibold !text-white`}>{value}</Text>
            </Stack>
            {!input?.disabled && (
                <DatePickerDownIcon />
            )}
        </Button>
    ));
    return (
        <>
            <label className={`flex flex-col ${labelClassName ? labelClassName : ``}`}>
                    <ReactDatePicker
                        {...input}
                        {...field}
                        locale={`br`}
                        ref={inputRef}
                        dateFormat={"dd/MM/yyyy"}
                        selected={field?.value}
                        wrapperClassName={``}
                        dayClassName={(date) => {
                            return `h4-regular`
                        }}
                        formatWeekDay={(day: any, locale) => {
                            return day?.substring(0, 1)?.toUpperCase()
                        }}
                        weekDayClassName={(date) => {
                            return `h4-semibold`
                        }}


                        className={`flex-1 rounded-none !outline-none py-3 bg-transparent !font-semibold !text-white ${!!input.className && input.className} placeholder:text-white`}
                        onSelect={(value) => {
                                if (input.onChange) {
                                    // input.onChange(value)
                                }
                                field.onChange(value)
                                return value
                        }}
                        onChange={(value) => {
                            field.onChange(value)
                            return value
                        }}
                        customInput={<CustomInput label={label} />}
                    />
            </label>
        </>
    )
}