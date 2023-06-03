export const currencyFormat = (value: number) => {
    return `${(new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL',
    })).format(value)?.replace(`-R$`, `-R$ `)?.replace(`R$`, `R$ `)}`
}
export const removeCurrencyFormat = (value: string) => {
    return Number(value?.replaceAll("R$ ", "")?.replaceAll(".", "")?.replaceAll(",", ".")) ?? undefined
}