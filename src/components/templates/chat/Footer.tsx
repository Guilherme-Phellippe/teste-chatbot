import { Camera, Keyboard, Microphone, PaperPlaneRight, Paperclip } from "@phosphor-icons/react";
import { RefObject, useRef, useState } from "react";

interface chatTypes {
    time: string, 
    player: number,
    message: string
}

function Footer() {
    const [isTyping, setTyping] = useState<Boolean>();
    const inputMessageRef: RefObject<HTMLInputElement> = useRef(null);

    const handleCreateMessage = () => {
        const date = new Date();
        const time = `${date.getHours()}:${date.getMinutes()}`
        const message = inputMessageRef.current?.value || ""
        const chat: chatTypes[] = JSON.parse(localStorage.getItem("chat") || "[]") ;

        chat.push({ time, player: 1, message })
        chat.push({ time, player: 2, message: "Olá, sou um modelo de inteligência artificial provida pela Openai, infelizmente eu ainda não fui treinada para te ajudar." })

        localStorage.setItem("chat", JSON.stringify(chat))

        handleActionSendMessage();
        //clear input message
        inputMessageRef.current?.value && (inputMessageRef.current.value = "")
    }


    const handleActionSendMessage = () => {
        setTyping(true)
    }

    return (
        <footer className="w-full h-[65px]  flex items-center">
            <div className="w-4/5 mx-4 p-2 rounded-3xl flex gap-2 items-center bg-white">
                <Keyboard
                    size={32}
                    className="fill-zinc-600/70"
                />
                <input
                    ref={inputMessageRef}
                    type="text"
                    className="w-[70%] bg-white text-zinc-800 outline-none"
                    placeholder="Messagem"
                    onChange={({ target }) => target.value.length > 0 ? setTyping(true) : setTyping(false)}
                    onKeyDown={(e) => e.code === "Enter" && handleCreateMessage()}
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
                {
                    isTyping ?
                        <PaperPlaneRight
                            size={28}
                            onClick={handleCreateMessage}
                        />
                        :
                        <Microphone size={32} />
                }
            </div>
        </footer>
    )
}

export default Footer;