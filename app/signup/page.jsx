import { signUp } from "@/actions/auth";
import "./signup.css"

export default function SignUPPage() {

    return (
        <div className="signupCont">
            <h1>Kayıt Ol</h1>
            <form action={signUp} >
                <label htmlFor="firstName">Adınız:
                    <input type="text" name="firstName" placeholder="Adınız" />
                </label>
                <label htmlFor="lastName">Soyadınız:
                    <input type="text" name="lastName" placeholder="Soyadınız" />
                </label>
                <label htmlFor="email">E-posta:
                    <input type="email" name="email" placeholder="E-posta Adresiniz" />
                </label>
                <label htmlFor="password">Şifre
                    <input type="password" name="password" placeholder="********" />
                </label>
                <button>Kayıt Ol</button>
            </form>
        </div>
    )
}