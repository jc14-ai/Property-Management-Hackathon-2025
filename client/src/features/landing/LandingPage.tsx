// import { Link } from "react-router";

import buildingImage from '../../assets/icons/building.png'
import tenantImage from '../../assets/icons/tenant.png'
import adminImage from '../../assets/icons/admin.png'

export default function LandingPage(){
    return <>
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-100">
        <img className='w-20 mb-2' src={buildingImage}/>
    <h1 className='text-4xl font-bold mb-4'>Building Portal</h1>
    <h3 className='text-gray-500 text-xl font-medium mb-8'>Welcome to your building's digital hub. Choose your access type to continue.</h3>
    <div className="flex flex-row justify-evenly items-center h-[450px] w-[850px]">
      <div className='flex flex-col justify-center items-center rounded-xl hover:shadow-xl hover:cursor-pointer duration-200 bg-white h-[90%] w-[40%]'>
        <img className='w-15 mb-4' src={tenantImage}/>
        <h1 className='text-xl font-semibold mb-2'>Tenant Access</h1>
        <h2 className='text-gray-500 font-medium mb-5'>Access your personal tenant dashboard</h2>
        <ul className='list-disc mb-5'>
          <li className='text-gray-500 mb-3'>View your account details</li>
          <li className='text-gray-500 mb-3'>Submit maintenance requests</li>
          <li className='text-gray-500 mb-3'>Access building amenities</li>
        </ul>
        <div className='flex flex-row justify-center items-center w-[85%] h-[15%] bg-blue-400 rounded-[8px] text-white hover:bg-blue-300 duration-200'>
          Continue as Tenant
        </div>
      </div>
      <div className='flex flex-col justify-center items-center rounded-xl hover:shadow-xl hover:cursor-pointer duration-200 bg-white h-[90%] w-[40%]'>
        <img className='w-15 mb-4' src={adminImage}/>
        <h1 className='text-xl font-semibold mb-2'>Concierge Access</h1>
        <h2 className='text-gray-500 font-medium mb-5'>Staff portal for building management</h2>
        <ul className='list-disc mb-5'>
          <li className='text-gray-500 mb-3'>Manage tenant requests</li>
          <li className='text-gray-500 mb-3'>Access control systems</li>
          <li className='text-gray-500 mb-3'>Building administration</li>
        </ul>
        <div className='flex flex-row justify-center items-center w-[85%] h-[15%] bg-gray-800 rounded-[8px] text-white hover:bg-gray-700 duration-200'>
          Continue as Concierge
        </div>
      </div>
    </div>
    </div>
    </>
}