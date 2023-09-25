import React from 'react'
import './style/footer.scss'

const Footer = () => {
  return (
    <>

    <footer>
        <h1>Let's      
            <br />
            ConnectonCutting ?
        </h1>

        <aside>
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">story</a>
            <a href="#" className="footer-link">Events</a>
            <a href="#" className="footer-link">ChairWala Cares</a>

        </aside>

 
        <div>
            <h5>Email</h5>
            <a href="mailto : +913243344556">Info@gmail.com</a> 
        </div>
            
        <div>
            <h5>Email</h5>
            <a href="mailto : +913243344556">franchise@gmail.com</a>  
        </div>    

        <p>&copy 2022 MBA chai wala. Made by ME !</p>  
        
    </footer>

    <div className="footer"></div>
    </>
  )
}

export default Footer