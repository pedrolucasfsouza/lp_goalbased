import {ReactNode} from "react";

import {ColumnDef} from "@tanstack/react-table";
import React, {HTMLProps} from "react";
import {number} from "prop-types";
export type TemplateProps = {
    children: ReactNode
}

export type PayloadPaginatedProps = {
    page?: number
    per_page?: number
}

export type ColumnProps = ColumnDef<any> & {
}
export type TableProps = {
    theadClassName?: string
    theadRowClassName?: string
    theadColumnClassName?: string
    tbodyClassName?: string
    tbodyRowClassName?: string
    tbodyColumnClassName?: string
    columns: ColumnProps[]
    onPageChange?: (page: number) => void
    data: any[]
    page?: number
    pageCount?: number
    onRowClick?: (index: number) => void
    isLoading?: boolean
    pageIsLoading?: number
}
export type ListProps = {
    className?: string
    columns: ColumnProps[]
    data: any[]
    onRowClick?: (index: number) => void
}