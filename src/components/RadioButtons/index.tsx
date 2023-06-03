import { forwardRef } from "react";
import {
    Box,
    SimpleGrid,
    useRadio,
    useRadioGroup, UseFormControlProps, Text, Flex
} from "@chakra-ui/react";
import {useController, UseControllerProps} from "react-hook-form";
import {InputProps as ChakraUiInputProps} from "@chakra-ui/input/dist/input";
import {Button} from "@/components/Button";

type RadioButtonsProps = (ChakraUiInputProps & Partial<UseControllerProps>) & {
    options: {
        label: string
        value: any
    }[]
}

const CustomRadio = forwardRef(({ children, ...props }: any, ref) => {
    const { state, getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps({ ref });
    const checkbox = getCheckboxProps();

    return (
        <Box as={"label"}>
            <input {...input} hidden={true} />
            <Button as={"span"} {...checkbox} className={`!py-1 !px-2 ${state.isChecked ? `!bg-blue_primary` : `bg-gray_1`} hover:bg-gray_2`}>
                <Text className={`h4-semibold-uppercase`}>{children}</Text>
            </Button>
        </Box>
    );

});
CustomRadio.displayName = "CustomRadio"
export const RadioButtons = forwardRef(
    ({ control, name, defaultValue, options, rules, ...props }: RadioButtonsProps, ref) => {
        const { field } = useController({
            name,
            control,
            rules,
            defaultValue
        } as any);

        const { getRootProps, getRadioProps } = useRadioGroup({
            ...field
        });

        // console.log({options : props?.options})
        return (
            <Flex {...getRootProps()} className={`gap-1 flex-wrap justify-center`}>
                {options?.map((item, key) => {
                    return (
                        <CustomRadio key={key} {...getRadioProps({ value: item?.value })}>
                            {item?.label}
                        </CustomRadio>
                    )
                })}
            </Flex>
        );
    }
);
RadioButtons.displayName = "RadioButtons"
