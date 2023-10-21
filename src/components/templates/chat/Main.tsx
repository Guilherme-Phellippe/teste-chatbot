import { useEffect, useState } from "react";

interface chatTypes {
    time: string,
    player: number,
    message: string
}

function Main() {
    const [messages, setMessages] = useState<chatTypes[]>();

    useEffect(() => {
        setInterval(() => {
            const chats: chatTypes[] = JSON.parse(localStorage.getItem("chat") || "[]")
            if (!messages) setMessages(chats)
            else if (messages && messages.length < chats.length) {
                setMessages(chats)
            }
        }, 1000)
    }, [])


    return (
        <main className="w-full min-h-[80%] h-auto flex flex-col gap-3 p-4 py-6 overflow-auto">
            {
                messages &&
                messages.map((msg, index) =>
                    <div key={index} className={`w-auto flex ${msg.player === 1 ? "justify-end" : "justify-start"} items-center`}>
                        <div className="px-4 py-1 max-w-[70%] rounded-2xl bg-blue_light_dark flex gap-2">
                            {msg.message}
                            <span className="text-zinc-300/50 text-sm self-end">{msg.time}</span>
                        </div>
                    </div>
                )
            }
        </main>
    )
}

export default Main;