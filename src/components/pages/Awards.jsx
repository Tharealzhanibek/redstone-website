import '/src/App.css';

export const Awards = () => {
    return (
        <div>
            <div className='text-w font-minecraft text-[40px] sm:text-[60px] flex justify-center items-center py-[20px] sm:py-[60px]'>
                <div className='color-r'>AWARDS  AND ACHIEVEMENTS</div>
            </div>
            <div className=''>
                {/* Award 1 */}
                <div className='flex flex-col sm:flex-row font-minecraft text-w space-x-2 sm:space-x-4 border-[#e57361] border-t-4 pt-[20px] sm:pt-[40px] pb-[20px]'>
                    <div className='flex w-full sm:w-[40%] justify-center items-center text-center'>
                        <div className='space-y-1 text-[24px] sm:text-[30px]'>
                            <span className='block'>INTO THE DEEP</span>
                            <span className='block'>2024-2025</span>
                        </div>
                    </div>  
                    <div className="text-[18px] sm:text-[20px] pl-0 sm:pl-[27px]">
                        <div>Inspire Award 2nd place  -  Almaty Regional Championship</div>
                        <div>Think Award 1st place  -  Almaty Regional Championship</div>
                    </div>
                </div>

                {/* Award 2 */}
                <div className='flex flex-col sm:flex-row font-minecraft text-w space-x-2 sm:space-x-4 border-[#e57361] border-t-4 pt-[20px] sm:pt-[40px] pb-[20px]'>
                    <div className='flex w-full sm:w-[40%] justify-center items-center text-center'>
                        <div className='space-y-1 text-[24px] sm:text-[30px]'>
                            <span className='block'>FIRST Global Challenge</span>
                            <span className='block'>2024</span>
                        </div>
                    </div>  
                    <div className="text-[18px] sm:text-[20px] pl-0 sm:pl-[27px]">
                        <div>Engineering Documentation Award 1st place - Almaty Regional Championship</div>
                    </div>
                </div>

                {/* Award 3 */}
                <div className='flex flex-col sm:flex-row font-minecraft text-w space-x-2 sm:space-x-4 border-[#e57361] border-t-4 border-b-4 pt-[20px] sm:pt-[40px] pb-[20px]'>
                    <div className='flex w-full sm:w-[40%] justify-center items-center text-center'>
                        <div className='space-y-1 text-[24px] sm:text-[30px]'>
                            <span className='block'>CENTERSTAGE</span>
                            <span className='block'>2023-2024</span>
                        </div>
                    </div>  
                    <div className="text-[18px] sm:text-[20px] pl-0 sm:pl-[27px]">
                        <div>Motivate Award 3rd place  -  Central Asian Championship</div>
                        <div>Winning Alliance Captain  -  Almaty Regional Championship</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
