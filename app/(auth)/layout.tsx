



import React, {ReactNode} from 'react'
import {isAuthenticated} from "@/lib/auth.action";
import {redirect} from "next/navigation";

const AuthLayout = async({children}:{children: ReactNode}) => {
    const isUserAuthenicated = await isAuthenticated()

    if(isUserAuthenicated) redirect('/')
    return (
        <div className="auth-layout">{children}</div>
    )
}
export default AuthLayout
