import TenantTab from "./components/TenantTab";

export default function CreateTenant() {
    return <div className="flex flex-col justify-start items-start w-[100%] h-[70%] ml-5">
        <div className="flex flex-row justify-between items-center w-[65%] h-fit mb-5 mt-5">
            <h1 className="text-gray-700 text-2xl font-semibold">Tenant Accounts</h1>
            <button className="bg-gray-50 rounded-xl p-3 hover:bg-white hover:cursor-pointer hover:shadow duration-300">+ Add Tenant</button>
        </div>
        <div className="flex flex-row justify-start items-center w-full h-full">
            <div className="flex flex-col justify-start items-start w-[65%] h-full bg-blue-900 rounded-2xl shadow mr-5 p-5">
                <TenantTab tenantName="Frank Ely" dateCreated="September 16, 2025"/>
                <TenantTab tenantName="Blaster Silonga" dateCreated="September 14, 2025"/>
                <TenantTab tenantName="Armando jr." dateCreated="September 10, 2025"/>
            </div>
            <div className="flex flex-col justify-start items-start w-[30%] h-full bg-blue-900 rounded-2xl shadow">

            </div>
        </div>
    </div>
}