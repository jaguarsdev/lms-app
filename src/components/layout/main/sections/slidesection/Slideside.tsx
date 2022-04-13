import React from 'react';

const Slideside = () => {
    return (
        <ul  id="sideSlide" className="grid grid-cols-2 gap-2 col-span-12 md:col-span-4">

                                <a href=""><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-between p-5 md:p-11 rounded-lg bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-600">
                                    <div className="right flex justify-center flex-col md:col-span-3 inline-block">
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">
            حضوری
                                        </h3>
                                    </div>
                                    <div className="left md:flex justify-center flex-col md:col-span-1 inline-block">
                                        <svg className="w-10 h-full" viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 35.5V19.575C9.98009 13.854 13.6042 11.1946 18 9.5C23.8934 11.9255 26.9924 15.8024 28 19.575V35.5M1 41V16.5C4.46515 7.69848 10.8074 3.60715 18.5 1C28.8134 4.73148 34.2366 10.6959 36 16.5V41C29.2674 36.7801 25.6976 35.1882 18 33.5C10.5836 34.5713 6.53546 36.3367 1 41Z" stroke="black"/>
                                        </svg>
                                    </div>
                                </div></li></a>
        
                                <a href=""><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-between p-6 md:p-11 rounded-lg bg-gradient-to-br from-cyan-300 via-cyan-400 to-cyan-600">
                                    <div className="right flex justify-center flex-col md:col-span-2 inline-block">
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">
            مجازی
                                        </h3>
                                    </div>
                                    <div className="left md:flex justify-center flex-col md:col-span-1 inline-block">
                                        <svg className="w-14 h-full" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 23.5H41M14.5 32.5H17.5M17.5 32.5V27.5M17.5 32.5H26M26 32.5H29M26 32.5V27.5M40.5 23.5H42M3 28H40C41.1046 28 42 27.1046 42 26V3C42 1.89543 41.1046 1 40 1H3C1.89543 1 1 1.89543 1 3V26C1 27.1046 1.89543 28 3 28Z" stroke="black"/>
                                            </svg>           
                                    </div>
                                </div></li></a>
        
                                <a href=""><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-between p-5 md:p-11 rounded-lg bg-gradient-to-br from-purple-300 via-purple-400 to-purple-600">
                                    <div className="right flex justify-center flex-col md:col-span-3 inline-block">
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">
            بین الملل
                                        </h3>
                                    </div>
                                    <div className="left md:flex justify-center flex-col md:col-span-1 inline-block">
                                        <svg className="w-14 h-full" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M45.972 8.57108C41.0491 3.64825 34.3723 0.882629 27.4104 0.882629C20.4485 0.882629 13.7717 3.64825 8.84886 8.57108C3.92603 13.4939 1.16042 20.1707 1.16042 27.1326C1.16042 30.5798 1.83939 33.9933 3.15858 37.1781C4.47776 40.3629 6.41133 43.2566 8.84886 45.6942C11.2864 48.1317 14.1802 50.0653 17.365 51.3845C20.5498 52.7037 23.9632 53.3826 27.4104 53.3826C30.8576 53.3826 34.2711 52.7037 37.4559 51.3845C40.6407 50.0653 43.5344 48.1317 45.972 45.6942C48.4095 43.2566 50.3431 40.3629 51.6623 37.1781C52.9814 33.9933 53.6604 30.5798 53.6604 27.1326C53.6604 20.1707 50.8948 13.4939 45.972 8.57108ZM45.972 8.57108L50.9304 15.466H47.8271C46.28 15.466 44.7963 16.0805 43.7023 17.1745C42.6083 18.2685 41.9938 19.7522 41.9938 21.2993C41.9938 22.8464 41.3792 24.3301 40.2852 25.4241C39.1912 26.518 37.7075 27.1326 36.1604 27.1326C34.6133 27.1326 33.1296 26.518 32.0356 25.4241C30.9417 24.3301 30.3271 22.8464 30.3271 21.2993C30.3271 19.7522 29.7125 18.2685 28.6185 17.1745C27.5246 16.0805 26.0408 15.466 24.4938 15.466H23.0354C21.1015 15.466 19.2469 14.6977 17.8794 13.3303C16.512 11.9628 15.7438 10.1082 15.7438 8.1743V3.60971L20.6604 1.76526L25.6604 0.940978L31.1604 1.15176L36.1604 2.38388L41.339 4.88263L45.972 8.57108ZM1.32083 24.216H6.99375C8.54085 24.216 10.0246 24.8305 11.1185 25.9245C12.2125 27.0185 12.8271 28.5022 12.8271 30.0493V32.966C12.8271 34.5131 13.4417 35.9968 14.5356 37.0908C15.6296 38.1847 17.1133 38.7993 18.6604 38.7993C20.2075 38.7993 21.6912 39.4139 22.7852 40.5078C23.8792 41.6018 24.4938 43.0855 24.4938 44.6326V53.2222C8.30748 49.438 1.13999 40.4688 1.32083 24.216ZM36.1604 51.8893V44.6326C36.1604 43.0855 36.775 41.6018 37.869 40.5078C38.9629 39.4139 40.4467 38.7993 41.9938 38.7993H50.9304C47.097 45.7719 43.8167 48.5937 36.1604 51.8893Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>   
                                    </div>
                                </div></li></a>
                                
                                <a href=""><li className=""><div id="sideSlidBox" className="shadow-lg flex justify-between p-5 md:p-11 rounded-lg bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600">
                                    <div className="right flex justify-center flex-col md:col-span-3 inline-block">
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">
            سازمان ها
                                        </h3>
                                    </div>
                                    <div className="left md:flex justify-center flex-col md:col-span-1 inline-block">
                                        <svg className="w-9 h-full" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 35V4.77778C23 3.77585 22.6689 2.81496 22.0795 2.10649C21.4901 1.39801 20.6907 1 19.8571 1H4.14286C3.30932 1 2.50992 1.39801 1.92052 2.10649C1.33112 2.81496 1 3.77585 1 4.77778V35M23 35H1M23 35H15.1429M1 35H8.85715M15.1429 35V25.5556C15.1429 25.0546 14.9773 24.5741 14.6826 24.2199C14.3879 23.8657 13.9882 23.6667 13.5714 23.6667H10.4286C10.0118 23.6667 9.61211 23.8657 9.31741 24.2199C9.02271 24.5741 8.85715 25.0546 8.85715 25.5556V35M15.1429 35H8.85715M6.3037 10.4034H7.87513M6.3037 17.9589H7.87513M11.3326 10.4034H12.904M11.3326 17.9589H12.904M6.3037 14.3043H7.87513M11.3326 14.3043H12.904M6.3037 7.28261H7.87513M11.3326 7.28261H12.904M15.7326 10.4034H17.304M15.7326 17.9589H17.304M15.7326 14.3043H17.304M15.7326 7.28261H17.304" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>  
                                    </div>
                                </div></li></a>
                            
                        </ul>
    );
};

export default Slideside;