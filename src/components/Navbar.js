import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  Button, Menu, Segment } from 'semantic-ui-react'

const Navbar = () => {

    const navigate = useNavigate()
  return (
    <Menu pointing style={{backgroundColor: "#a41d34", height:"5.4rem", display:"flex", justifyContent:"space-around", width:"130vw", alignItems:"center"}}>

        
    <Segment onClick={() => navigate("/")} style={{ backgroundColor:"#a41d34", border:"none"}}>
      <img alt='' src="https://sportsfancovers.com/wp-content/uploads/2020/06/Trabzonspor_logo-1.png"
      style={{width:"2.2rem",cursor:"pointer", transform:"scale(1.9,1.7)", backgroundColor:"#a41d34"}}
    
      />
    </Segment>


      <Menu.Item
        name='O SENE BU SENE ŞAMPİYON TRABZONSPOR'
        style={{color:"rgb(20, 192, 241)", fontWeight:"900", fontSize:"1rem", cursor:"pointer", }}
      
    
      />
      <Button style={{backgroundColor:'rgb(20, 192, 241)', color:"#a41d34", width:"10rem", height:"3rem"}}>TRABZONSPOR</Button>
    

    
    
    
    
      </Menu>
  )
}

export default Navbar