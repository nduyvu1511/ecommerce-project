import { HeaderLogin, HeaderMobile, LoginForm } from "@/components"
import { LoginLayout } from "@/layout/login"

const Login = () => {
  return (
    <section className="login__page">
      <HeaderLogin title="Đăng nhập" />
      <HeaderMobile centerChild={<p>Đăng nhập</p>} />
      <div className="login__page-form">
        <LoginForm view="page" />
      </div>
    </section>
  )
}

Login.Layout = LoginLayout

export default Login
