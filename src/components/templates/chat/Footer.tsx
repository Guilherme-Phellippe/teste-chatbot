import axios from "axios";
import { Camera, Keyboard, Microphone, PaperPlaneRight, Paperclip } from "@phosphor-icons/react";
import { RefObject, useContext, useRef, useState } from "react";
import { ChatContext } from "../../../context/chatContext";
import { TypingContext } from "../../../context/typingContext";
import { useParams } from "react-router-dom";


function Footer() {
    const { setChat } = useContext(ChatContext)
    const { setTyping } = useContext(TypingContext);
    const [isTyping, setIsTyping] = useState<boolean>();
    const inputMessageRef: RefObject<HTMLInputElement> = useRef(null);
    const params = useParams();

    const handleCreateMessage = async () => {
        const date = new Date();
        const time = `${date.getHours()}:${date.getMinutes()}`
        const message = inputMessageRef.current?.value || ""

        //clear input message
        inputMessageRef.current?.value && (inputMessageRef.current.value = "")
        setChat(chats=> {
            if(chats) return [...chats, { time, player: 1, message }]
            else return [{ time, player: 1, message }]
        })
        setTyping(true)

        //search guest in localhost
        let guestId = localStorage.getItem("guestId") || null;

        if (!guestId) {
            const guestCreated = await axios
                .post(`https://9e38-187-87-120-50.ngrok.io/guest`, { s: params.stora_name })
                .catch((error) => console.log({ message: "Error at create guest.", error }));

            console.log(guestCreated)

            if(guestCreated?.status === 200){
                localStorage.setItem("guestId", guestCreated.data.id)
                guestId = guestCreated?.data.id
            }
        }

        const response = await axios
            .post(`https://9e38-187-87-120-50.ngrok.io/chat/client/${params.store_name}/guest/${guestId}`, { message })
            .catch((error) => console.log({ message: "Error on request the response AI.", error }));

            console.log(response)

        if (response) {
            //set typing bottom name contact
            setChat(response.data.messages)
            setTyping(false)
        }

    }


    return (
        <footer className="w-full h-[65px] flex items-center">
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
                    onChange={({ target }) => target.value.length > 0 ? setIsTyping(true) : setIsTyping(false)}
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