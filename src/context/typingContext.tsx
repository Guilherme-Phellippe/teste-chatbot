import { createContext, useState } from "react";

interface typingTypes {
    typing: boolean | undefined,
    setTyping: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const TypingContext = createContext<typingTypes>({
    typing: undefined,
    setTyping: ()=> []
});


function TypingProvider({ children }: any) {
    const [ typing, setTyping ] = useState<boolean>();

    return (
        <TypingContext.Provider value={{ typing, setTyping }}>
            { children }
        </TypingContext.Provider>
    )
}

export default TypingProvider;