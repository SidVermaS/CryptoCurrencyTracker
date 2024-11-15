import { CryptoCurrencyI } from "../../types/store/currencies"

export type CryptoHeadColumnI={
    className:string;
    title:string
}
export type CryptoTablePropsI = {
    columns: CryptoHeadColumnI[]
}
export type CryptoRowPropsI =CryptoCurrencyI
export type CryptoHeadPropsI = {
    columns: CryptoHeadColumnI[]
}