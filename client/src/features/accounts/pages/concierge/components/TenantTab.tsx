type TenantTabProps = {
    tenantName: string;
    dateCreated: string;
}

export default function TenantTab({tenantName, dateCreated}:TenantTabProps){
    return <div className="flex flex-row justify-between items-center mb-2 bg-gray-100 h-[70px] w-full rounded-2xl pl-5 pr-5 hover:bg-white hover:shadow hover:cursor-pointer duration-400">
                    <div className="flex  flex-row justify-start items-center w-fit h-fit">
                        <div className="w-3 h-3 bg-gray-700 rounded-4xl mr-4"></div>
                        <div className="flex flex-col w-fit h-fit">
                            <h1 className="text-[1.1em] font-medium">{tenantName}</h1>
                        </div>
                    </div>
                    <h3>{dateCreated}</h3>
                </div>
}