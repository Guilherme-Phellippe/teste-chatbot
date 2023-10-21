function Chat() {
    return (
        <div className="w-screen h-screen grid place-items-center">
            <div className="w-full h-[95%] max-w-[1600px] rounded-sm bg-blue_medium_dark flex">
                <div className="w-[30%] border-r-[1px] border-zinc-300/30">

                </div>
                <div className="w-[70%] flex flex-col justify-between">
                    <header className="w-full h-[59px] bg-blue_light_dark">
                        nome do usuário
                    </header>
                    <main className="w-full h-full bg-[url(https://i.ibb.co/SVh0S75/Design-sem-nome-removebg-preview.png)] opacity-10">

                    </main>
                    <footer className="w-full min-h-[62px] bg-[#202c33] flex justify-around items-center">
                        <input 
                            type="text"
                            className="w-4/5 p-2 rounded-lg bg-[#2a3942] outline-none"
                            placeholder="Digite sua mensagem"
                        />
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Chat;