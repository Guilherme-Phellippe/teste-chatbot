import { Camera, DotsThreeVertical, Keyboard, PaperPlaneRight, Paperclip, Phone, VideoCamera } from "@phosphor-icons/react";

function Chat() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-full h-full md:h-[95%] max-w-[480px] rounded-sm bg-blue_medium_dark flex">

                <div className="w-full h-full flex flex-col justify-between relative">


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

                        <div className="w-[50%] cursor-pointer">
                            <p>Nome do contato</p>
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



                    <main className="w-full h-full bg-[url(https://i.ibb.co/SVh0S75/Design-sem-nome-removebg-preview.png)] opacity-10">
                         
                    </main>


                    <footer className="w-full h-[65px] absolute bottom-0 flex items-center">
                        <div className="w-4/5 mx-4 p-2 rounded-3xl flex gap-2 items-center bg-white">
                            <Keyboard
                                size={32}
                                className="fill-zinc-600/70"
                            />
                            <input
                                type="text"
                                className="w-[70%] bg-white text-zinc-800 outline-none"
                                placeholder="Messagem"
                            />
                            <Paperclip
                                size={32}
                                className="fill-zinc-600/70"
                            />
                            <Camera
                                size={32}
                                className="fill-zinc-600/70"
                            />
                        </div>

                        <div className="w-[50px] bg-green_light mr-2 rounded-full grid place-items-center p-2 cursor-pointer">
                            {/* <Microphone size={32} /> */}
                            <PaperPlaneRight size={28} />
                        </div>
                    </footer>
                </div>

            </div>
        </div>
    )
}

export default Chat;