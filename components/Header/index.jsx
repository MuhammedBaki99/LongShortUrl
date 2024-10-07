import { signOut } from "@/actions/auth";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function AdminHeader() {

    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    console.log(user);

    return (
        <>

            <ul className="flex gap-1 items-center">
                <li>Anasayfa</li>
                <li>Kullanıcılar</li>
                <li>Yazılar</li>
                {
                    user ? (
                        <>
                            <span>Hello {user.user_metadata.firstName}</span>
                            <form action={signOut}>
                                <button>Çıkış Yap</button>
                            </form>
                        </>
                    )
                        : (
                            <Link href="/login">Giriş Yap</Link>
                        )
                }

            </ul>
        </>
    )
}