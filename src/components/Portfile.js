import React, {   useEffect, useState } from 'react'
import { getDatabase, onValue, push, query, ref, set } from 'firebase/database';
import Cards from './Cards';
import app from '../utils/firebase';
import { Button, Form,  Input,  TextArea, TransitionablePortal } from 'semantic-ui-react';


export const useFetch=()=>{
    const [contactList, setContactList] = useState();
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
      setIsLoading(true)

      const db = getDatabase();
      const userRef = ref(db, 'content');
  
      onValue(query(userRef), snapshot => {
        const contacts=snapshot.val()
        // send an array of the values in database
        const contactArray = [];
        for (let id in contacts) {
          contactArray.push({ id, ...contacts[id] });
        }
        setContactList(contactArray);
        setIsLoading(false)
      })
    },[]);
    return {isLoading,contactList};
}




const Portfile = () => {
    const {contactList, isLoading } = useFetch()
    const [addNewForm, setAddNewForm] = useState(false)
    const addForm = () => {
        setAddNewForm(!addNewForm)
    }
    const [newEvent, setNewEvent] = useState({ adres: "", title: "", desci: "" ,name : ""});
    const handleAddInfo=()=>{
        // console.log(info);
        const db=getDatabase();
        const userRef=ref(db,"/content/")
        const newUserRef=push(userRef)
        if(newEvent.adres && newEvent.title && newEvent.desci && newEvent.name )
        set(newUserRef,{
            adres:newEvent.adres,
            title:newEvent.title,
            desci:newEvent.desci,
            name:newEvent.name,
            date:new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear(),
            comm : {initial : {comment:"Would you like to comment?"}} 
        }).then(() => {
            setAddNewForm(false)
          })
          .catch((error) => {
            console.log(error)
          });
          else{
              alert("Lütfen bilgileri doldurunuz !!")
          }
     
    }

  return (
    <div className='portfile'>
    
    <h1 style={{textAlign:"center", color:"white"}}>FORUMLAR</h1>
    <Button circular floated='right' color='white' icon='add' label="Yeni Form Ekle"  onClick={() => addForm()}></Button>
    <Cards contactList = {contactList} isLoading = {isLoading} />
    <TransitionablePortal
          open={addNewForm}
            transition= {{animation:"drop", duration:500 }}>    
          <div style={{ padding:"2rem 5rem",backgroundColor: "#a41d34",  left: '30%',
                position: 'fixed',
                top: '0%',
                zIndex: 1000,height:"100vh",width:"40vw", borderRadius:"2rem", opacity:"0.95"}}>
            <h3 style={{textAlign:"center", color:"white"}}>YENİ FORM EKLE</h3>
   
              <Form>
              <h5 style={{margin:"1rem", color:"white"}}>RESİM ADRESİNİ GİRİNİZ</h5>
              <Form.Field
              control={Input}
              placeholder="Adres http//..."
              onChange={(e) => setNewEvent({...newEvent, adres:e.target.value})}
            />
                <h5 style={{margin:"1rem", color:"white"}}>BAŞLIK</h5>
              <Form.Field
              control={Input}
              label=""
              placeholder="BAŞLIK"
              onChange={(e) =>setNewEvent({...newEvent, title:e.target.value.toUpperCase()})}
            />
                <h5 style={{margin:"1rem", color:"white"}}>İÇERİK</h5>
                <TextArea placeholder='FORM METİN'  onChange={(e) => setNewEvent({...newEvent, desci:e.target.value})} style={{ minHeight: 100 }} />
            
                     <h5 style={{margin:"1rem", color:"white"}}>İSİM SOYİSİM</h5>
              <Form.Field
              control={Input}
              placeholder="İsim Soyisim Giriniz"
              onChange={(e) => setNewEvent({...newEvent, name:e.target.value.toUpperCase()})}
              />
              </Form>
          <div style={{display:"flex", justifyContent:"center", marginTop:"3rem"}}>
          <Button color='orange'  onClick={() => handleAddInfo()} >Onayla ve Kaydet</Button>
          <Button color='red'onClick={() => setAddNewForm(false)} >Kapat</Button>
          </div>
              </div>
               
          
   

         </TransitionablePortal>


    </div>
  )
}

export default Portfile