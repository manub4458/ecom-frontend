import { LoginForm } from "@/components/auth/forms/login-form";
import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Login - Favobliss"
}

const LoginPage = () => {
    return (
        <div>
            <LoginForm/>
        </div>
    )
}

export default LoginPage;