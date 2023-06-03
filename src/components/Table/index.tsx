import * as React from 'react'
import PrevIcon from "../../../public/icons/paginate-next.svg";
import NextIcon from "../../../public/icons/paginate-prev.svg";
import {
    Table as ChakraUiTable,
    TableContainer,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Box,
    Spinner,
    Flex, Skeleton, Stack
} from "@chakra-ui/react"
import ReactPaginate from 'react-paginate'
import { useDraggable } from "react-use-draggable-scroll";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable
} from '@tanstack/react-table'
import {TableProps} from "@/types";
import { useMediaQuery } from '@chakra-ui/react'
import {useEffect, useRef, useState} from "react";
import {useWindow} from "@/hooks/useWindow";

const columnHelper = createColumnHelper<any>()

export function Table({columns, page, pageIsLoading, data, onPageChange, pageCount = 0, onRowClick, ...rest}: TableProps) {
    const ref = useRef<any>(null)
    const { events } = useDraggable(ref)
    const {isMobile} = useWindow({})
    const [currentPage, setCurrentPage] = useState(1)

    const columnHelpers = columns?.map((column) => {
        return columnHelper.accessor(column.id!, {
            ...column
        })
    })

    const table = useReactTable({
        data,
        columns: columnHelpers,
        getCoreRowModel: getCoreRowModel(),
    })

    const handlePageChange = ({selected}: { selected: number }) => {
        setCurrentPage(selected + 1)
        if (onPageChange) {
            onPageChange(selected + 1)
        }
    }
    const handleRowClick = (index: number) => {
        if (onRowClick) {
            onRowClick(index)
        }
    }
    useEffect(() => {
        console.log("aq")
        if (page) {
            setCurrentPage(page)
        }
    }, [page])

    const emptyArray = ["", "", "", "", "", "", ""]

    return (
        <>
            <Box className={`w-full relative xl:!rounded-md overflow-hidden -ml-[16px] xl:ml-0`} style={isMobile ? {width: `calc(100% + 32px)`} : {}}>
                <TableContainer className={`max-w-full !flex-1 overflow-auto`} {...events} ref={ref}>
                    <ChakraUiTable className={`w-full`}>
                        <Thead className={`!border-0 bg-blue_primary w-full ${rest?.theadClassName}`}>
                            {table?.getHeaderGroups()?.map(headerGroup => (
                                <Tr key={headerGroup.id} className={`!border-0 ${rest?.theadRowClassName}`}>
                                    {headerGroup.headers.map(header => (
                                        <Th key={header.id} className={`!text-white !border-0 p-4 h4-semibold-uppercase text-left  xl:first:rounded-tl-[8px] xl:last:rounded-tr-[8px] ${rest?.theadColumnClassName}`}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </Th>
                                    ))}
                                </Tr>
                            ))}
                        </Thead>

                        {!rest?.isLoading && (
                            <>
                                <Tbody className={` w-full  ${rest?.tbodyClassName}`}>
                                    {table?.getRowModel()?.rows.map((row, key) => (
                                        <Tr onClick={() => {
                                            handleRowClick(Number(row.id))
                                        }} key={row.id} className={`odd:bg-gray_1/35 hover:!bg-gray_2 border-0 relative ${rest?.tbodyRowClassName}`}>
                                            {row.getVisibleCells()?.map((cell, key) => (
                                                <Td key={cell.id} className={`${key === 0 && `w-full`} !border-0 h3-regular p-4 text-white ${rest?.tbodyColumnClassName}`}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </Td>
                                            ))}


                                        </Tr>
                                    ))}
                                </Tbody>
                                <Tfoot className={` w-full`}>
                                    {table?.getFooterGroups()?.map(footerGroup => (
                                        <Tr key={footerGroup.id}>
                                            {footerGroup.headers.map(header => (
                                                <Th key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.footer,
                                                            header.getContext()
                                                        )}
                                                </Th>
                                            ))}
                                        </Tr>
                                    ))}
                                </Tfoot>
                            </>
                        )}
                    </ChakraUiTable>
                </TableContainer>
            </Box>
            {rest?.isLoading && (
                <Stack className={` -ml-[16px] xl:ml-0`} spacing={1} style={isMobile ? {width: `calc(100% + 32px)`} : {}}>
                    {table?.getRowModel()?.rows.map((item, key) => {
                        return (
                            <Skeleton key={key} className={`w-full h-[50px] xl:h-[53px] bg-blue_primary`} startColor={key  % 2 === 0 ? 'rgba(22, 40, 68, .35)' : ''} endColor={key  % 2 === 0 ? '#202637' : 'rgba(22, 40, 68, .35)'} />
                        )
                    })}
                </Stack>
            )}
            {(!!pageCount && pageCount > 1) && (
                <Flex className={`relative mt-6`}>
                    {(rest?.isLoading) && (
                        <Box className={`absolute w-full h-full left-0 top-0 z-50`} />
                    )}
                    <ReactPaginate
                        className={`flex justify-between items-center w-max p-2 m-auto gap-2`}
                        pageLinkClassName={`hover:!bg-blue_primary h-6 w-12 min-w-max flex justify-center bg-gray_1/35  ${rest.isLoading && `!opacity-70 `}  items-center text-white h3-regular rounded-full`}
                        breakLabel={!isMobile && <></>}
                        breakClassName={`hidden`}
                        nextLabel={currentPage !== pageCount && <Box className={`hover:!bg-blue_primary h-8 w-12 min-w-max flex justify-center bg-gray_1/35 ${rest.isLoading && `!opacity-70 `} items-center text-white h3-regular rounded-full`}><NextIcon /></Box>}
                        onPageChange={handlePageChange}
                        pageRangeDisplayed={isMobile ? 3 : 5}
                        marginPagesDisplayed={isMobile ? 0 : 0}
                        pageCount={pageCount}
                        forcePage={currentPage - 1}
                        pageLabelBuilder={(page) => {
                            return <>{pageIsLoading === page ? (<Spinner size={"sm"} />) : (page === 0 ? undefined : page)}</>
                        }}
                        previousLabel={currentPage !== 1 && <Box className={`hover:!bg-blue_primary h-8 w-12 min-w-max flex justify-center bg-gray_1/35  ${rest.isLoading && `!opacity-70`}  items-center text-white h3-regular rounded-full`}><PrevIcon /></Box>}
                        activeLinkClassName={`!bg-blue_primary  text-white h3-regular`}
                    />
                </Flex>
            )}
        </>
    )
}
