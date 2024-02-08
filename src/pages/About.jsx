import './about.css'
import PizzaFront from '../assets/AboutImg.jpg'
import aboutGrid from '../assets/aboutP1.jpg'
import Fotter from '../components/Fotter'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



const About = () => {
  return (
    <>
    <div>
      <div className="aImg">
        <img className='aboutImg' src={PizzaFront} alt="aimg" />
        <h1 className='aHead'>About Us</h1>
      </div>

      <div className="container">
       <div className='content'>

       <div class="row">
  <div class="col-sm-4">
  <img src={aboutGrid} alt="img2" className="aboutImg2" />
  </div>
  <div class="col-sm-8">
    <p className='para'>
Welcome to Anne's Pizza, where passion meets perfection in every slice. 
At Anne's Pizza, we believe that the heart of any great meal lies in the 
artistry of crafting the perfect pizza. Established with a love for the
 timeless tradition of handcrafted pies, Anne's Pizza is more than just a 
 pizzeria; it's a culinary experience that takes you on a journey through the
  flavors of Italy. Our commitment to quality ingredients, authentic recipes,
   and a warm, inviting atmosphere sets us apart, making Anne's Pizza a beloved 
   destination for pizza enthusiasts and families alike.</p>

    <p className='para'>At the heart of Anne's Pizza is our dedication to using only the finest,
       freshest ingredients. From our homemade tomato sauce to our hand-stretched dough, 
       every element is carefully selected to ensure a symphony of flavors in each bite.
        Our chefs bring their expertise and passion to the kitchen, creating a menu that
         showcases both classic favorites and innovative, mouthwatering creations. Whether 
         you're craving a traditional Margherita or feeling adventurous with our signature
          Anne's Special, we guarantee a culinary experience that will leave you coming back 
          for more.</p>

    <p className='para'>
    Beyond the exceptional food, Anne's Pizza is committed to creating a welcoming 
    environment where families, friends, and pizza enthusiasts can come together 
    to share delicious moments. From our friendly staff to our cozy dining area, 
    we strive to make every visit to Anne's Pizza a memorable and enjoyable experience.
     Join us at Anne's Pizza, where every slice tells a story of tradition, quality, 
     and the joy of savoring the simple pleasures in life.

    </p>
  </div>
      </div>
      </div>
      </div>
      </div>
      <h3 className='team'>Our Team</h3>
      <div class="container">
  <div class="row">
    <div class="col-sm">
    <div className='OurTeam'>
       

        <div className="avtars">

          <div className="avtar">
          <div  className='img'>
          <Stack direction="row" spacing={2} >
         
          <Avatar
          alt="Remy Sharp"
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         sx={{ width: 200, height: 200 }}
        />
        
        </Stack>
     
        </div>
     
        <h6 className='ahead'>CEO</h6>
        <p className='aPara'>Anne Sharp</p>
          </div>

        </div>

      </div>
    </div>
    <div class="col-sm">
    <div className='OurTeam'>
       

       <div className="avtars">

         <div className="avtar">
         <div  className='img'>
         <Stack direction="row" spacing={2} >
        
         <Avatar
         alt="Remy Sharp"
         src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        sx={{ width: 200, height: 200 }}
       />
       
       </Stack>
    
       </div>
    
       <h6 className='ahead'>CEO</h6>
       <p className='aPara'>Anne Sharp</p>
         </div>

       </div>

     </div>
    </div>
    <div class="col-sm">
    <div className='OurTeam'>
       

       <div className="avtars">

         <div className="avtar">
         <div  className='img'>
         <Stack direction="row" spacing={2} >
        
         <Avatar
         alt="Remy Sharp"
         src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        sx={{ width: 200, height: 200 }}
       />
       
       </Stack>
    
       </div>
    
       <h6 className='ahead'>CEO</h6>
       <p className='aPara'>Anne Sharp</p>
         </div>

       </div>

     </div>
    </div>
  </div>
</div>

      <Fotter/>
    </>
  )
}

export default About