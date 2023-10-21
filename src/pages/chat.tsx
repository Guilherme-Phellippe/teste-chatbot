import {  DotsThreeVertical, Phone, VideoCamera } from "@phosphor-icons/react";
import Footer from "../components/templates/chat/Footer";

function Chat() {
    return (
        <div className="w-screen h-screen flex justify-center items-start md:items-center">
            <div className="w-full h-[86%] max-w-[480px] rounded-sm flex">

                <div className="w-full h-full flex flex-col justify-start relative">


                    <header className="w-full h-[65px] bg-green_main flex justify-around items-center">

                        <div className="w-[15%] flex justify-center">
                            <div className="w-[40px] h-[40px] rounded-full">
                                <img
                                    src="https://i.ibb.co/XFHL0Bz/1000-F-589932782-v-QAEAZh-Hnq1-QCGu5ikwr-Ya-QD0-Mmurm0-N-removebg-preview.png"
                                    alt="imagem do avatar"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        <div className="w-[50%] cursor-pointer flex flex-col items-start justify-center">
                            <p className="font-semibold ">Nome do contato</p>
                            <span className="text-sm opacity-90 leading-3">Digitando...</span>
                        </div>

                        <div className="w-[40%] flex justify-evenly items-center">
                            <VideoCamera
                                size={32}
                                className="cursor-pointer"
                            />
                            <Phone size={32} className="cursor-pointer" />
                            <DotsThreeVertical size={32} className="cursor-pointer" />
                        </div>

                    </header>



                    <main className="w-full h-auto flex flex-col p-4 py-6">
                        <div className="w-auto flex justify-end items-center ">
                            <p className="px-4 py-1 rounded-2xl bg-blue_light_dark">oi</p>
                        </div>
                        <div className="w-auto flex justify-start items-center ">
                            <p className="px-4 py-1 rounded-2xl bg-blue_light_dark">
                                Olá, como vocês está?
                            </p>
                        </div>
                    </main>

                    <Footer />
                    
                </div>

            </div>
        </div>
    )
}

export default Chat;