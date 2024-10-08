"use server"

import { defaultHeader } from "@/utils/header";
import { makeid } from "@/utils/link";
import { createClient } from "@/utils/supabase/server";

export async function linkToShortAction(prevState, formData) {
    console.log("test");
    
    const longUrl = formData.get("long_url");
    if (!longUrl) return { error: "Url alanı boş olamaz" }

    const regex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
    if (!regex.test(longUrl)) return { error: "Geçersiz bir url girdiniz" }

    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser(); 

    const shortUrl = makeid(6);
    const response = await fetch("https://odykmnutmslrwqswlnqd.supabase.co/rest/v1/urls", {
        method: "POST",
        headers: defaultHeader,
        body: JSON.stringify({
            shorturl: "m.bc/" + shortUrl,
            longurl: longUrl,
            user_id: user?.id
        })
    });

    if (response.ok) {
        console.log("Başarılı");
        return { message: "Link başarıyla kısaltıldı" };
    } 
}
