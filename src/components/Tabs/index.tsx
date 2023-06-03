import {
    Tabs as ChakraUiTabs, TabsProps as ChakraUiTabsProps,
    TabList,
    TabPanels,
    Tab as ChakraUiTab, TabProps as ChakraUiTabProps,
    TabPanel as ChakraUiTabPanel, TabPanelProps as ChakraUiTabPanelProps, Box
} from '@chakra-ui/react'
import {ReactNode, useRef, useState} from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {useWindow} from "@/hooks/useWindow";

type TabsProps = Partial<ChakraUiTabsProps> & {
    tabs: ReactNode[]
    panels: ReactNode[]
    tabListPosition?: "bottom" | "top"
    className?: string
    tabClassName?: string
    tabListClassName?: string
    tabPanelClassName?: string
    activeTabClassName?: string
    inactiveTabClassName?: string
}

export function Tab({children, ...rest}: ChakraUiTabProps) {
    return (
        <ChakraUiTab {...rest}>
            {children}
        </ChakraUiTab>
    )
}

export function TabPanel({children, ...rest}: ChakraUiTabPanelProps) {
    return (
        <ChakraUiTabPanel {...rest}>
            {children}
        </ChakraUiTabPanel>
    )
}

export function Tabs({tabs, panels, tabListPosition = "top", ...rest}: TabsProps) {
    const [tabIndex, setTabIndex] = useState(0)
    const {isMobile} = useWindow({})
    const ref = useRef<any>(null)
    const { events } = useDraggable(ref)
    const renderTabList = () => {
        return (
            <TabList
                style={isMobile ? {
                    width: `calc(100% + 32px)`
                } : {}}
                className={`!border-blue_primary -ml-[16px] !flex md:ml-auto md:!w-max md:max-w-full gap-2 md:!m-auto ${rest?.tabListClassName}`}
                overflowX={'auto'} overflowY={'hidden'} {...events} ref={ref}>
                {tabs.map((tab, key) => {
                    const selectedTab = key === tabIndex
                    const firstTab = key === 0
                    const finalTab = key === tabs?.length - 1
                    return (
                        <Tab
                            key={key}
                             _selected={{
                                 backgroundColor: '#3239F4',
                                 color: 'white'
                             }}
                             _active={{
                                 backgroundColor: '#3239F4',
                                 color: 'white',
                             }}
                             _focusVisible={{
                                 // border: '2px solid rgba(66, 153, 225, 1)'
                             }}
                             className={`
                            min-w-max 
                            flex 
                            px-4 
                            gap-2 
                            py-2 
                            ${firstTab && `ml-4`}
                            ${finalTab && `mr-4`}
                            hover:bg-gray_1
                            rounded-full 
                             ${rest?.tabClassName}
                            ${selectedTab ? rest?.activeTabClassName ? rest?.activeTabClassName : `
                                [&>svg>path]:fill-white 
                                [&>*]:text-white
                            ` : rest?.inactiveTabClassName ? rest?.inactiveTabClassName : `
                                [&>svg>path]:fill-gray_2 
                                [&>*]:text-gray_2
                            `}
                            `}
                        >
                            {tab}
                        </Tab>
                    )
                })}
            </TabList>
        )
    }
    return (
        <ChakraUiTabs className={`flex-1 max-w-full ${rest?.className}`}
                      onChange={(index) => setTabIndex(index)}  {...rest} >
            {tabListPosition === "top" && (
                renderTabList()
            )}
            <TabPanels>
                {panels.map((panel, key) => {
                    return (
                        <TabPanel key={key}
                                  className={`!py-2 ${tabListPosition === `bottom` ? `!pb-6` : `!pt-12`} !px-0 ${rest?.tabPanelClassName}`}>
                            {panel}
                        </TabPanel>
                    )
                })}
            </TabPanels>
            {tabListPosition === "bottom" && (
                renderTabList()
            )}
        </ChakraUiTabs>
    )
}