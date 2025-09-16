import { useState, FormEvent } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import conciergeImage from "../../../assets/icons/admin.png";
import backImage from '../../../assets/icons/left_arrow.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

type Credentials = {
  id: string;
  password: string;
}

export default function ConciergeSignIn() {
    const navigate = useNavigate();
    // const idRef = useRef<HTMLInputElement>(null);
    // const passwordRef = useRef<HTMLInputElement>(null);
    const [credentials, setCredentials] = useState<Credentials>({id:"", password:""});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Call API here to verify credentials
    try {
        const response = await fetch("http://localhost:5000/concierge-login", {
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
            navigate(`/account/concierge/${data.id}`);
        }
            
    } catch (error) {
        console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-100">
      <div className="flex justify-center items-center w-[450px] h-fit mb-10">
        <Link className="flex flex-row gap-2 justify-center items-center hover:cursor-pointer" to='/'>
          <img className="w-3" src={backImage} alt="Back"/>
          <label className="text-gray-600">Back to Landing</label>
        </Link>
      </div>

      <form 
        className="flex flex-col justify-center items-center w-[500px] h-[620px] bg-gray-50 rounded-[8px] shadow"
        onSubmit={handleSubmit}
      >
        <img className="w-12 mb-7" src={conciergeImage} alt="Concierge"/>
        <h1 className="text-3xl font-semibold mb-2">Concierge Portal</h1>
        <h3 className="text-gray-500 mb-5">Sign in to access the administrative system</h3>

        <Label imageSource="" label="Concierge ID"/>
        <Input 
          name="id"
          type="text"
          placeholder="Enter your concierge ID"
          value={credentials?.id}
        onChange={e => setCredentials({ ...credentials, id: e.target.value })}
        />

        <Label imageSource="" label="Password"/>
        <Input 
          name="password"
          type="password"
          value={credentials?.password}
          placeholder="Enter your password"
        onChange={e => setCredentials({ ...credentials, password: e.target.value })}
        />

        <button 
          type="submit" 
          className="bg-gray-900 w-[90%] h-[50px] mt-7 rounded-[5px] text-white hover:cursor-pointer hover:bg-gray-800 duration-200"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
