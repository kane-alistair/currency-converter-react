import { Currency } from "../types/currency";

interface CurrencyInputProps {
    label: string,
    amount: number,
    currency: string,
    currencies: Currency[],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    amountName: string,
    currencyName: string,
    readOnly?: boolean
}

export function CurrencyInput({
    label,
    amount,
    currency,
    currencies,
    onChange,
    amountName,
    currencyName,
    readOnly = false
}: CurrencyInputProps) {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <p>{label}: {currency}</p>
                <input
                    className="px-2 py-1"
                    type="number"
                    value={amount}
                    onChange={onChange}
                    name={amountName}
                    readOnly={readOnly}
                />
                <select
                    className="px-2 py-1"
                    value={currency}
                    onChange={onChange}
                    name={currencyName}
                >
                    {currencies.map(currency => (
                        <option
                            key={currency.id}
                            value={currency.short_code}
                        >
                            {currency.name} ({currency.short_code})
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}