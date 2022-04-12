import React from 'react';
import profile_img from '../assets/images/profile.jpg'


// document.querySelector('.dayNight input').addEventListener('click', () => {
//     if( document.getElementById('htmlb').classList.value.indexOf('dark') < 0 ){
//         document.getElementById('htmlb').classList.add('dark')
//     } else {
//         document.getElementById('htmlb').classList.remove('dark')
//     }
// })

const clickHandler = () =>{
    if( document.getElementById('htmlb').classList.value.indexOf('dark') < 0 ){
        document.getElementById('htmlb').classList.add('dark')
    } else {
        document.getElementById('htmlb').classList.remove('dark')
    }
    window.document.
}
const Accoundheader = () => {
    return (
        <div id="account" className="flex gap-3 items-center">
            <div>
                <label className="dayNight">
                    <input type="checkbox" onClick={clickHandler} />
                    <div></div>
                </label>
                
                {/* <a className="dribbble" href="https://dribbble.com/shots/5332195-Day-Night-Switch" target="_blank">
                <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt="" />
                </a> */}
            </div>
            <div id="login" className="md:hidden">
                <div id="avatar" className="flex items-center">
                    <img src={profile_img} className="w-10 h-10 rounded-full mr-3 ring-offset-2 ring-2 ring-offset-black ring-white" alt="" />
                </div>
            </div>
            <div id="logout" className="hidden md:block">
                <a href="" className="">ثبت نام</a>
                <a href="" className="bg-blue-600 px-4 py-1 rounded-md mr-2 text-white shadow-lg">ورود</a>
            </div>
        </div>
    );
};

export default Accoundheader;