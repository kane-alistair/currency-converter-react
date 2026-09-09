export type ConversionResponse = {
    response: Conversion
}

export type Conversion = {
    value: number,
    from: string,
    to: string,
    amount: number
};

export type CurrencyResponse = {
    response: Currency[];
}

export type Currency = {
    id: number,
    name: string,
    short_code: string,
    code: number,
    precision: number,
    subunit: number,
    symbol: string,
    symbol_first: boolean,
    decimal_mark: string,
    thousands_separator: string,
}

export interface ConversionOptions {
    from: string,
    to: string,
    amount: number
}

export interface CurrencyFormState {
    amount: number,
    fromCurrency: string,
    toCurrency: string,
    convertedAmount: number
}