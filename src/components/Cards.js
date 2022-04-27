import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { Card, Dimmer, Icon, Image, Loader, Segment } from 'semantic-ui-react'

const Cards = ({contactList, isLoading}) => {
  const navigate = useNavigate()
  const handleOpenCard = (cardContent) => {
    navigate("/detail", {state : {cardContent}})
  }
  return (
    <div style={{display:'flex', justifyContent:"center",  flexWrap: "wrap", minHeight:"70vh"}}>
    {!contactList ? (    <Segment>
      <Dimmer active>
        <Loader size='huge'>Yükleniyor</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>) : contactList?.map(e => (
      <Card style={{margin:"2rem", cursor:"pointer", textDecoration:"none"}} onClick={() => handleOpenCard(e)}>
    <Image src={e.adres} alt="" wrapped ui={false} />
    <Card.Content>
      <Card.Header >Yazan : {e.name}</Card.Header>
      <Card.Meta style={{margin:"0.5rem 0"}}>
        <span className='date'>Yazıldığı Tarih: {e.date} </span>
      </Card.Meta>
      <Card.Header style={{color:"#a41d34"}}>{e.title}</Card.Header>
      <Card.Description>
        {e.desci.length > 150 ? e.desci.slice(0,150) + " ....." : e.desci}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon color='red' name='comment' />
        {(Object.values(e.comm).length - 1)}
    </Card.Content>
  </Card>
    )
    
    )
    }

    

     


    </div>
  )
}

export default Cards