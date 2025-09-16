import Input from "../components/Input";
import Label from "../components/Label";
import tenantImage from "../../../assets/icons/tenant.png";
import backImage from '../../../assets/icons/left_arrow.png';

import { useState } from "react";

import {Link, useNavigate} from 'react-router-dom';
import { FormEvent } from "react";

type Credentials = {
  id: string;
  unit:string;
  password: string;
}

export default function TenantSignIn(){

     const navigate = useNavigate();
    // const idRef = useRef<HTMLInputElement>(null);
    // const passwordRef = useRef<HTMLInputElement>(null);
    const [credentials, setCredentials] = useState<Credentials>({id:"", unit:"", password:""});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Call API here to verify credentials
    try {
        const response = await fetch("http://localhost:5000/tenant-login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            throw new Error("Login failed");
        }

        const data = await response.json();

        if(data){
            navigate(`/account/tenant/${data.id}`);
        }
            
    } catch (error) {
        console.error("Error:", error);
    }
  };
    return <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-100">
        <div className="flex justify-center items-center w-[450px] h-fit mb-10">
            <Link className="flex flex-row gap-2 justify-center items-center hover:cursor-pointer" to='/'>
                <img className="w-3" src={backImage}/>
                <label className="text-gray-600">Back to hub</label>
            </Link>
        </div>
        <form className="flex flex-col justify-center items-center w-[500px] h-[620px] bg-gray-50 rounded-[8px] shadow"
                onSubmit={handleSubmit}>
            <img className="w-12 mb-7" src={tenantImage}/>
            <h1 className="text-3xl font-semibold mb-2">Tenant Portal</h1>
            <h3 className="text-gray-500">Sign in to access the building amenities</h3>
            <Label imageSource="" label="Tenant ID"/>
            <Input 
                name="id"
                type="text"
                value={credentials?.id}
                onChange={e => setCredentials({ ...credentials, id: e.target.value })}
                placeholder="Enter your tenant ID"/>
            <Label imageSource="" label="Unit No."/>
            <Input 
            name="id"
                type="text"
                value={credentials?.unit}
                onChange={e => setCredentials({ ...credentials, unit: e.target.value })}
                placeholder="Enter your unit number"/>
            <Label imageSource="" label="Password"/>
            <Input 
                name="id"
                type="password"
                value={credentials?.password}
                onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="Enter your password"/>
            <button type="submit" className="bg-blue-700 w-[90%] h-[50px] mt-7 rounded-[5px] text-white hover:cursor-pointer hover:bg-blue-600 duration-200">Sign In</button>
        </form>
    </div>
}