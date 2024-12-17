import React from 'react';
import asideMenuLogo from '../../assets/menu-deep.png';
import tecvalleslogo from '../../assets/tecvalles_logo.png';
function HeaderMain() {
    return (
        <header className="flex justify-between w-screen pl-4 pr-4 z-10 bg-slate-200">
            <div>
                <img className="h-[50px]" src={tecvalleslogo} alt="logo_tecvalles" />
            </div>
            <ul className="flex gap-6 text-xl text-white">
                <li><button>Conocenos</button></li>
                <li><button>Avisos</button></li>
                <li><button>Oferta Educativa</button></li>
            </ul>
            <button className='cursor-pointer'><img className='h-[30px]' src={asideMenuLogo} alt="" /></button>
        </header>
    );
}
export default HeaderMain;
