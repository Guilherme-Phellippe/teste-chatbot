import { Camera, Keyboard, PaperPlaneRight, Paperclip } from "@phosphor-icons/react";


function Footer() {
    return (
        <footer className="w-full h-[65px] absolute bottom-1 flex items-center">
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
    )
}

export default Footer;