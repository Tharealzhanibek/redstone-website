import '/src/App.css';
import photo from '/src/assets/main-photo.jpg';
import rightPhoto from '/src/assets/right-photo.jpg';
import amspace from '/src/assets/amspace.png';
import eightyone from '/src/assets/eightyone.png';
import chevron from '/src/assets/chevron.png';
import pickaxe from '/src/assets/pick.png';

const New = ({ photo, caption, date, text }) => {
    return (
        <>
            <hr className='border-gray-800 border-t-2'/>
            
            <div className="flex flex-col sm:flex-row gap-4 my-[20px]">
                
                    <img src={photo} className="w-full sm:w-[40%]" alt="Photo" />
                
                <div className="flex flex-col my-[15px] space-y-2">
                    <h1 className='color-r text-2xl sm:text-4xl font-minecraft'>{caption}</h1>
                    <h2 className='text-w font-minecraft text-xl sm:text-2xl'>{date}</h2>
                    <div className='text-w font-minecraft text-sm sm:text-base'>{text}</div>
                </div>
            </div>
        </>
    );
};

export const Home = () => {
    return (
        <>
        <img src={photo} className="w-full" alt="Main" />
        <div>
            <div className='w-screen h-auto sm:h-500px bgc-bl text-w border-t-4 border-b-4 border-[#e57361] pt-8 pb-4 px-6 sm:px-12'>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className='w-full sm:w-[55%]'>
                    <h1 className='font-minecraft text-3xl sm:text-4xl mt-2 mb-7 color-r'>Who We Are:</h1>
                    <div className=' text-base sm:text-lg font-minecraft'>The Clueless is a FIRST Tech Challenge (FTC)  team made up of 14 members from 5  high schools across San Diego, California. Through FTC, we are determined to grow as a team, have fun, and leave a lasting impact on our community.In our 8 years of competing, we have set the world record twice (22' & 24') and qualified to the World Championship 5 times, where we've won the divisional Inspire Award twice and won the robot game once. At the core, we love FIRST Tech Challenge and look forward to every robotics meeting. Our passion drives our success!</div>
                    </div>
                    <div className='w-full sm:w-[40%] mt-6 sm:mt-0'><img src={rightPhoto} className='rounded-[20px] sm:rounded-[70px] h-auto sm:h-[300px] w-full'></img></div>
                </div>
            </div>
        </div>
        <div className='w-screen h-auto sm:h-500px bgc-bl text-w border-b-4 border-[#e57361] pt-8 pb-4 px-6 sm:px-12'>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className='w-full sm:w-[40%]'><img src={rightPhoto} className='rounded-[20px] sm:rounded-[70px] h-auto sm:h-[300px] w-full'></img></div>
                    <div className='w-full sm:w-[55%] mt-6 sm:mt-0'>
                        <h1 className='font-minecraft text-3xl sm:text-4xl mt-5 mb-7 color-r'>Our Mission:</h1>
                        <div className="space-y-4">
                        <div className="flex space-x-2 text-base sm:text-lg">
                                <img src={pickaxe} className="h-8 sm:h-10" alt="Pickaxe" />
                                <div className="font-minecraft">
                                <span className="color-r">INTRODUCE...</span> our community to FIRST and share our robotics journey.
                                </div>
                            </div>
                            <div className="flex space-x-2 text-base sm:text-lg">
                                <img src={pickaxe} className="h-8 sm:h-10" alt="Pickaxe" />
                                <div className="font-minecraft">
                                <span className="color-r">INTRODUCE...</span> our community to FIRST and share our robotics journey.
                                </div>
                            </div>
                            <div className="flex space-x-2 text-base sm:text-lg">
                                <img src={pickaxe} className="h-8 sm:h-10" alt="Pickaxe" />
                                <div className="font-minecraft">
                                <span className="color-r">INTRODUCE...</span> our community to FIRST and share our robotics journey.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen h-auto sm:h-500px bgc-bl text-w border-b-4 border-[#e57361] pt-8 pb-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center'>
                <div className="flex flex-wrap justify-center sm:justify-start items-center w-full sm:w-[85%] px-4 py-6 space-x-4 sm:space-x-10">
                    <img src={amspace} className="h-20 sm:h-40" alt="Amspace" />                        
                    <img src={chevron} className="h-20 sm:h-40" alt="Chevron" />
                    <img src={eightyone} className="h-20 sm:h-40" alt="Eightyone" />
                </div>
                <div className='w-full sm:w-[60%] sm:mr-[400px] text-w font-minecraft text-2xl sm:text-4xl text-center sm:text-left space-y-1 mt-6 sm:mt-0'>
                    <div>Thank you to our</div>
                    <div className='color-r'>2024-2025</div>
                    <div className='color-r'>Sponsors!</div>
                </div>  
            </div>
            <div className='w-screen h-auto sm:h-500px bgc-bl text-w border-b-4 border-[#e57361] pt-8 pb-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center'>
                <div className='w-full sm:w-[30%] sm:mr-[200px] sm:ml-[150px] text-w font-minecraft text-2xl sm:text-4xl text-center sm:text-left space-y-1'>
                    <div>Become</div>
                    <div className='color-r'>Sponsor:</div>
                </div>  
                <div className='space-y-2 font-minecraft text-sm sm:text-base text-center sm:text-left'>
                    <div>Your tax deductible sponsorship would help us fund our registration & team fees, robot parts, and community outreach events! </div>
                    <div>As a thank you, we would love to include your logo on our pit displays, portfolio, robot cart, and engineering portfolios which will be seen by hundreds of other teams, spectators, and volunteers from around the world.</div>
                    <div>If you are interested in sponsoring us or have any questions, please reach out to us at be-a-sponsor@thecluelessftc.org!</div>
                </div>
            </div>

            <div className="flex justify-center items-center h-[50px] w-screen border-[#e57361] pt-8 pb-11 px-6 sm:px-12 color-r font-minecraft text-3xl sm:text-5xl">
                <div>NEWS:</div>
            </div>
            
            <div className='mx-4 sm:mx-[60px] border-gray-800 border-b-2'>
                <New photo={rightPhoto} caption={"Houston World Championship"} date={"April 17-20, 2024"} text={"We're honored to have been able to represent San Diego at the FIRST Tech Challenge World Championship in Houston. Over the span of 3 days, we competed alongside 224 other teams, winning 9 of our 10 qualification matches We formed an alliance with AI Citizens from Romania and Texpand from South Africa, where we made it all the way to grand finals and won! Moreover, our team was awarded the Inspire Award for the Franklin Division. Thank you to all our sponsors who made our success possible, and congradulations to all the teams who competed"} />
                <New photo={rightPhoto} caption={"Houston World Championship"} date={"April 17-20, 2024"} text={"We're honored to have been able to represent San Diego at the FIRST Tech Challenge World Championship in Houston. Over the span of 3 days, we competed alongside 224 other teams, winning 9 of our 10 qualification matches We formed an alliance with AI Citizens from Romania and Texpand from South Africa, where we made it all the way to grand finals and won! Moreover, our team was awarded the Inspire Award for the Franklin Division. Thank you to all our sponsors who made our success possible, and congradulations to all the teams who competed"} />
            </div>
        </>
    )
}
