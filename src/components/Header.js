import Vid from "./Vid.MP4"
import Menu from "./Menu.png"

import Andolitos from "./Andolitos.png"
import Food1 from "./Food1.jpg"
import Food2 from "./Food2.jpg"
import Food3 from "./Food3.jpg"
import Food4 from "./Food4.jpg"
import Food5 from "./Food5.jpg"
import Food6 from "./Food6.jpg"
import Food7 from "./Food7.jpg"
import Food8 from "./Food8.jpg"



const Header = () => {
    return (
        <div>
            <video className="video" src={Vid} autoPlay loop muted />
            <div className="content">
                {/* <h1>ANDOLITOS</h1> */}
                <img className="head" src={Andolitos} alt="s" />
            </div>

            <div>
                <h2 className="main-text"> Well I have finally taken my love for Mexican food to Berlin! Living the Berlin taco dream I guess you could say. Berlin needed a taco shop so now I will now try to deliver. I am born in raised in San Diego, CA. And moved to Berlin 5 years ago. It was one of my dreams to bring the joy of the food from San Diego to other places in the world. So I will always do my best to provide  the authenticity of the
                    Tijuana street food and  all my favorite items at the California taco shops. Tijuana focusing on mainly on Tacos and churros and the California taco shop part to focus mainly on burritos, rolled taquitos, ano Mexican fries. For now I am stationed at Holzmarkt( the times are posted weekly) and also have the possibility of andolitos in a food truck. So if you have any interests in having andolitos weather to eat or for an event please contact me here and I’ll get back to you as soon as possible. And stay posted for all new things coming. Anytime I am doing anything with andolitos of course it will be posted here. So stay updated for many delicious things to come!!
                </h2>
            </div>
            <div className="img-con">
                <img className="img1" src={Food2} alt="pic" />

            </div>
            <div>
                <h2 className="main-text"> Well I have finally taken my love for Mexican food to Berlin! Living the Berlin taco dream I guess you could say. Berlin needed a taco shop so now I will now try to deliver. I am born in raised in San Diego, CA. And moved to Berlin 5 years ago. It was one of my dreams to bring the joy of the food from San Diego to other places in the world. So I will always do my best to provide  the authenticity of the
                    Tijuana street food and  all my favorite items at the California taco shops. Tijuana focusing on mainly on Tacos and churros and the California taco shop part to focus mainly on burritos, rolled taquitos, ano Mexican fries. For now I am stationed at Holzmarkt( the times are posted weekly) and also have the possibility of andolitos in a food truck. So if you have any interests in having andolitos weather to eat or for an event please contact me here and I’ll get back to you as soon as possible. And stay posted for all new things coming. Anytime I am doing anything with andolitos of course it will be posted here. So stay updated for many delicious things to come!!
                </h2>
            </div>
            <div className="img-con1">
                <img className="img" src={Menu} alt="pic" />
            </div>

            <div className="img-con1">

                <img className="img1" src={Food1} alt="pic" />

                <img className="img1" src={Food3} alt="pic" />
                {/* <img className="img1" src={Food4} alt="pic" /> */}
                <img className="img1" src={Food5} alt="pic" />
                <img className="img1" src={Food6} alt="pic" />
                <img className="img1" src={Food7} alt="pic" />
                <img className="img1" src={Food8} alt="pic" />
            </div>
        </div>
    )
}

export default Header