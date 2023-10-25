import { RefObject, useContext, useEffect, useRef } from "react";
import { ChatClientContext } from "../../../context/chatContext";

function Main() {
    const { chatClient } = useContext(ChatClientContext)
    const refMain: RefObject<HTMLDivElement> = useRef(null);

    useEffect(() => {
        refMain.current?.scrollTo({ top: refMain.current.scrollHeight, behavior: "smooth" })
    }, [chatClient])


    return (
        <main
            ref={refMain}
            className="w-full h-full flex flex-col gap-3 p-4 py-6 overflow-auto"
        >
            {
                chatClient &&
                chatClient.messages.map((msg: any, index: number) =>
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