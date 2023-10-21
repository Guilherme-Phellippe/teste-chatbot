import Footer from "../components/templates/chat/Footer";
import Header from "../components/templates/chat/Header";
import Main from "../components/templates/chat/Main";

function Chat() {
    return (
        <div className="w-screen h-screen flex justify-center items-start md:items-center">
            <div className="w-full h-[86%] max-w-[480px] rounded-sm flex">

                <div className="w-full h-full flex flex-col justify-start relative">

                    <Header />

                    <Main />

                    <Footer />
                    
                </div>

            </div>
        </div>
    )
}

export default Chat;