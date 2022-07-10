import "./messenger.css"
import Header from "../Header/Header"

export default function Messenger() {
    return (
        <>
         {/* <Header/> */}
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    menu
                </div>
            </div>
            <div className="chatBox">
            <div className="chatBoxWrapper">
                    box
                </div>
            </div>
            <div className="chatOnline">
            <div className="chatOnlineWrapper">
                    online
                </div></div>         
        </div>
        </>
       
    )
}