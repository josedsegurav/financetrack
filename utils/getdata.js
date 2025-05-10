import { createClient } from "@/utils/supabase/server";

const supabase = await createClient();

export async function getIncome() {
    const { data: income } = await supabase.from("income").select(`*`);

    return income;
}

export async function getPurchases() {
    const { data: purchases } = await supabase.from("purchases").select(`*`);

    return purchases;
}

export async function getPurchasesDetail() {
    const { data: purchases } = await supabase.from("purchases").select(`
        id,
        created_at,
        item,
        categories (id, category_name),
        stores (id, store_name),
        amount,
        taxes,
        notes,
        user_id,
        purchase_date
    `);

    return purchases;
}

export async function categories() {
    const { data: categories } = await supabase.from("categories").select();

    return categories;
}

export async function stores() {
    const { data: stores } = await supabase.from("stores").select();

    return stores;
}