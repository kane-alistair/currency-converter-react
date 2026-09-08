import { environment } from "../environments/environment.deployment";
import { ConversionOptions, ConversionResponse, CurrencyResponse } from "../types/currency";

export const baseUrl = 'https://api.currencybeacon.com/api/v1';
const currencies = 'currencies';
const convert = 'convert'

export const getCurrencies = async (): Promise<CurrencyResponse> => {
    const url = `${baseUrl}/${currencies}`;

    const result = await fetch(url, {
        headers: {
            Authorization: `Bearer ${environment.apiKey}`
        }
    });

    return result.json();
};

export const getConversion = async ({ from, to, amount }: ConversionOptions): Promise<ConversionResponse> => {
    const url = `${baseUrl}/${convert}?from=${from}&to=${to}&amount=${amount}`;

    const result = await fetch(url, {
        headers: {
            Authorization: `Bearer ${environment.apiKey}`
        }
    });

    return result.json();
}