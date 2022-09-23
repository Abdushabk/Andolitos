import Vid from "./Vid.MP4"
// import Menu from "./Menu.png"

import Andolitos from "./Andolitos.png"
import Food1 from "./Food1.jpg"
import Food3 from "./Food3.jpg"
import Food5 from "./Food5.jpg"
// import Food6 from "./Food6.jpg"
// import Food7 from "./Food7.jpg"
// import Food8 from "./Food8.jpg"



const Header = () => {
    return (
        <div>
            <video className="video" src={Vid} autoPlay loop muted />
            <div className="content">
                {/* <h1>ANDOLITOS</h1> */}
                <img className="head" src={Andolitos} alt="s" />
            </div>

            <div>
                <h3 className="section-top"> I have finally taken my love for Mexican food to Berlin! Living the Berlin taco dream I guess you could say. Berlin needed a taco shop so now I will now try to deliver. I am born in raised in San Diego, CA. And moved to Berlin 5 years ago. It was one of my dreams to bring the joy of the food from San Diego to other places in the world. So I will always do my best to provide  the authenticity of the
                    Tijuana street food and  all my favorite items at the California taco shops. Tijuana focusing on mainly on Tacos and churros and the California taco shop part to focus mainly on burritos, rolled taquitos, ano Mexican fries. For now I am stationed at Holzmarkt( the times are posted weekly) and also have the possibility of andolitos in a food truck. So if you have any interests in having andolitos weather to eat or for an event please contact me here and I’ll get back to you as soon as possible. And stay posted for all new things coming. Anytime I am doing anything with andolitos of course it will be posted here. So stay updated for many delicious things to come!!
                </h3>
            </div>


            <div className="section">
                <div>
                    <h1>Carnitas</h1>
                    <p>literally meaning "little meats", is a dish of Mexican cuisine that originated in the state of Michoacán. Carnitas are made by braising or simmering pork in oil or preferably lard until tender. The process takes three to four hours, and the result is very tender and juicy meat, which is then typically served with chopped cilantro (coriander leaves), diced onion, salsa, guacamole, tortillas, and refried beans (frijoles refritos).

                        Carnitas reminds me most of California
                        Eating at one of the famous carnitas places near my great grandmothers house
                        Just carnitas/corn tortillas/ and very hot salsa is how I prefer</p>
                </div>
                <img src={Food5} alt="sda" />
            </div>
            <div className="section">
                <img className="imgb" src={Food3} alt="sda" />
                <div>
                    <h1>Birria</h1>
                    <p>is a Mexican dish from the state of Jalisco. It is a traditional ancestral soup or stew made from a combination of chili pepper-based goat meat adobo, garlic, cumin, bay leaves, and thyme, and cooked at a low heat. Not to be confused with barbacoa, which is cooked underground, birria is slow-stewed in a pot (olla). Beef, lamb sheep or vegan meat substitutes are alternatives for goat. It may be seasoned and garnished with onion, cilantro, and lime. It is commonly accompanied with handmade corn tortillas.

                        In recent years, a popular adaption of birria has been quesabirria, a style of taco composed of a beef birria served with melted cheese in a taco that has been stained red by the birria marinade. While not a traditional Mexican dish, quesabirria, also known as red tacos, has become popular in the United States

                        I choose birria becuase it was one of my favorites growing up. I use to always habe to go to Mexico for it but it made its way to California eventually and because of its amazing color and great flavor I knew it was a must for Berlin</p>
                </div>
            </div>
            <div className="section-1">
                <div>
                    <h1>Carne Asada</h1>
                    <p>The term carne asada translates literally to "grilled meat"; the English-style dish "roast beef" is called by its English name in Spanish, so that each dish has a distinctive name. The term carne asada is used in Mexico and Central America and refers to the style of grilled meat in those countries. In South America, the term used for grilled meat is asado and it has a different style and preparation.
                        I choose to use Carne Asada because I grew up  eating it weather be at home bbq’s or on the streets of Tijuana, for me Carne Asada represents both Tijuana street food and California taco shops equally</p>
                </div>
                <img src={Food1} alt="sda" />
            </div>
        </div>
    )
}

export default Header