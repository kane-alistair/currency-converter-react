"use client";
import { useState } from "react";
import { Currency } from "../types/currency";
import { baseUrl, getConversion } from "../services/currencyService";
import { environment } from "../environments/environment.deployment";

interface CurrencyConverterProps {
    currencies: Currency[]
}

export const CurrencyConverter = ({ currencies }: CurrencyConverterProps) => {
    const [form, setForm] = useState({
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

                <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <p>From: {form.fromCurrency}</p>
                        <input className="px-2 py-1" type="number" value={form.amount} onChange={handleChange} name="amount" />
                        <select className="px-2 py-1" onChange={handleChange} name="fromCurrency">
                            {currencies.map((currency) => (
                                <option key={currency.id} value={currency.short_code}>
                                    {currency.name} ({currency.short_code})
                                </option>
                            ))}</select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>To: {form.toCurrency}</p>
                        <input className="px-2 py-1" type="number" value={form.convertedAmount} readOnly />
                        <select className="px-2 py-1" onChange={handleChange} name="toCurrency">
                            {currencies.map((currency) => (
                                <option key={currency.id} value={currency.short_code}>
                                    {currency.name} ({currency.short_code})
                                </option>
                            ))}</select>
                    </div>
                    <button className="bg-slate-300 px-4 py-1 rounded-xl cursor-pointer">Convert</button>
                </form>
            </main>
        </div>
    );

}