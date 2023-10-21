import { DotsThreeVertical, Phone, VideoCamera } from "@phosphor-icons/react";


function Header() {
    return (
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
                {/* <span className="text-sm opacity-90 leading-3">Digitando...</span> */}
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
    )
}

export default Header;