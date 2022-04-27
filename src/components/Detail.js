import { getDatabase, push, ref } from 'firebase/database';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Button, Card, Comment, Form, Header, Icon, Image, Input } from 'semantic-ui-react';
import { useFetch } from './Portfile';

const Detail = () => {
    const { contactList } = useFetch();
      const location = useLocation();
  const cardContent = location.state.cardContent;
   const [newEvent, setNewEvent] = useState({ comment: "", nameC: ""});

   
  
   const comms = contactList?.filter((e) => e.id === cardContent.id && e.comm );
   const commm = comms && Object.values(comms[0].comm);
   console.log(commm)
   
    const handleSummitOnComment = () => {
      updateInfo(cardContent.id);
    };
    const updateInfo = (id) => {
      const db = getDatabase();
      push(ref(db, "content/" + id + "/comm"), {
        comment:newEvent.comment,
        commentSender: newEvent.nameC,
        date:new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes(), 
  
      });
    };
    console.log(new Date().getTime())
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
       
      <Card style={{margin:"2rem", width:"80vw", height:"70vh"}} >
    <Image src={cardContent.adres} alt="" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Yazan : {cardContent.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Yazıldığı Tarih: {cardContent.date} </span>
      </Card.Meta>
      <Card.Header style={{color:"#a41d34"}}>{cardContent.title}</Card.Header>
      <Card.Description>
        {cardContent.desci}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='comment' />
        {commm?.length - 1 }
    </Card.Content>
    <Comment.Group >
    {(commm?.length > 1) ? commm?.map((e,index) => (
        index !== commm?.length - 1 &&
        <Comment style={{backgroundColor:"#a41d34", margin:"1rem 0", padding:"1rem", borderRadius:"1rem", opacity:"0.95"}}>
      <Icon color='blue' name='user' size='big' />
  
          <span style={{color:'white'}}>{e.date}</span>
      <Comment.Content>
        <Comment.Text style={{color:'white'}}>{e.commentSender}</Comment.Text>
        <Comment.Text style={{color:'white'}}>{e.comment}</Comment.Text>

      </Comment.Content>
    </Comment>
    ) ): <h1>Henüz Yorum Yapılmadı</h1> }
    <Header as='h3' dividing>
      Yorum Yaz
    </Header>

    
    
 <Form reply>
 <Form.Field
              control={Input}
              placeholder="İsim Soyisim Giriniz"
              onChange={(e) => setNewEvent({...newEvent, nameC:e.target.value.toUpperCase()})}
              />
      <Form.TextArea onChange={(e) => setNewEvent({...newEvent, comment:e.target.value})} />
      <Button onClick={() => handleSummitOnComment()} content='Gönder' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
  </Card>

    </div>
  )
}

export default Detail