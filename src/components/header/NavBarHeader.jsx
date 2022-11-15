import React, { useState } from "react";
import MenuIcon from "@/components/Icons/MenuIcon";
import CloseIcon from "@/components/Icons/CloseIcon";
import logo from "@/assets/Img/LJ_LOGO.png"
const NavBarHeader = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleOpenMenu = () => {
        setOpenMenu(true);
    };
    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    return (
        <>
            <header className="container md:px-10  px-4 flex gap-4 mx-auto justify-evenly py-5 items-center">
               <img src={logo} className='w-[50px] h-[50px] md:w-[80px] md:h-[80px]' ></img>
                <h1 className="text-left font-bold text-2xl md:mr-auto md:mx-0 mx-auto">
                  
                </h1>
                <button onClick={handleOpenMenu} className="md:hidden">
                    <MenuIcon/>
                </button>
                <nav
                    className={`font-bold gap-4 md:static md:flex md:h-auto md:flex-row md:gap-4 md:p-0 
                    ${
                        openMenu
                            ? "absolute transition-all  duration-300 pl-5 w-4/5 top-0 -left-0 z-20 flex h-full bg-slate-300  flex-col gap-y-4 "
                            : "hidden"
                    }
                   `}
                >
                    <button
                        onClick={handleCloseMenu}
                        className="mb-10 p-5 ml-auto md:hidden"
                    >
                        <CloseIcon />
                    </button>

                    <span>
                        <a href="">Contacto</a>
                    </span>
                    <span>
                        {" "}
                        <a href="">Catalogo</a>
                    </span>

                    <span>
                        {" "}
                        <a href="">Caracteristicas</a>{" "}
                    </span>
                </nav>
                <div className=" gap-5 font-bold items-center md:block hidden">
                    <a href="">Sing In</a>
                    <button className="bg-[#5c20e2] rounded-md px-2 py-1 text-white ">
                        Sing Up
                    </button>
                </div>
            </header>
          
        </>
    );
};
export default NavBarHeader;
