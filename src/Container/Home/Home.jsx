import React from "react";
import './Home.css'
import HTML from './image.png'
import Robot from './robot.png'
import JS from './js.png'
import ReactLogo from './science.png'
function Home() {
    return(
        <div className="Home">
                <p>Nimalar o'rgatiladi:</p>
            <div className="Center"> 
                <div className="Flex-the-two-cards1">
                    <div className="Background-color1">
                        <div className="img-and-text">
                            <img width={"100px"} src={HTML} alt="" />
                            <p className="P"> <span className="Span1">HTML & CSS - </span><br />
                            Web saytlar yaratish uchun eng <br /> asosiy vositalar. Bu texnologiyalar <br /> Web dasturlashga birinchi qadam <br /> qo’yishda o'rganiladi.</p>
                        </div>
                    </div>
                    <div className="Background-color1">
                        <div className="img-and-text2">
                            <img width={"100px"} src={Robot} alt="" />
                            <p className="P"> <span className="Span1">Telegram Bot -</span><br /> o’quvchilar o’zlarining ovqat <br /> buyurtma qilish, internet do’kon <br />  va boshqa Telegram botlar <br /> yaratishni o’rganishadi.</p>
                        </div>
                    </div>
                    <div className="Background-color1">
                        <div className="img-and-text3">
                            <img width={"100px"} src={JS} alt="" />
                            <p className="P"> <span className="Span1">JavaScript - </span><br /> hozirgi kunda eng  yetakchi<br /> dasturlash tillaridan biri. Web  saytlar,<br /> mobile ilovalar, hatto  hozirda  sun'iy<br /> intellekt  texnologiyalarini yaratish <br />mumkin.</p>
                        </div>
                    </div>
                    <div className="Background-color1">
                        <div className="img-and-text4">
                            <img width={"100px"} src={ReactLogo} alt="" />
                            <p className="P"> <span className="Span1">React - </span><br /> mukammal dasturlarni yanada  tezroq<br /> va yaxshiroq bo'lishiga yordam beradigan <br />texnologiya. O'zbekiston va xalqaro IT<br /> kompaniyalarga ishga kirishda talab<br />  qilinadi.</p>
                        </div>
                    </div>
                 </div>
             </div>
        
        </div>
    )
}
export default Home