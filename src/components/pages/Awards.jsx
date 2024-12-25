import '/src/App.css';

const Award = ({ title, year, details }) => {
    return (
        <div className="flex flex-col sm:flex-row w-full bg-[#1a1a1a] p-6 rounded-[20px] border-t-4 border-[#e57361] overflow-hidden">
            {/* Title and Year */}
            <div className="flex w-full sm:w-[40%] justify-center items-center text-center mb-4 sm:mb-0">
                <div className="space-y-2 font-minecraftt color-r text-[24px] sm:text-[32px]">
                    <span className="block">{title}</span>
                    <span className="block">{year}</span>
                </div>
            </div>
            {/* Award Details */}
            <div className="font-minecraftt text-w text-[20px] sm:text-[24px] leading-relaxed sm:pl-[20px]">
                {details.map((detail, index) => (
                    <div key={index}>{detail}</div>
                ))}
            </div>
        </div>
    );
};

export const Awards = () => {
    return (
        <div>
            {/* Title Section */}
            <div className="text-w font-minecraftt text-[28px] sm:text-[40px] flex justify-center items-center py-[20px] sm:py-[40px]">
                <div className="color-r">AWARDS AND ACHIEVEMENTS</div>
            </div>

            {/* Awards Container */}
            <div className="grid grid-cols-1 gap-8 px-4 sm:px-8 pb-[20px]">
                <Award
                    title="INTO THE DEEP"
                    year="2024-2025"
                    details={[
                        "Inspire Award 2nd place - Regional Championship",
                        "Think Award 1st place - Regional Championship",
                    ]}
                />
                <Award
                    title="FIRST Global Challenge"
                    year="2024"
                    details={[
                        "Al-Biruni Award for Engineering Documentation Winner - Regional Championship",
                    ]}
                />
                <Award
                    title="CENTERSTAGE"
                    year="2023-2024"
                    details={[
                        "Motivate Award 3rd place - National Championship",
                        "Winning Alliance 1st pick - Regional Championship",
                        "Connect Award Winner - Regional Championship",
                        "Finalist Alliance 2nd pick - Regional Championship",
                        "Motivate Award Winner - Regional Championship",
                    ]}
                />
            </div>
        </div>
    );
};
