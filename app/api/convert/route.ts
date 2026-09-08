import { getConversion } from "@/app/services/currencyService";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const amount = searchParams.get("amount");

    const result = await getConversion({
        from: from!,
        to: to!,
        amount: Number(amount),
    });

    return Response.json(result);
}