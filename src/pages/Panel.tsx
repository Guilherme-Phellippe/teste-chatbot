import { useEffect, useState } from "react";
import { authenticateClient } from "../api/client";
import { useNavigate } from "react-router-dom";
import { clientTypes } from "../types/clientTypes";
import { Bell, CaretCircleDoubleLeft, CaretCircleDoubleRight, MoonStars, Power, Question, SunDim } from "@phosphor-icons/react";

function Panel() {
    const [client, setClient] = useState<clientTypes>();
    const [navMenuIsOpen, setNavMenuOpen] = useState(true);
    const [isThemeDark, setThemeDark] = useState(true);
    const navigate = useNavigate();


    const navMenu = [
        { name: "Meus projetos", access: "user" },
        { name: "Métricas", access: "user" },
        { name: "Suporte", access: "user" },
        { name: "Pagamentos", access: "user" },
        { name: "Configuração", access: "user" },
        { name: "System", access: "admin" },
    ]

    useEffect(() => {

        (async () => {
            const token = localStorage.getItem("token") || "";

            const tokenIsValid = await authenticateClient(token)

            if (tokenIsValid && tokenIsValid.status === 200) {
                const { client } = tokenIsValid.data
                setClient(client)
            } else navigate("/login")

        })()

    }, [])

    const handleExitThePanel = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }


    return (
        <div className="w-screen h-screen flex flex-col bg-dark ">

            <header
                className="w-full h-[70px] shadow-sm shadow-blue_main flex justify-between items-center pr-4"
            >
                <h2
                    className="text-zinc-100 w-1/2 md:w-1/5 md:min-w-[300px] h-full md:border-r-[1px] flex justify-center items-center border-zinc-100/50"
                >Logo da empresa</h2>

                <div className="flex gap-3">
                    <Question
                        size={28}
                        className="fill-zinc-100 cursor-pointer"
                    />

                    <Bell
                        size={28}
                        className="fill-zinc-100 cursor-pointer"
                    />
                    {
                        isThemeDark ?
                            <SunDim
                                size={28}
                                className="fill-zinc-100 cursor-pointer"
                                onClick={()=> setThemeDark(v=> !v)}
                            />
                            :
                            <MoonStars
                                size={28}
                                className="fill-zinc-100 cursor-pointer"
                                onClick={()=> setThemeDark(v=> !v)}
                            />
                    }
                    <Power
                        size={28}
                        className="fill-zinc-100 cursor-pointer hover:fill-red-500 transition-colors duration-500"
                        onClick={handleExitThePanel}
                    />
                </div>
            </header>

            <main
                className="w-full h-full flex"
            >
                <nav
                    className={`h-full w-1/5 min-w-[300px] bg-blue_main2 rounded-md ${navMenuIsOpen ? "translate-x-0 ":"-translate-x-[250px]"}`}
                >
                    <div className="w-full h-[10%] flex gap-2 justify-center items-center bg-blue_main2">
                        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                            <img src={client?.logo || "https://via.placeholder.com/100"} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-white text-center">{client?.fullname}</h2>
                            <h3 className="text-yellow-400 font-bold text-xs ">Premium plan</h3>
                            <h3 className="text-white text-xs ">R$ 87,34 crédits</h3>

                        </div>
                    </div>

                    <div className={`w-full h-[85%] flex flex-col justify-between bg-blue_main2 rounded-xl`}>
                        <ul className="w-full h-4/5 flex flex-col">
                            {
                                navMenu.map(menu =>
                                    menu.access === "user" &&
                                    <li
                                        key={menu.name}
                                        className="w-full p-2 text-center cursor-pointer border-[1px] border-zinc-100/50 mt-2 text-white"
                                    >
                                        {menu.name}
                                    </li>
                                )
                            }
                        </ul>

                        <div className="flex justify-end px-2">
                            {
                                navMenuIsOpen ?
                                    <CaretCircleDoubleLeft
                                        size={32}
                                        className="fill-zinc-100 cursor-pointer"
                                        onClick={()=> setNavMenuOpen(v => !v)}
                                    />
                                    :
                                    <CaretCircleDoubleRight
                                        size={32}
                                        className="fill-zinc-100 cursor-pointer"
                                        onClick={()=> setNavMenuOpen(v => !v)}
                                    />
                            }
                        </div>
                    </div>
                </nav>

                <section className="w-4/5">
                        <h2 className="text-zinc">Aqui será criado com tab-navigation, inicialmente terá graficos com algumas metricas do cliente.</h2>
                </section>
            </main>

        </div>
    )
}

export default Panel;