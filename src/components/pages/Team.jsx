import '/src/App.css';
import rightPhoto from '/src/assets/right-photo.jpg';
import zhanibek from '/src/assets/zhanibek.jpg';
import nazima from '/src/assets/nazima.jpeg';

const Member = ({ photo, name, role, school }) => {
    let bgClass;

    if (role === "Software Member") {
        bgClass = "bg-[#5E91B6]"; // Darker Blue
    } 
    if (role === "Team Captain") {
        bgClass = "bg-[#C46464]"; // Darker Red
    } 
    if (role === "Inspire Member") {
        bgClass = "bg-[#7A6AB3]"; // Darker Violet
    } 
    if (role === "Mechanical Member") {
        bgClass = "bg-[#6D9B75]"; // Darker Green
    }

    return (
        <div className="flex flex-col md:flex-row w-full md:w-[440px] h-auto md:h-[200px] bg-[#1a1a1a] p-4 rounded-[20px] overflow-hidden">
            {/* Image Section */}
            <div className="w-full md:w-[30%] h-[200px] md:h-full overflow-hidden">
                <img src={photo} className="w-full h-full object-cover rounded-[10px]" alt="Photo" />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center w-full md:w-[70%] pl-0 md:pl-4 space-y-2 mt-4 md:mt-0">
                <div className="color-r text-[24px] sm:text-[32px] font-minecraftt">{name}</div>
                <div className="text-w font-minecraftt text-[20px] sm:text-[24px]">{school}</div>
                <div className={`text-w font-minecraftt text-[20px] sm:text-[24px] p-2 md:p-4 rounded ${bgClass} flex justify-center items-center`}>
                    {role}
                </div>
            </div>
        </div>
    );
};

export const Team = () => {
    return (
        <>
            {/* Header Section */}
            <div className="w-screen font-minecraftt">
                <div className="px-4 md:px-[45px] py-10 md:py-[70px]">
                    <p className="text-w text-[28px] md:text-[36px]">
                        We are team 24749, <span className="color-r">RedStone</span>!
                    </p>
                    <p className="text-w text-lg md:text-2xl mt-6">
                        We're a community team with members from <span className='color-r'>5 public schools</span> across Almaty based out of a laboratory in 81 school. We've been competing in FIRST Robotics for <span className='color-r'>2 years</span>. We currently have <span className='color-r'>11 members</span> and are excited to be a part of the FIRST community!
                    </p>
                </div>
            </div>

            {/* Members Section */}
            <div className="w-screen flex flex-wrap justify-center md:justify-between gap-6 px-4 md:px-[45px]">
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={zhanibek}
                        name="Zhanibek Svanov"
                        role="Software Member"
                        school="Gymnasium No.21"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={nazima}
                        name="Nazima"
                        role="Software Member"
                        school="Gymnasium No.21"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={rightPhoto}
                        name="John Doe"
                        role="Team Lead"
                        school="Some School"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={zhanibek}
                        name="Jane Doe"
                        role="Hardware Engineer"
                        school="Another School"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={nazima}
                        name="Nazima"
                        role="Designer"
                        school="Creative School"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={zhanibek}
                        name="Nazima"
                        role="Project Manager"
                        school="Leadership Academy"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={rightPhoto}
                        name="Nazima"
                        role="Mechanical Member"
                        school="Leadership Academy"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={rightPhoto}
                        name="Nazima"
                        role="Inspire Member"
                        school="Leadership Academy"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={rightPhoto}
                        name="Nazima"
                        role="Team Captain"
                        school="Leadership Academy"
                    />
                </div>
            </div>
        </>
    );
};
