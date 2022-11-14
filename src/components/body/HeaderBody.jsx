import React from "react";
import Star from "@/components/Icons/star";
import CheckIcon from "../Icons/checkIcon";
import heroImg from "@/assets/Img/hero-banner.png";

export const HeaderBody = () => {
    return (
        <div className="container flex md:px-10 px-2 pt-20 mx-auto">
            <div className=" flex flex-col-reverse md:grid md:grid-cols-2 grid-cols-1 gap-3 md:grid-col-reverse  items-center">
                
                <div className="grid-cols-1 ">
                    <div className="gap-3 pb-5 md:flex hidden">
                        <span className="flex">
                            <Star /> <Star /> <Star /> <Star /> <Star />{" "}
                        </span>

                        <span className="font-semibold pl-4 text-sm">
                          Calidad en aceite a granel (original).
                        </span>
                    </div>
                    <div className="pb-5">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Lo mejor para tu carro en lubricantes sellados.
                        </h2>
                        <span className="text-sm text-gray-500 ">
                           Somos tienda física, con la mejor variedad de lubricantes en todo el mercado con formas de pago para nuestros clientes vip.
                        </span>
                        <hr/>
                        <div className="text-md font-semibold text-gray-500 mt-4">
                           Estamos en San Fernando de Apure. Frente a al parque de feria...
                        </div>
                    </div>
                    <div className="grid grid-col md:flex gap-4 text-center items-center font-semibold pb-5">
                        <button className="bg-violet-800 p-1 px-2 rounded-md text-white ">
                            Inicia Tu busqueda del mejor aceite
                        </button>
                        <span className="text-violet-800 underline decoration-2">
                            <a href=""> Contacta con nuestro acesor de ventas.</a>
                        </span>
                    </div>
                    <div className="grid grid-col  md:flex md:gap-3  font-semibold text-sm md:items-center">
                       <span className="flex items-center md:gap-1"> <CheckIcon /> Atencion rapida,</span>
                       <span className="flex items-center md:gap-1"> <CheckIcon /> Delivery gratis en zona cercana</span>
                    </div>
                </div>
                <div className="grid-cols-1 ">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;
