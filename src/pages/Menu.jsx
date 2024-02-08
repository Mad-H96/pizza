import React from 'react'
import './menu.css'
import Dummy from './Dummy'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'

const Menu = () => {
  return (
    <>
    <h2 className='menu'>Menu</h2>
    <br /><br />
    <div className="container">
    <div class="row">

  <div class="col">

  <Dummy

  img={p1}
  heading="Festive Triple Chicken Feast"
  para="Made with a flavourful combination of Chicken Ham, Spicy Chicken & Roast Chicken complemented with cream cheese, raisins, onions & mozzarella"
  price="950/="
  size="L - M - S"
  
  /></div>

  <div class="col">
<Dummy

img={p2}
heading="Seasonal Seafood Treat"
para="A succulent fusion of Creamy Cuttlefish & Prawns combined with Devilled Prawns, green chillies & onion, topped with delicious mozzarellaa"
price="980/="
size="L - M - S"

/>
  
  </div>

  <div class="col">
  <Dummy

img={p3}
heading="Chilli Chicken Pizza"
para="A pizza topped with spicy chicken, Green Chillies, onions & Mozzarella"
price="950/="
size="L - M - S"

/>

  </div>

  <div class="col">
<Dummy

img={p4}
heading="Hot & Spicy Chicken"
para="Spicy chunks of chicken, capsicums & onions with a double layer of cheese."
price="900/="
size="L - M - S"

/>

  </div>

</div>
<br /><br />

<div class="row">

<div class="col">

  <Dummy

  img={p1}
  heading="Festive Triple Chicken Feast"
  para="Made with a flavourful combination of Chicken Ham, Spicy Chicken & Roast Chicken complemented with cream cheese, raisins, onions & mozzarella"
  price="950/="
  size="L - M - S"
  
  /></div>

  <div class="col">
<Dummy

img={p2}
heading="Seasonal Seafood Treat"
para="A succulent fusion of Creamy Cuttlefish & Prawns combined with Devilled Prawns, green chillies & onion, topped with delicious mozzarellaa"
price="980/="
size="L - M - S"

/>
  
  </div>

  <div class="col">
  <Dummy

img={p3}
heading="Chilli Chicken Pizza"
para="A pizza topped with spicy chicken, Green Chillies, onions & Mozzarella"
price="950/="
size="L - M - S"

/>

  </div>

  <div class="col">
<Dummy

img={p4}
heading="Hot & Spicy Chicken"
para="Spicy chunks of chicken, capsicums & onions with a double layer of cheese."
price="900/="
size="L - M - S"

/>

  </div>

</div>
<br /><br />

<div class="row">

<div class="col">

  <Dummy

  img={p1}
  heading="Festive Triple Chicken Feast"
  para="Made with a flavourful combination of Chicken Ham, Spicy Chicken & Roast Chicken complemented with cream cheese, raisins, onions & mozzarella"
  price="950/="
  size="L - M - S"
  
  /></div>

  <div class="col">
<Dummy

img={p2}
heading="Seasonal Seafood Treat"
para="A succulent fusion of Creamy Cuttlefish & Prawns combined with Devilled Prawns, green chillies & onion, topped with delicious mozzarellaa"
price="980/="
size="L - M - S"

/>
  
  </div>

  <div class="col">
  <Dummy

img={p3}
heading="Chilli Chicken Pizza"
para="A pizza topped with spicy chicken, Green Chillies, onions & Mozzarella"
price="950/="
size="L - M - S"

/>

  </div>

  <div class="col">
<Dummy

img={p4}
heading="Hot & Spicy Chicken"
para="Spicy chunks of chicken, capsicums & onions with a double layer of cheese."
price="900/="
size="L - M - S"

/>

  </div>

</div>
    </div>

    </>
  )
}

export default Menu