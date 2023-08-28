import React from 'react';
import menu1 from "./menu1.png"
const Menu = () => {

  return (
    <div>
        <div className="container-four" >
            <div className="container-four__text">
      <h3>Beef Birria Burrito and Tacos:</h3>
      <p>
        Prepare to be captivated by the richness of our Beef Birria Burrito and Tacos. Tender, slow-cooked beef, marinated in a blend of exquisite spices, is wrapped in a warm, freshly made tortilla. As you savor each bite, you'll experience the perfect harmony of savory and spicy, a true homage to the heart of Mexican cuisine. Accompanied by a selection of fresh toppings, our Beef Birria Tacos are a delightful treat for your senses.
      </p>
      <h3>Shrimp Birria Tacos:</h3>
      <p>
        Elevate your dining experience with the luxurious essence of our Shrimp Birria Tacos. Succulent shrimp, embraced by the same signature Birria marinade, offers a taste profile that's both indulgent and invigorating. The tender shrimp, combined with the authenticity of our handmade tortillas, create a combination that's both comforting and exhilarating.
      </p>
      <h3>Mexican Shrimp Cocktail:</h3>
      <p>
        Dive into a bowl of coastal paradise with our Mexican Shrimp Cocktail. Plump, juicy shrimp are paired with a medley of crisp vegetables, all swimming in a zesty, tangy tomato-based cocktail sauce. This dish not only delights the palate but also transports you to the sun-soaked shores of Mexico, where seafood is celebrated with zest and zeal.
      </p>
      <p>
        🍹🎉 Discover the warmth of Mexico, one bite at a time. Come savor the authenticity at [Restaurant Name] today! 🎉🍹
      </p>
    </div>
                <img id="menu" src={menu1} alt="sda" className="container-four__image" />
                
            </div>
    </div>
  );
};

export default Menu;





