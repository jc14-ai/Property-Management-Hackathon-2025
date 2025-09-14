import buildingImage from '../../../../assets/icons/building.png'
import addPeopleImage from '../../../../assets/icons/add_people_white.png';
import eyeImage from '../../../../assets/icons/eye_white.png';
import dashboardImage from '../../../../assets/icons/dashboard_white.png';
import bulletinImage from '../../../../assets/icons/bulletin_white.png';
import maintenanceImage from '../../../../assets/icons/maintenance_white.png';
import meterImage from '../../../../assets/icons/meter_white.png';
import logoutImage from '../../../../assets/icons/logout_white.png';
import homeImage from '../../../../assets/icons/home_tenant.png';

import FeatureTab from "./FeatureTab";

type NavBarProps = {
    conciergeId:string;
    setTabName: (val:string)=> void;
}

export default function NavBar({conciergeId, setTabName}:NavBarProps){
    return <div className="flex flex-col justify-between items-center h-screen w-[20%] bg-gray-900 shadow">
        <div className="flex flex-row justify-start items-center h-[100px] pl-8 w-full shadow shadow-gray-800">
            <img className="w-11" src={buildingImage}/>
            <div className="flex flex-col justify-start items-start ml-3 w-fit h-fit">
                <h1 className="text-xl text-gray-300 font-semibold">Concierge {conciergeId}</h1>
                <h3 className="text-gray-400">Concierge</h3>
            </div>
        </div>
        <div className="flex flex-col justify-start items-center h-fit w-full p-5">
            <FeatureTab featureIcon={homeImage} featureName='Home' featureDesc='View summary' featureTag="home" onClick={setTabName}/>
            <FeatureTab featureIcon={addPeopleImage} featureName='Tenant Management' featureDesc='Create and manage tenant account' featureTag="tenants" onClick={setTabName}/>
            <FeatureTab featureIcon={eyeImage} featureName='Visitor Access' featureDesc='Track and monitor visitor access' featureTag="visitors" onClick={setTabName}/>
            <FeatureTab featureIcon={dashboardImage} featureName='Utility Dashboard' featureDesc='View utility consumption data' featureTag="utilities" onClick={setTabName}/>
            <FeatureTab featureIcon={bulletinImage} featureName='Bulletin Board' featureDesc='Digital announcements and notices' featureTag="bulletin" onClick={setTabName}/>
            <FeatureTab featureIcon={maintenanceImage} featureName='Maintenance' featureDesc='Monitor maintenance requests' featureTag="maintenance" onClick={setTabName}/>
            <FeatureTab featureIcon={meterImage} featureName='Usage Monitoring' featureDesc='Track utility usage and trends' featureTag="usage" onClick={setTabName}/>
        </div>
        <div className='flex justify-start items-center h-[85px] w-full shadow-xl shadow-gray-300 pl-5'>
            <div className='flex flex-row justify-start items-center hover:cursor-pointer w-[90%] h-[60%] pl-3 rounded-2xl hover:bg-red-950 duration-300'>
                <img className='w-5 mr-3' src={logoutImage}/>
                <h1 className='text-gray-300'>Sign Out</h1>
            </div>
        </div>
    </div>
}