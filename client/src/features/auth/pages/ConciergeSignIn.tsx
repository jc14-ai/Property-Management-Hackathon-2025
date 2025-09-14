import Input from "../components/Input";
import Label from "../components/Label";
import conciergeImage from "../../../assets/icons/admin.png";
import backImage from '../../../assets/icons/left_arrow.png';

import {Link} from 'react-router-dom';

export default function ConciergeSignIn(){
    return <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-100">
        <div className="flex justify-center items-center w-[450px] h-fit mb-10">
            <Link className="flex flex-row gap-2 justify-center items-center hover:cursor-pointer" to='/'>
                <img className="w-3" src={backImage}/>
                <label className="text-gray-600">Back to Landing</label>
            </Link>
        </div>
        <form className="flex flex-col justify-center items-center w-[500px] h-[620px] bg-gray-50 rounded-[8px] shadow">
            <img className="w-12 mb-7" src={conciergeImage}/>
            <h1 className="text-3xl font-semibold mb-2">Concierge Portal</h1>
            <h3 className="text-gray-500">Sign in to access the administrative system</h3>
            <Label imageSource="" label="Concierge ID"/>
            <Input placeholder="Enter your concierge ID"/>
            <Label imageSource="" label="Password"/>
            <Input placeholder="Enter your password"/>
            <button className="bg-gray-900 w-[90%] h-[50px] mt-7 rounded-[5px] text-white hover:cursor-pointer hover:bg-gray-800 duration-200">Sign In</button>
        </form>
    </div>
}