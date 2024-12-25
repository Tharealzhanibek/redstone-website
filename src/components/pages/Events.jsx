import '/src/App.css';

const Event = ({ title, description }) => {
    return (
        <div className="flex flex-col w-full bg-[#1a1a1a] p-6 rounded-[20px] border-t-4 border-[#e57361] overflow-hidden">
            {/* Title Section */}
            <div className="font-minecraftt color-r text-[24px] sm:text-[32px] text-center mb-4">
                {title}
            </div>
            {/* Description Section */}
            <div className="font-minecraftt text-w text-[20px] sm:text-[24px] leading-relaxed">
                {description}
            </div>
        </div>
    );
};

export const Events = () => {
    return (
        <>
            {/* Page Title */}
            <div className="text-w font-minecraftt text-[28px] sm:text-[40px] flex justify-center items-center py-[20px] sm:py-[40px]">
                <div className="color-r w-full text-center">EVENTS AND OUTREACHES</div>
            </div>

            {/* Events Container */}
            <div className="grid grid-cols-1 gap-8 px-4 sm:px-8 pb-[20px]">
                <Event
                    title="STEM x Education Event for Prospective International University Students"
                    description="We organized an offline event for students interested in applying to international universities and exploring the STEM community. During the event, we introduced attendees to the opportunities offered by organizations such as FIRST® and TechNovation. Additionally, speakers from top companies and organizations, including nFactorial, IVY League Education, and The Argument, participated in the event, sharing valuable insights."
                />
                <Event
                    title="Game Analysis Video Translation in Collaboration with the World’s Best FTC Teams"
                    description="Inspired by the Game Analysis videos of renowned global FTC teams such as The Clueless, AICitizens, and TexPand, we decided to make this knowledge accessible to the CIS region. With permission from these teams, we officially translated the videos into Russian, ensuring that more students can benefit from their expertise. Watch the video."
                />
                <Event
                    title="Regular Visits to Orphanages and Camps"
                    description="To spread the values of STEM among children, our team frequently visits various camps and orphanages. For example, we have committed to hosting monthly robotics masterclasses at the ElKiddo children’s ski camp in the Shymbulak resort. Additionally, we visited Orphanage No. 1 in Almaty, where we introduced children to the fundamentals of robotics and inspired them to explore STEM."
                />
                <Event
                    title="Robotics Zone at the Geek Festival by Flavi"
                    description="To introduce robotics and its principles to people outside the STEM community, our team participated in the Geek Festival. Creative individuals enthusiastically engaged in our activities and listened to our presentations. As a result, we reached around 300 people, distributed merchandise from our sponsors—American Corner and Shevron—and awarded gift certificates from Meloman."
                />
                <Event
                    title="Team Presentation at Maker Fair"
                    description="Maker Fair is an exhibition of clubs and activities hosted by American Corner and MakerSpace. We participate in each event, sharing insights about FIRST® and robotics with the general audience. Visitors also have the opportunity to drive our robot and explore its mechanisms firsthand."
                />
            </div>
        </>
    );
};
