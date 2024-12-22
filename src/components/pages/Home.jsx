import '/src/App.css';
import photo from '/src/assets/main-photo.jpg';
import rightPhoto from '/src/assets/right-photo.jpg';
import amspace from '/src/assets/amspace.png';
import eightyone from '/src/assets/eightyone.png';
import chevron from '/src/assets/chevron.png';
import pickaxe from '/src/assets/pick.png';

export const Home = () => {
    return (
        <>
        <img src={photo} className="w-full" alt="Main" />
        <div>
            <div className='w-screen h-auto sm:h-500px bgc-bl text-w border-t-4 border-b-4 border-[#e57361] pt-8 pb-4 px-6 sm:px-12'>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className='w-full sm:w-[55%]'>
                    <h1 className='font-minecraft text-3xl sm:text-4xl mt-2 mb-7 color-r'>Who We Are:</h1>
                    <div className=' text-base sm:text-lg font-minecraft space-y-4'>
                        <span className='block'>
                            <span className='color-r'>RedStone 24749</span> is a robotics team competing in the  FIRST®️ Tech Challenge. We proudly represent the American Corner MakerSpace in Almaty, Kazakhstan.
                        </span>
                        <span className='block'>
                        The team was founded on <span className='color-r'>October 3, 2023</span>, by young robotics enthusiasts from School No. 81. Today, the team consists of <span className='color-r'>11 members</span> from <span className='color-r'>6 public schools</span>.
                        </span>
                        <span className='block'>
                        At the core, we love FIRST Tech Challenge and look forward to every robotics meeting. <span className='color-r'>Our passion drives our success</span>!
                        </span>
                        </div>
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
                                <span className="color-r">PROMOTE...</span> the values of FIRST organization and advancing knowledge in STEM.
                                </div>
                            </div>
                            <div className="flex space-x-2 text-base sm:text-lg">
                                <img src={pickaxe} className="h-8 sm:h-10" alt="Pickaxe" />
                                <div className="font-minecraft">
                                <span className="color-r">DEVELOP...</span> personal qualities that empower us to grow into an educated and forward-thinking generation.
.
                                </div>
                            </div>
                            <div className="flex space-x-2 text-base sm:text-lg">
                                <img src={pickaxe} className="h-8 sm:h-10" alt="Pickaxe" />
                                <div className="font-minecraft">
                                <span className="color-r">CREATE...</span> innovative solutions that help shape the future of our country..
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
            <div className='w-screen h-auto sm:h-500px bgc-bl text-w border-b-4 border-[#e57361] pt-8 pb-6 px-6 sm:px-12 flex flex-col sm:flex-row items-center'>
                <div className='w-full sm:w-[30%] sm:mr-[200px] sm:ml-[150px] text-w font-minecraft text-2xl sm:text-4xl text-center sm:text-left space-y-1'>
                    <div>Become a</div>
                    <div className='color-r'>Sponsor:</div>
                </div>  
                <div className='space-y-4 font-minecraft text-sm sm:text-base text-center sm:text-left'>
                    <div>Your tax deductible sponsorship would help us fund our registration & team fees, robot parts, and community outreach events! </div>
                    <div>As a thank you, we would love to include your logo on our pit displays, portfolio, robot cart, and engineering portfolios which will be seen by hundreds of other teams, spectators, and volunteers from around the world.</div>
                    <div>If you are interested in sponsoring us or have any questions, please reach out to us at be-a-sponsor@thecluelessftc.org!</div>
                </div>
            </div>

            <div className="flex justify-center items-center h-[50px] w-screen border-[#e57361] pt-16 pb-11 px-6 sm:px-12 color-r font-minecraft text-3xl sm:text-5xl">
                <div>NEWS:</div>
            </div>
            
            <div className='mx-4 sm:mx-[60px] border-gray-800 border-b-2'>
                
<hr className='border-gray-800 border-t-2'/>
            
            <div className="flex flex-col sm:flex-row gap-4 my-[20px]">
                
                    <img src={rightPhoto} className="w-full sm:w-[40%]" alt="Photo" />
                
                <div className="flex flex-col my-[15px] space-y-2">
                    <h1 className='color-r text-2xl sm:text-4xl font-minecraft'>{'Zhylandy FIRST Championship'}</h1>
                    <h2 className='text-w font-minecraft text-xl sm:text-2xl'>{'November 30, 2024'}</h2>
                    <div className='text-w font-minecraft text-sm sm:text-base space-y-4'><span className='block'>Our team participated in the regional Zhylandy FIRST Championship and successfully presented outstanding social projects, contributions to robotics, and the values of FIRST®️.</span><span className='block'>Thanks to our hard work and dedication, we were honored to win one of the top awards—Inspire Award 2nd Place. We are thrilled that our team is reaching new heights!</span></div>
                </div>
            </div>
            <hr className='border-gray-800 border-t-2'/>
            <div className="flex flex-col sm:flex-row gap-4 my-[20px]">
                
                <img src={rightPhoto} className="w-full sm:w-[40%]" alt="Photo" />
            
            <div className="flex flex-col my-[15px] space-y-2">
                <h1 className='color-r text-2xl sm:text-4xl font-minecraft'>{'International Forum for FTC Students'}</h1>
                <h2 className='text-w font-minecraft text-xl sm:text-2xl'>{'January 3-4, 2025'}</h2>
                <div className='text-w font-minecraft text-sm sm:text-base space-y-4'><span className='block'>Team RedStone is proud to announce the organization of the International Forum for FTC Students. This forum aims to unite students (both rookies and experienced), mentors, and professionals from around the globe to share invaluable insights, enhance their knowledge, and promote collaboration within the FTC community.</span><span className='block'>We are honored to share that some of the world’s best teams and judges have graciously accepted our invitation to participate in this online forum. We are confident this event will be an incredible opportunity for growth and innovation within our community!</span></div>
            </div>
        </div>
            </div>
        </>
    )
}
