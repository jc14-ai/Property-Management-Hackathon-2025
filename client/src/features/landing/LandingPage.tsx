import { ReactNode } from "react";

type LandingPageProps = {
    children?: ReactNode;
}

export default function LandingPage({children}:LandingPageProps){
    return <>
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-100">
        {children}
    </div>
    </>
}