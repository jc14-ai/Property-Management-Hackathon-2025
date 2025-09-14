
type InputProps = {
    placeholder:string;
}
export default function Input({placeholder}:InputProps){
    return <div className="flex justify-start items-center w-[90%] h-[53px] bg-gray-100 border-1 border-gray-200 rounded-[5px]">
        <input className="w-full ml-4 mr-4 outline-none" placeholder={placeholder}/>
    </div>
}