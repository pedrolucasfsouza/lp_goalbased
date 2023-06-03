import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    MenuProps, Stack, Flex
} from '@chakra-ui/react'
import React, {ReactNode} from "react";
import {Text} from "../Text";
import {Link} from "../Link";

type OptionProps = ({
    onClick?: () => void
    href?: string
    label: ReactNode
    closeOnSelect?: boolean
    isLoading?: boolean
} | undefined)
type DropdownMenuProps = {
    options: OptionProps[] | ((isOpen: boolean, onClose: () => void) => OptionProps[])
    className?: string
    buttonClassName?: string
    iconClassName?: string
    listClassName?: string
    color?: "white"
    children?: ReactNode | ((isOpen: boolean, onClose: () => void) => ReactNode)
    onMouseOver?: (e: any) => void
    onMouseOut?: (e: any) => void


}

export function DropdownMenu({
                                 options,
                                 children,
                                 className,
                                 listClassName,
                                 buttonClassName,
                                 iconClassName,
                                 color,
                                 onMouseOver,
                                 onMouseOut,
                                 ...rest
                             }: DropdownMenuProps) {
    const menuItemClasses = `
        !text-black 
        border-none
        py-3
        rounded-md
        text-sm
        transition-all
        group
    `
    const mapOptions = (options: OptionProps[]) => {
        return options.filter((option) => (option !== undefined))?.map((option, key) => {

            return (
                <>
                    <MenuItem closeOnSelect={option?.closeOnSelect} key={key} className={`
                                ${menuItemClasses} 
                            `}
                              onClick={(e) =>{
                                  option?.onClick && option.onClick()
                              }
                              }
                    >
                        {option?.href ? (
                            <Link href={option?.href!}>
                                {option && option.label}
                            </Link>
                        ) : (
                            <>
                                {option && option.label}
                            </>
                        )}
                    </MenuItem>
                    {key !== options?.length - 1 && (
                        <Flex className={`w-full h-[1px] bg-gray_3`}/>
                    )}

                </>
            )
        })
    }
    return (
        <>
            <Menu >
                {({isOpen, onClose}) => (
                    <>
                        <MenuButton
                            onMouseOver={onMouseOver}
                            onMouseOut={onMouseOut}
                            className={`cursor-pointer ${buttonClassName ? buttonClassName : ``} ${color ? `fill-white !text-white` : ``}`}
                            onClick={(e) => e.stopPropagation()}>
                            {!!children && (
                                <>
                                    {React.isValidElement(children) ? children : typeof children === "function" && children(isOpen, onClose)}
                                </>
                            )}
                        </MenuButton>
                        <MenuList
                            onMouseOver={onMouseOver}
                            onMouseOut={onMouseOut}
                            className={`!bg-white shadow-sm px-6 py-3 rounded-[16px] border-none !translate-y-8 ${listClassName} z-50`}
                            onClick={(e) => e.stopPropagation()}>

                            {typeof options === "function" ? mapOptions(options(isOpen, onClose)) : mapOptions(options)}

                            <span className={`block w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] !border-b-white border-transparent absolute left-0 right-0 mx-auto -top-[11px]`} />
                        </MenuList>
                    </>
                )}
            </Menu>
        </>
    )
}