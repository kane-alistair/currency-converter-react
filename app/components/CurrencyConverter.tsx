"use client";
import { useState } from "react";
import { getConversion } from "../services/currencyService";
import { Currency, CurrencyFormState } from "../types/currency";
import { CurrencyForm } from "./CurrencyForm";

interface CurrencyConverterProps {
    currencies: Currency[]
}

export const CurrencyConverter = ({ currencies }: CurrencyConverterProps) => {
    const [form, setForm] = useState<CurrencyFormState>({
        amount: 0,
        fromCurrency: currencies[0].short_code,
        toCurrency: currencies[0].short_code,
        convertedAmount: 0
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { fromCurrency: from, toCurrency: to, amount } = form;

        const conversion = await getConversion({ from, to, amount });

        setForm((prev) => ({
            ...prev,
            convertedAmount: conversion.response.value
        }))
    };

    return (

        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-200 font-sans ">
            <main className="flex flex-col max-w-3xl items-center gap-4 py-8 px-8 bg-white rounded-xl">
                <h1 className="font-bold text-xl">Currency Converter</h1>
                <CurrencyForm
                    form={form}
                    currencies={currencies}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </main>
        </div>
    );

}