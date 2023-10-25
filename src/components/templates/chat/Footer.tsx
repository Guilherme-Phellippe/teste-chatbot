import { Camera, Keyboard, Microphone, PaperPlaneRight, Paperclip } from "@phosphor-icons/react";
import { RefObject, useContext, useRef, useState } from "react";
import { ChatClientContext } from "../../../context/chatContext";
import { TypingContext } from "../../../context/typingContext";
import { useParams } from "react-router-dom";
import { createGuestApi } from "../../../api/guest";
import { createMessage } from "../../../api/chat";
import { getHourWithMinutes } from "../../../functions/getHourWithMinutes";


function Footer() {
    const { setChatClient } = useContext(ChatClientContext)
    const { setTyping } = useContext(TypingContext);
    const [isTyping, setIsTyping] = useState<boolean>();
    const inputMessageRef: RefObject<HTMLInputElement> = useRef(null);
    const params = useParams();

    const handleCreateMessage = async () => {
        const time = getHourWithMinutes();
        const message = inputMessageRef.current?.value || ""
        const store_name = params.store_name || ""

        //clear input message
        inputMessageRef.current?.value && (inputMessageRef.current.value = "")
        setTyping(true)
        setChatClient((chat: any) => {
            if(chat){
                return {
                    ...chat, 
                    messages: [...chat?.messages, { time, player: 1, message }]
                }
            }
        })

        //search guest in localhost
        let guest_id = localStorage.getItem("guestId") || null;

        if (!guest_id) {
            const guestCreated = await createGuestApi(store_name)

            if(guestCreated?.status === 200){
                localStorage.setItem("guestId", guestCreated.data.id)
                guest_id = guestCreated?.data.id
            }
        }

        const response = await createMessage({ store_name, guest_id, message })

        if (response) {
            //set typing bottom name contact
            setChatClient((chat: any) => {
                if(chat){
                    return {
                        ...chat, 
                        messages: response.data.messages
                    }
                }
            })
            setTyping(false)
        }

    }


    return (
        <footer className="w-full h-[65px] flex items-center mb-3">
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