type LabelProps = {
    imageSource:string;
    label:string;
}

export default function Label({imageSource,label}:LabelProps){
    return <>
    <div className="flex flex-row justify-start items-start h-fit w-[90%] mt-5 mb-2">
        <img src={imageSource}/>
        <label className="text-gray-700">{label}</label>
    </div>
    </>
}