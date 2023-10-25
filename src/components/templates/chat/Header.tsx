import { DotsThreeVertical, Phone, VideoCamera } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { TypingContext } from "../../../context/typingContext";
import { ChatClientContext } from "../../../context/chatContext";
import { useParams } from "react-router-dom";
import { getChatInfo } from "../../../api/chat";

function Header() {
    const { typing } = useContext(TypingContext)
    const { setChatClient, chatClient } = useContext(ChatClientContext)
    const params = useParams();

    useEffect(() => {
        // Pega o id do guest no localStorage, caso não tenha id, ele salvará como nulo
        // e esse valor nulo será tratado no back-end.
        const guest_id = localStorage.getItem("guestId") || null;
        const store_name = params.store_name;

        if (!store_name) throw new Error("Store name not found");

        (async () => {
            //busca todas as informações do chat
            const chatInfo = await getChatInfo({ store_name, guest_id })
            
            if (chatInfo && chatInfo.status === 200) {
                //muda o titulo da página para o nome da loja do cliente
                const title = document.head.querySelector("title");
                title && (title.textContent = "Bem-vindo - " + chatInfo.data.client.business_name);
                //Salva os dados do chat em um state
                setChatClient(chatInfo.data)
            } else throw Error("Client not found.")
        })();
    }, [])

    return (
        chatClient &&
        <header className="w-full h-[70px] bg-green_main flex justify-around items-center">

            <div className="w-[15%] flex justify-center">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                    {
                        <img
                            src={chatClient.client.logo || "https://i.ibb.co/XFHL0Bz/1000-F-589932782-v-QAEAZh-Hnq1-QCGu5ikwr-Ya-QD0-Mmurm0-N-removebg-preview.png"}
                            alt="imagem do avatar"
                            className="w-full h-full object-contain"
                        />
                    }
                </div>
            </div>

            <div className="w-[50%] cursor-pointer flex flex-col items-start justify-center relative">
                <div className="flex gap-2 items-center">
                    <p className="font-semibold">
                        {
                             chatClient.client.business_name || "+55 (35) 99134-1..."
                        }
                    </p>
                    <img
                        src="https://i.ibb.co/5T8115v/Design-sem-nome-1-removebg-preview.png"
                        alt=""
                        className="w-[20px]"
                    />
                </div>
                {
                    typing &&
                    <span className="text-sm opacity-90 leading-3">Digitando...</span>
                }
            </div>

            <div className="w-[40%] flex justify-evenly items-center">
                <VideoCamera
                    size={32}
                    className="cursor-pointer"
                />
                <Phone size={32} className="cursor-pointer" />
                <DotsThreeVertical size={32} className="cursor-pointer" />
            </div>

        </header>
    )
}

export default Header;