import { createContext, useState } from "react";
import { chatClientTypes } from "../types/chatTypes";

interface ChatClientContextType {
    chatClient: chatClientTypes | undefined,
    setChatClient: React.Dispatch<React.SetStateAction<chatClientTypes | undefined>>
}

export const ChatClientContext = createContext<ChatClientContextType>({
    chatClient: undefined,
    setChatClient: ()=> {}
})


function ChatClientProvider({ children }: any) {
    const [chatClient, setChatClient] = useState<chatClientTypes>();

    return (
        <ChatClientContext.Provider value={{ chatClient, setChatClient }}>
            {children}
        </ChatClientContext.Provider>
    )
}

export default ChatClientProvider;