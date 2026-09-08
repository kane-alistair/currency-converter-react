import { CurrencyConverter } from "./components/CurrencyConverter";
import { getCurrencies } from "./services/currencyService";

export default async function Home() {
  const currencies = await getCurrencies();

  return (
    <CurrencyConverter currencies={currencies.response} />
  )
}
