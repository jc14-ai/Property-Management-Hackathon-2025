type VisitorActivityTabProps = {
    visitorName:string;
    roomNumber:string;
    dateVisited:string;
}

export default function VisitorActivityTab({visitorName, roomNumber, dateVisited}:VisitorActivityTabProps){

    return <div className="flex flex-row justify-between items-center mb-2 bg-gray-200 h-[70px] w-full rounded-2xl pl-5 pr-5">
            <div className="flex  flex-row justify-start items-center w-fit h-fit">
                <div className="w-3 h-3 bg-gray-700 rounded-4xl mr-4"></div>
                <div className="flex flex-col w-fit h-fit">
                    <h1 className="text-[1.1em] font-medium">{visitorName}</h1>
                    <h3 className="text-gray-600">Visited room {roomNumber}</h3>
                </div>
            </div>
            <h3>{dateVisited}</h3>
    </div>
}