import React from "react";
import TimerIcon from "@/components/Icons/TimerIcon";
import MovilIcon from "@/components/Icons/MovilIcon";
import CodeIcon from "@/components/Icons/CodeIcon";
import logo from "@/assets/Img/LJ_LOGO.png";
import sky from "@/assets/Img/marca-sky.jpg";
import Carousel from "react-grid-carousel";

const CuerpoBody = () => {
    return (
        <>
            <section className="container mx-auto px-4 md:px-10 w- pb-16">
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
            <section className=" mx-auto px-4 md:px-1 text-center pb-16">
                <h1 className=" container text-center text-white font-bold text-3xl bg-violet-800 py-4 mx-auto rounded-md">
                    Mas Vendidos...
                </h1>
                <Carousel cols={6} rows={1} gap={10} loop>
                    <Carousel.Item>
                        {/* <-- Cart Producto  */}
                        <div className="group relative border border-zinc-800 p-2 rounded-xl">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                                <img
                                    src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold text-center text-gray-800">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            >
                                                {" "}
                                            </span>
                                            SAE 5W-20 API SP
                                        </a>
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="mt-1 text-sm text-gray-500">
                                        Aceite para motores a gasolina.
                                    </p>
                                </div>
                                <div className="text-center my-auto">
                                    <p className="text-2xl font-medium text-gray-900">
                                        $7
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <-- Cart Producto  */}
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <-- Cart Producto  */}
                        <div className="group relative border border-zinc-800 p-2 rounded-xl">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                                <img
                                    src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold text-center text-gray-800">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            >
                                                {" "}
                                            </span>
                                            SAE 5W-20 API SP
                                        </a>
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="mt-1 text-sm text-gray-500">
                                        Aceite para motores a gasolina.
                                    </p>
                                </div>
                                <div className="text-center my-auto">
                                    <p className="text-2xl font-medium text-gray-900">
                                        $7
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <-- Cart Producto  */}
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <-- Cart Producto  */}
                        <div className="group relative border border-zinc-800 p-2 rounded-xl">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                                <img
                                    src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold text-center text-gray-800">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            >
                                                {" "}
                                            </span>
                                            SAE 5W-20 API SP
                                        </a>
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="mt-1 text-sm text-gray-500">
                                        Aceite para motores a gasolina.
                                    </p>
                                </div>
                                <div className="text-center my-auto">
                                    <p className="text-2xl font-medium text-gray-900">
                                        $7
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <-- Cart Producto  */}
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <-- Cart Producto  */}
                        <div className="group relative border border-zinc-800 p-2 rounded-xl">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                                <img
                                    src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold text-center text-gray-800">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            >
                                                {" "}
                                            </span>
                                            SAE 5W-20 API SP
                                        </a>
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="mt-1 text-sm text-gray-500">
                                        Aceite para motores a gasolina.
                                    </p>
                                </div>
                                <div className="text-center my-auto">
                                    <p className="text-2xl font-medium text-gray-900">
                                        $7
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <-- Cart Producto  */}
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <-- Cart Producto  */}
                        <div className="group relative border border-zinc-800 p-2 rounded-xl">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                                <img
                                    src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold text-center text-gray-800">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            >
                                                {" "}
                                            </span>
                                            SAE 5W-20 API SP
                                        </a>
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="mt-1 text-sm text-gray-500">
                                        Aceite para motores a gasolina.
                                    </p>
                                </div>
                                <div className="text-center my-auto">
                                    <p className="text-2xl font-medium text-gray-900">
                                        $7
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <-- Cart Producto  */}
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <-- Cart Producto  */}
                        <div className="group relative border border-zinc-800 p-2 rounded-xl">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                                <img
                                    src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold text-center text-gray-800">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            >
                                                {" "}
                                            </span>
                                            SAE 5W-20 API SP
                                        </a>
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="mt-1 text-sm text-gray-500">
                                        Aceite para motores a gasolina.
                                    </p>
                                </div>
                                <div className="text-center my-auto">
                                    <p className="text-2xl font-medium text-gray-900">
                                        $7
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <-- Cart Producto  */}
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <-- Cart Producto  */}
                        <div className="group relative border border-zinc-800 p-2 rounded-xl">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                                <img
                                    src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold text-center text-gray-800">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            >
                                                {" "}
                                            </span>
                                            SAE 5W-20 API SP
                                        </a>
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="mt-1 text-sm text-gray-500">
                                        Aceite para motores a gasolina.
                                    </p>
                                </div>
                                <div className="text-center my-auto">
                                    <p className="text-2xl font-medium text-gray-900">
                                        $7
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <-- Cart Producto  */}
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <-- Cart Producto  */}
                        <div className="group relative border border-zinc-800 p-2 rounded-xl">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                                <img
                                    src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold text-center text-gray-800">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            >
                                                {" "}
                                            </span>
                                            SAE 5W-20 API SP
                                        </a>
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="mt-1 text-sm text-gray-500">
                                        Aceite para motores a gasolina.
                                    </p>
                                </div>
                                <div className="text-center my-auto">
                                    <p className="text-2xl font-medium text-gray-900">
                                        $7
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <-- Cart Producto  */}
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <-- Cart Producto  */}
                        <div className="group relative border border-zinc-800 p-2 rounded-xl">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                                <img
                                    src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold text-center text-gray-800">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            >
                                                {" "}
                                            </span>
                                            SAE 5W-20 API SP
                                        </a>
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="mt-1 text-sm text-gray-500">
                                        Aceite para motores a gasolina.
                                    </p>
                                </div>
                                <div className="text-center my-auto">
                                    <p className="text-2xl font-medium text-gray-900">
                                        $7
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <-- Cart Producto  */}
                    </Carousel.Item>

                </Carousel>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-1 px-1 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-1">
                        <div className="mt-2 grid grid-cols-1 place-content-center gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-7 2xl:grid-cols-8 xl:gap-x-8"></div>
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
                    Catalogo de Aceites.
                </h1>
                <div className="bg-white">
                    <div className=" max-w-2xl py-4 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-2 grid grid-cols-1 place-content-center gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 xl:gap-x-8">
                            <div className="group relative border border-zinc-800 p-2 rounded-xl">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                                    <img
                                        src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                        alt="Front of men&#039;s Basic Tee in black."
                                        className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                                    />
                                </div>
                                <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                                    <div className="col-span-2">
                                        <h3 className="text-sm font-bold text-center text-gray-800">
                                            <a href="#">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                >
                                                    {" "}
                                                </span>
                                                SAE 5W-20 API SP
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="">
                                        <p className="mt-1 text-sm text-gray-500">
                                            Aceite para motores a gasolina.
                                        </p>
                                    </div>
                                    <div className="text-center my-auto">
                                        <p className="text-2xl font-medium text-gray-900">
                                            $7
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Carousel cols={6} rows={1} gap={10} loop>
                <Carousel.Item>
                   <div className="bg-white">
                    <div className=" max-w-2xl py-4 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-2 grid grid-cols-1 place-content-center gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 xl:gap-x-8">
                            <div className="group relative border border-zinc-800 p-2 rounded-xl">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                                    <img
                                        src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                        alt="Front of men&#039;s Basic Tee in black."
                                        className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                                    />
                                </div>
                                <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                                    <div className="col-span-2">
                                        <h3 className="text-sm font-bold text-center text-gray-800">
                                            <a href="#">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                >
                                                    {" "}
                                                </span>
                                                SAE 5W-20 API SP
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="">
                                        <p className="mt-1 text-sm text-gray-500">
                                            Aceite para motores a gasolina.
                                        </p>
                                    </div>
                                    <div className="text-center my-auto">
                                        <p className="text-2xl font-medium text-gray-900">
                                            $7
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="group relative border border-zinc-800 p-2 rounded-xl">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                            <img
                                src="https://skylubricantes.com/images/products/storage/gasolina/Sintetico-SAE-5W20.png"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="p-2 mx-auto items-center  h-2/5 w-2/6  object-fill object-center   md:w-2/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-[2fr_0.5fr]  justify-between">
                            <div className="col-span-2">
                                <h3 className="text-sm font-bold text-center text-gray-800">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            {" "}
                                        </span>
                                        SAE 5W-20 API SP
                                    </a>
                                </h3>
                            </div>
                            <div className="">
                                <p className="mt-1 text-sm text-gray-500">
                                    Aceite para motores a gasolina.
                                </p>
                            </div>
                            <div className="text-center my-auto">
                                <p className="text-2xl font-medium text-gray-900">
                                    $7
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default CuerpoBody;
