type FeatureTabProps = {
    featureIcon:string;
    featureName:string;
    featureDesc:string;
    featureTag:string;
    onClick:(val:string) => void;
}

export default function FeatureTab({featureIcon, featureName, featureDesc, onClick, featureTag}:FeatureTabProps){
    return <div className="flex flex-row justify-start items-center w-full h-[70px] m-1 rounded-2xl pl-4 hover:bg-gray-50 hover:cursor-pointer duration-300" onClick={() => onClick(featureTag)}>
        <img className="w-6 mr-4" src={featureIcon}/>
        <div className="">
            <h1 className="text-gray-900">{featureName}</h1>
            <h3 className="text-gray-500 text-[0.8em]">{featureDesc}</h3>
        </div>
    </div>
}