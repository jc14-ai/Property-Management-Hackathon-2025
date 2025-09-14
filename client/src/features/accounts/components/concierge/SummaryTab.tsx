type SummaryTabProps = {
    summaryLabel:string;
    summaryIcon:string;
    summaryCount:string;
}

export default function SummaryTab({summaryLabel, summaryIcon, summaryCount}:SummaryTabProps){
    return <div className="flex flex-col justify-start items-center p-4 rounded-xl w-[47%] h-[120px] bg-white shadow">
        <div className="flex flex-row justify-between items-center w-full h-fit">
            <h3 className="text-gray-600 text-[1em]">{summaryLabel}</h3>
            <img className="w-5" src={summaryIcon}/>
        </div>
        <h1 className="font-semibold text-3xl mt-2">{summaryCount}</h1>
    </div>
}