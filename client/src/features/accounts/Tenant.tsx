import { useState } from "react";
import NavBar from "./components/tenant/NavBar";
import Home from "./pages/tenant/Home";
import Utilities from "./pages/tenant/Utilities";
import Visitors from "./pages/tenant/Visitors";
import Maintenance from "./pages/tenant/Maintenance";
import Bulletin from "./pages/tenant/Bulletin";
import { useParams } from "react-router-dom";


export default function Tenant(){
    const { id, unit } = useParams<{id:string, unit:string}>();
    const [tab, setTabName] = useState<string>("");

    return <div className="flex flex-row justify-start items-start w-screen h-screen">
        <NavBar tenantName={id ?? ""} setTabName={setTabName}/>
        <div className="h-screen w-[80%]">
            {/* home
                utilities
                visitors
                maintenance
                bulletin */}
            {(tab === "home" || tab === "")? <Home/>: tab === "utilities"? <Utilities/> : tab === "visitors"? <Visitors/> : tab === "maintenance"? <Maintenance/> : tab === "bulletin"? <Bulletin/> : <Home/>}
        </div>
    </div>
}