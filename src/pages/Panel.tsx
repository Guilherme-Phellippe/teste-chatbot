import { useEffect, useState } from "react";
import { authenticateClient } from "../api/client";
import { useNavigate } from "react-router-dom";
import { clientTypes } from "../types/clientTypes";

function Panel() {
    const [client, setClient] = useState<clientTypes>();
    const navigate = useNavigate();

    useEffect(() => {

        (async () => {
            const token = localStorage.getItem("token") || "";

            const tokenIsValid = await authenticateClient(token)

            if(tokenIsValid && tokenIsValid.status === 200){
                const { client } = tokenIsValid.data
                setClient(client)
            }else navigate("/login")

        })()

    }, [])

    const handleExitThePanel = ()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }


    return (
        <div className="w-screen h-screen flex bg-dark">

            <div className="w-1/6">

                <div className="w-full h-full bg-blue_main2 border-r-2 border-blue_dark shadow-md shadow-blue_main flex flex-col gap-8 items-center">

                    <div className="w-4/5 h-[20%] flex flex-col gap-2 justify-center items-center bg-blue_main2 rounded-3xl mt-4 shadow-md shadow-white/30">
                        <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                            <img src={client?.logo || "https://via.placeholder.com/100"} alt="" />
                        </div>
                        <h2 className="text-white text-center">Bem vindo {client?.fullname}</h2>
                    </div>

                    <div className="w-full h-[80%] flex flex-col justify-between bg-blue_main2 rounded-xl">
                        <ul className="w-full h-4/5 flex flex-col">
                            <li className="w-full p-2 text-center cursor-pointer border-[1px] border-zinc-100/50 mt-2 text-white">Meus Projetos</li>
                            <li className="w-full p-2 text-center cursor-pointer border-[1px] border-zinc-100/50 mt-2 text-white">Métricas</li>
                        </ul>

                        <ul className="w-full h-auto flex flex-col mb-4">
                            <li className="w-full p-2 text-center cursor-pointer border-[1px] border-zinc-100/50 mt-2 text-white">Configuração</li>
                            <li 
                                className="w-full p-2 text-center cursor-pointer border-[1px] border-zinc-100/50 mt-2 text-white"
                                onClick={handleExitThePanel}
                            >Sair</li>
                        </ul>
                    </div>


                </div>

            </div>

            <div className="w-5/6">

                <div className="w-full">

                </div>

            </div>

        </div>
    )
}

export default Panel;