import { RefObject, useEffect, useRef, useState } from "react";

interface chatTypes {
    time: string,
    player: number,
    message: string
}

function Main() {
    const [messages, setMessages] = useState<chatTypes[]>();
    const refMain: RefObject<HTMLDivElement> = useRef(null);

    useEffect(() => {
        setInterval(() => {
            const chats: chatTypes[] = JSON.parse(localStorage.getItem("chat") || "[]")
            if (!messages) setMessages(chats)
            else if (messages && messages.length < chats.length) {
                setMessages(chats)
            }

        }, 1000)
    }, [])


    useEffect(()=>{
        refMain.current?.scrollTo({ top: refMain.current.scrollHeight, behavior: "smooth" })
    }, [messages])


    return (
        <main
            ref={refMain}
            className="w-full h-[80%] flex flex-col gap-3 p-4 py-6 overflow-auto"
        >
            {
                messages &&
                messages.map((msg, index) =>
                    <div key={index} className={`w-auto flex ${msg.player === 1 ? "justify-end" : "justify-start"} items-center`}>
                        <div className="px-4 py-1 max-w-[70%] rounded-2xl bg-blue_light_dark flex flex-col">
                            <p className="">{msg.message}</p>
                            <span className="text-zinc-300/50 text-sm self-end">{msg.time}</span>
                        </div>
                    </div>
                )
            }
        </main>
    )
}

export default Main;