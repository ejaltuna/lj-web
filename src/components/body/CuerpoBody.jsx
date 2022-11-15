import React from "react";
import TimerIcon from "@/components/Icons/TimerIcon";
import MovilIcon from "@/components/Icons/MovilIcon";
import CodeIcon from "@/components/Icons/CodeIcon";
import logo from "@/assets/Img/LJ_LOGO.png";
import sky from "@/assets/Img/marca-sky.jpg";

const CuerpoBody = () => {
    return (
        <>
            <section className="container mx-auto px-4 md:px-10  pb-16">
                <div className="grid grid-cols-1">
                    <div>
                        <span className="font-bold text-violet-800">
                            ¿Por que?{" "}
                        </span>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold mb-4">
                            {" "}
                            Debes obtener un lubricante de calidad
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px mx-auto">
                    <div className="pb-5">
                        <div className="pb-4">
                            <TimerIcon />{" "}
                        </div>
                        <span className="Text-xl font-bold pb-4">
                            {" "}
                            Mas Tiempo de vida
                        </span>
                        <p className="text-justify text-sm text-gray-500">
                            Con un lubricante de buena calidad alarga más el
                            tiempo de vida del motor de tu vehículo{" "}
                        </p>
                    </div>
                    <div className="pb-5 ">
                        <div className="pb-4">
                            <CodeIcon />{" "}
                        </div>
                        <span className="Text-xl font-bold mb-4">
                            {" "}
                            Versatilidad: un lubricante para cada motor
                        </span>
                        <p className="text-justify text-sm text-gray-500">
                            Uuna amplia gama de productos lubricantes que se
                            adaptan a los requerimientos de diversos tipos de
                            motores de vehículos, motores de motos a 2 tiempos
                            ya 4 tiempos.{" "}
                        </p>
                    </div>
                    <div className="pb-5">
                        <div className="pb-4">
                            <CodeIcon />{" "}
                        </div>
                        <span className="Text-xl font-bold mb-4">
                            {" "}
                            Aditivos de alta tecnología
                        </span>
                        <p className="text-justify text-sm text-gray-500">
                            Estos aditivos permiten en los aceites de calidad
                            verificada son guiados por estándares
                            internacionales de producción para así aumentar la
                            efectividad en tu vehículo.{" "}
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 md:px-10  pb-16">
                <div className="grid md:grid-cols-[1.5fr_1fr]  gap-4 md:gap-y-4 grid-cols-1 bg-violet-800 rounded-md items-center">
                    <div className="p-8">
                        <img src={sky} alt="" className="rounded-lg" />
                    </div>
                    <div className="p-8">
                        <h1 className=" pb-10 text-3xl text-white font-bold">
                            Variedad en repuestos.
                        </h1>
                        <p className="text-gray-200 text-justify">
                            En lubricantes LJ no solo contamos con aceites de
                            buena calidad para tu vehículo si no también con
                            diferentes repuestos y accesorios para tu vehículo.
                        </p>
                        <br />
                        <p className="text-gray-200 text-justify">
                            Entre estos están: refrigerantes, elevador de
                            octanaje, luces led, repuestos en generar para tu
                            vehículo
                        </p>
                        <div className="py-4">
                            <button className="bg-white rounded-md px-2 py-1 text-violet-800 font-bold ">
                                Miralos
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <h1 className="text-center font-bold text-3xl">
                    Productos de excelente Calidad
                </h1>
                <div className="bg-white ">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            <div className="group relative">
                                <div className="  aspect-w-1 aspect-h-1 w-full h-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                        alt="Front of men&#039;s Basic Tee in black."
                                        className="h-2/4 w-2/4 object-fill object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                ></span>
                                                SAE 5W-20 API SP
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Motor a gasolina
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        $7
                                    </p>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="  aspect-w-1 aspect-h-1 w-full h-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                        alt="Front of men&#039;s Basic Tee in black."
                                        className="h-2/4 w-2/4 object-fill object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                ></span>
                                                SAE 5W-20 API SP
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Motor a gasolina
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        $35
                                    </p>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="  aspect-w-1 aspect-h-1 w-full h-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                        alt="Front of men&#039;s Basic Tee in black."
                                        className="h-2/4 w-2/4 object-fill object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                ></span>
                                                SAE 5W-20 API SP
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Motor a gasolina
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        $35
                                    </p>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="  aspect-w-1 aspect-h-1 w-full h-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                        alt="Front of men&#039;s Basic Tee in black."
                                        className="h-2/4 w-2/4 object-fill object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                ></span>
                                                SAE 5W-20 API SP
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Motor a gasolina
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        $35
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CuerpoBody;
