import FeatureTab from "./FeatureTab.tsx";

import logoutImage from '../../../../assets/icons/logout.png';
import tenantImage from '../../../../assets/icons/tenant.png';
import visitorImage from '../../../../assets/icons/eye.png';
import dashboardImage from '../../../../assets/icons/dashboard.png';
import bulletinImage from '../../../../assets/icons/bulletin.png';
import maintenanceImage from '../../../../assets/icons/maintenance.png';
import homeImage from '../../../../assets/icons/home_tenant.png';

type NavBarProps = {
    tenantName:string;
    setTabName:(val:string) => void;
}

export default function NavBar({tenantName, setTabName}:NavBarProps) {
    return <div className="flex flex-col justify-between items-center h-screen w-[20%] bg-gray-200 shadow">
        <div className="flex flex-row justify-start items-center h-[100px] pl-8 w-full border-1 border-b-gray-100 border-r-0 border-l-0 border-t-0">
            <img className="w-11" src={tenantImage}/>
            <div className="flex flex-col justify-start items-start ml-3 w-fit h-fit">
                <h1 className="text-[1em] text-gray-800 font-semibold">{tenantName}</h1>
                <h3 className="text-gray-600">Tenant</h3>
            </div>
        </div>
        <div className="flex flex-col justify-start items-center h-fit w-full p-5">
            <FeatureTab featureIcon={homeImage} featureName='Home' featureDesc='Navigate recent activity' featureTag="home" onClick={setTabName}/>
            <FeatureTab featureIcon={dashboardImage} featureName='Utilities' featureDesc='View electricity and water bills' featureTag="utilities" onClick={setTabName}/>
            <FeatureTab featureIcon={visitorImage} featureName='Visitors' featureDesc='Manage your visitors' featureTag="visitors" onClick={setTabName}/>
            <FeatureTab featureIcon={maintenanceImage} featureName='Maintenance' featureDesc='View maintenance requests' featureTag="maintenance" onClick={setTabName}/>
            <FeatureTab featureIcon={bulletinImage} featureName='Bulletin' featureDesc='Announcements and notices' featureTag="bulletin" onClick={setTabName}/>
        </div>
        <div className='flex justify-start items-center h-[85px] w-full border-1 border-t-gray-100 border-r-0 border-l-0 border-b-0 pl-5'>
            <div className='flex flex-row justify-start items-center hover:cursor-pointer w-[90%] h-[60%] pl-3 rounded-2xl hover:bg-red-300 duration-300'>
                <img className='w-5 mr-3' src={logoutImage}/>
                <h1 className='text-gray-800'>Sign Out</h1>
            </div>
        </div>
    </div>
}