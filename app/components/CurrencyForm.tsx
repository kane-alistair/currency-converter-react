import { Currency, CurrencyFormState } from "../types/currency";
import { CurrencyInput } from "./CurrencyInput";

interface CurrencyFormProps {
    form: CurrencyFormState
    currencies: Currency[],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    onSubmit: (e: React.FormEvent) => void
}

export function CurrencyForm({
    form,
    currencies,
    onChange,
    onSubmit
}: CurrencyFormProps) {
    return (
        <form className="flex flex-col gap-4 items-center" onSubmit={onSubmit}>
            <CurrencyInput
                label="From"
                amount={form.amount}
                currency={form.fromCurrency}
                currencies={currencies}
                onChange={onChange}
                amountName="amount"
                currencyName="fromCurrency"
            />
            <CurrencyInput
                label="To"
                amount={form.convertedAmount}
                currency={form.toCurrency}
                currencies={currencies}
                onChange={onChange}
                amountName="convertedAmount"
                currencyName="toCurrency"
                readOnly
            />
            <button className="bg-slate-300 px-4 py-1 rounded-xl cursor-pointer" type="submit" >
                Convert
            </button>
        </form>
    );
}