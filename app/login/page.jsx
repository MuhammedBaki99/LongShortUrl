import Image from "next/image"
import { login, signup } from "./action"
import "./login.css"

export default function LoginPage() {
  return (
    <div className="loginContainer">
      <div className="login">
        <h1>Giriş Yap</h1>
        <form>
          <label htmlFor="email">Eposta:
            <input id="email" name="email" type="email" required /></label>
          <label htmlFor="password">Şifre:
            <input id="password" name="password" type="password" required /></label>
          <button formAction={login}>Giriş Yap</button>
        </form>
      </div>
      <div className="loginImg">
        <Image src={"/image/hero.png"} width={500} height={500} />
      </div>
    </div>
  )
}