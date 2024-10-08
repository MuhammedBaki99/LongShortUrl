import { login, signup } from "./action"
import "./login.css"

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Eposta:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Şifre:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button> 
    </form>
  )
}