import SummaryTab from "../../components/concierge/SummaryTab";
import VisitorActivityTab from "../../components/concierge/VisitorActivityTab";
import activePeopleImage from '../../../../assets/icons/active_people.png';
import clockImage from '../../../../assets/icons/clock.png';

import conciergeImage from '../../../../assets/icons/concierge_user.png';

export default function Home() {
    return <>
        <div className="flex flex-row justify-start items-center h-[150px] w-[98%] bg-blue-950 pl-7 rounded-r-3xl mt-5">
            <img className="w-10 mr-5" src={conciergeImage}/>
            <div className="flex flex-col justify-start items-start h-fit w-fit">
                <h1 className="text-white text-4xl font-semibold mb-2">Welcome to Concierge Hub</h1>
                <h3 className="text-gray-300 text-[1.2em]">Manage your property efficiently with our comprehensive dashboard</h3>
            </div>
        </div>

        <div className="flex flex-row justify-between items-center w-[98%] h-fit mt-5">
            {/* recent activity */}
            <div className="w-[62%] h-[500px] rounded-r-3xl bg-gray-50 shadow p-5">
                <h1 className="text-2xl font-semibold">Recent Visitors Activity</h1>
                <h3 className="text-gray-500 mb-8 mt-1">Latest updates from Tenants' Visitors activity</h3>

                <div className="flex flex-col justify-start items-start w-full h-[400px]">
                    <VisitorActivityTab visitorName="Vince Russel Gonato" roomNumber="301" dateVisited="September 14, 2025"/>
                    <VisitorActivityTab visitorName="Karl John Crespo" roomNumber="602" dateVisited="September 13, 2025"/>
                    <VisitorActivityTab visitorName="John Cedred Curimao" roomNumber="617" dateVisited="September 10, 2025"/>
                    <VisitorActivityTab visitorName="John Edward Magallanes" roomNumber="405" dateVisited="September 10, 2025"/>
                </div>
            </div>

            {/* summary tabs and quick actions */}
            <div className="w-[35%] h-[500px]">
                {/* summary tabs */}
                <div className="flex flex-row justify-between items-center w-full h-fit mb-5">
                    <SummaryTab summaryIcon={activePeopleImage} summaryLabel="Active Tenants" summaryCount="148"/>
                    <SummaryTab summaryIcon={clockImage} summaryLabel="Pending Requests" summaryCount="23"/>
                </div>

                {/* quick actions */}
                <div className="flex flex-col justify-start items-start bg-white rounded-2xl shadow p-5">
                    <h1 className="text-2xl font-semibold mb-1">Quick Actions</h1>
                    <h3 className="text-gray-500 mb-3">Common tasks and shortcuts</h3>
                    <div className="w-full h-fit">
                        <div className="flex flex-col mb-2 justify-center items-start w-full h-[65px] border-1 border-gray-300 rounded-xl pl-3 hover:bg-blue-100 duration-300 hover:cursor-pointer">
                            <h1>Add New Tenant</h1>
                            <h3 className="text-[0.9em] text-gray-600">Create tenant account</h3>
                        </div>
                        <div className="flex flex-col mb-2 justify-center items-start w-full h-[65px] border-1 border-gray-300 rounded-xl pl-3 hover:bg-blue-100 duration-300 hover:cursor-pointer">
                            <h1>Log Visitor</h1>
                            <h3 className="text-[0.9em] text-gray-600">Quick visitor check-in</h3>
                        </div>
                        <div className="flex flex-col mb-2 justify-center items-start w-full h-[65px] border-1 border-gray-300 rounded-xl pl-3 hover:bg-blue-100 duration-300 hover:cursor-pointer">
                            <h1>Post Announcement</h1>
                            <h3 className="text-[0.9em] text-gray-600">Add to bulletin board</h3>
                        </div>
                        <div className="flex flex-col mb-2 justify-center items-start w-full h-[65px] border-1 border-gray-300 rounded-xl pl-3 hover:bg-blue-100 duration-300 hover:cursor-pointer">
                            <h1>View Dashboard</h1>
                            <h3 className="text-[0.9em] text-gray-600">System analytics</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}