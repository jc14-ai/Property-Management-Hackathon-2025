import NavBar from "./components/concierge/NavBar.tsx";

import { useState } from "react";
import Home from "./pages/concierge/Home.tsx";
import CreateTenant from "./pages/concierge/CreateTenant.tsx";
import VisitorAccess from "./pages/concierge/VisitorAccess.tsx";
import UtilityBoard from "./pages/concierge/UtilityBoard.tsx";
import Bulletin from "./pages/concierge/Bulletin.tsx";
import Maintenance from "./pages/concierge/Maintenance.tsx";
import UtilityUsage from "./pages/concierge/UtilityUsage.tsx";

export default function Concierge(){
    const [tab, setTabName] = useState<string>("");
    
    return <div className="flex flex-row justify-start w-screen h-screen bg-gray-200">
        <NavBar conciergeId="014" setTabName={setTabName}/>
        <div className="h-screen w-[80%]">
            {/* home
                tenants
                visitors
                utilities
                bulletin
                maintenance
                usage */}
            {(tab === "home" || tab === "")? <Home/> : tab === "tenants"? <CreateTenant/> : tab === "visitors"? <VisitorAccess/> : tab === "utilities"? <UtilityBoard/> : tab === "bulletin"? <Bulletin/> : tab === "maintenance"? <Maintenance/> : tab === "usage"? <UtilityUsage/> : <Home/>}
        </div>
    </div>

}