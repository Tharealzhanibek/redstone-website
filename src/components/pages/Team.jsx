import '/src/App.css';
import rightPhoto from '/src/assets/right-photo.jpg';
import zhanibek from '/src/assets/zhanibek.jpg';
import nazima from '/src/assets/nazima.jpg';
import ansar from '/src/assets/ansar.jpg';
import bekarys from '/src/assets/bekarys.jpg';
import fatiha from '/src/assets/fatiha.jpg';
import aruzhan from '/src/assets/aruzhan.jpg';
import zhanel from '/src/assets/zhanel.jpg';
import zere from '/src/assets/zere.jpg';
import ernazar from '/src/assets/ernazar.jpg';
import david from '/src/assets/david.jpg';
import dariya from '/src/assets/dariya.png';

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
        <div className="flex flex-row w-full md:w-[440px] h-[200px] bg-[#1a1a1a] p-4 rounded-[20px] overflow-hidden">
            {/* Image Section */}
            <div className="flex-shrink-0 w-[30%] h-full overflow-hidden">
                <img src={photo} className="w-full h-full object-cover rounded-[10px]" alt="Photo" />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center w-[70%] pl-4 space-y-2">
                <div className="color-r text-[24px] sm:text-[32px] font-minecraftt text-left">{name}</div>
                <div className="text-w font-minecraftt text-[20px] sm:text-[24px] text-left">{school}</div>
                <div className={`text-w font-minecraftt text-[20px] sm:text-[24px] p-2 rounded ${bgClass} text-center`}>{role}</div>
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
                        We're a community team with members from <span className='color-r'>6 public schools</span> across Almaty based out of a laboratory in 81 school. We've been competing in FIRST Robotics for <span className='color-r'>2 years</span>. We currently have <span className='color-r'>11 members</span> and are excited to be a part of the FIRST community!
                    </p>
                </div>
            </div>

            {/* Members Section */}
            <div className="w-screen flex flex-wrap justify-center md:justify-start gap-6 px-4 md:px-[45px]">
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={nazima}
                        name="Nazima Sagi"
                        role="Software Member"
                        school="Gymnasium No.81"
                    />
                </div>

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
                        photo={ansar}
                        name="Ansar Sagatov"
                        role="Mechanical Member"
                        school="Gymnasium No.81"
                    />
                </div>
                
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={ernazar}
                        name="Ernazar Dzhanibekov"
                        role="Mechanical Member"
                        school="Gymnasium No.81"
                    />
                </div>

                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={david}
                        name="David Tolegenov"
                        role="Mechanical Member"
                        school="Gymnasium No.103"
                    />
                </div>

                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={bekarys}
                        name="Bekarys Usen"
                        role="Mechanical Member"
                        school="Gymnasium No.81"
                    />
                </div>

                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={zere}
                        name="Zere Asylkhanova"
                        role="Inspire Member"
                        school="Gymnasium No.123"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={zhanel}
                        name="Zhanel Dussembayeva"
                        role="Inspire Member"
                        school="Gymnasium No.103"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={aruzhan}
                        name="Aruzhan Satzhan"
                        role="Inspire Member"
                        school="College KazHAAC"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={fatiha}
                        name="Fatiha Izbassar"
                        role="Inspire Member"
                        school="Gymnasium No.81"
                    />
                </div>
                <div className="w-full sm:w-[48%] lg:w-[32%]">
                    <Member
                        photo={dariya}
                        name="Dariya Essenbayeva"
                        role="Inspire Member"
                        school="Lyceum No.28"
                    />
                </div>
            </div>
        </>
    );
};
