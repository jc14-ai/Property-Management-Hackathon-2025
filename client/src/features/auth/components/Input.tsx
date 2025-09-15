
type InputProps = {
    placeholder:string;
    name:any;
    type?:string;
    value?:any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({name, type, placeholder, value, onChange}:InputProps){
    return <div className="flex justify-start items-center w-[90%] h-[53px] bg-gray-100 border-1 border-gray-200 rounded-[5px]">
        <input className="w-full ml-4 mr-4 outline-none" 
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}/>
    </div>
}