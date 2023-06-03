import {
    Input as ChakraUiInput,
    InputGroup,
    InputLeftAddon,
    Checkbox as ChakraUiCheckbox,
    CheckboxProps as ChakraUiCheckboxProps,
    Text
} from '@chakra-ui/react'
import {Control, useController, UseControllerProps, useForm} from "react-hook-form";
import {ReactNode, useEffect, useState} from "react";
type InputProps = (ChakraUiCheckboxProps & Partial<UseControllerProps<any, any>>) & {
    label?: ReactNode
    labelClassName?: string
    name?: string
    mask?: "BRL" | "USD" | "%"
}
export function Checkbox({label, labelClassName, name = "", mask,  ...input}: InputProps) {
    const [isChecked, setIsChecked] = useState(input.defaultChecked ?? false)
    const {control: controlDefault} = useForm()
    const {fieldState, field} = useController({
        control: input.control || controlDefault,
        rules: input.rules,
        name: name,
        defaultValue: input.defaultValue
    })

    // const maskAsBRL = (value: string) => {
    //
    //     value = value.replaceAll((/!?(\D)/g), '').replaceAll(".", "").replaceAll(",", ".")
    //     console.log({value})
    //     const formattedValue = Number(value).toLocaleString("pt-BR", {
    //         minimumFractionDigits: 2 , currency: 'BRL'
    //     })
    //
    //     return formattedValue
    // }

    useEffect(() => {
        if (input.defaultChecked) {
            setIsChecked(true)
        }
    }, [input.defaultChecked])


    useEffect(() => {
        setIsChecked(field.value)
    }, [field.value])
    return (
        <>
            <label className={`flex items-center hover:cursor-pointer ${labelClassName ? labelClassName : ``}`}>
                <ChakraUiCheckbox
                    {...input}
                    {...field}
                    isChecked={isChecked}
                    className={`!border-white h-5 w-5 text-white text-[8px] items-center justify-center border rounded-md p-1 ${!!input.className && input.className} placeholder:text-white`}
                    onChange={(e) => {
                        // console.log({selection: window?.getSelection()?.toString()})
                        // if (e.target.value && e.target.value !== "") {
                        //     if (mask === "BRL") {
                        //         e.target.value = maskAsBRL(e.target.value)
                        //     }
                        // }

                        if (input.onChange) {
                            input.onChange(e)
                        }
                        field.onChange(e)
                    }}
                    {...(fieldState?.error ? {isInvalid: true} : {})}
                    _invalid={{borderColor: `#E53E3E !important`}}
                />
                {label && (
                    <Text className={"ml-2 line-clamp-1 h3-regular text-white"}>{label}</Text>
                )}
            </label>
        </>
    )
}