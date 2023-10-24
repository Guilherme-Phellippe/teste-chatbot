import { createContext, useState } from "react";
import { chatTypes } from "../types/chatTypes";

interface ChatContextType {
    chat: chatTypes[] | undefined,
    setChat: React.Dispatch<React.SetStateAction<chatTypes[] | undefined>>
}


export const ChatContext = createContext<ChatContextType>({
    chat: undefined,
    setChat: ()=> []
})


function ChatProvider({ children }: any) {
    const [chat, setChat] = useState<chatTypes[]>();

    return (
        <ChatContext.Provider value={{ chat, setChat }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatProvider;