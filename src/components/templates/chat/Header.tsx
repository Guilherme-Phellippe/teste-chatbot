import axios from "axios";
import { DotsThreeVertical, Phone, VideoCamera } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { TypingContext } from "../../../context/typingContext";
import { useNavigate, useParams } from "react-router-dom";
import { clientTypes } from "../../../types/clientTypes";
import { ChatContext } from "../../../context/chatContext";

function Header() {
    const { setChat } = useContext(ChatContext)
    const { typing } = useContext(TypingContext)
    const [clientHeader, setClientHeader] = useState<clientTypes>();
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const guest_id = localStorage.getItem("guestId") || null
        const store_name = params?.store_name;

        if (store_name) {
            (async () => {
                const client = await axios
                    .get(`https://9e38-187-87-120-50.ngrok.io/client/${store_name}${guest_id ? `/guest/${guest_id}` : "/"}`)
                    .catch(err => console.log(err))
                    
                if (client?.status === 200) {
                    const title = document.head.querySelector("title");
                    title && (title.textContent = "Bem-vindo - " + client.data.business_name)
                    setChat(client.data.chat[0].messages)
                    setClientHeader(client.data)
                }else navigate("/client-not-found")
            })();
        } else {
            navigate("/client-not-found")
        }


    }, [])

    return (
        clientHeader &&
        <header className="w-full h-[70px] bg-green_main flex justify-around items-center">

            <div className="w-[15%] flex justify-center">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                    {
                        <img
                            src={clientHeader?.logo || "https://i.ibb.co/XFHL0Bz/1000-F-589932782-v-QAEAZh-Hnq1-QCGu5ikwr-Ya-QD0-Mmurm0-N-removebg-preview.png"}
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
                            clientHeader?.business_name ? clientHeader.business_name : "+55 (35) 99134-1..."
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