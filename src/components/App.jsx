import React from "react";
import { nanoid } from 'nanoid';
import { FormAddContact, Label, Input,ButtonSubmit } from "./App.styled";

export class App extends React.Component{



  state = {
    contacts: [],
    name: ''
  }

  hendleNameChange = e =>{
    const {name, value} = e.target

    this.setState({[name]: value})

  }

  Clear = () =>{
    this.setState({
      name: ''
    })
  }

  hendlOnSubmit = (e) =>{
    e.preventDefault()

    this.setState(prevState => {
 
      return {
        contacts: [...prevState.contacts, {id:nanoid() , name: prevState.name}]
      }
      
    })

  this.Clear();
  }
  
render(){
  return (<div>
    <h1>Phonebook</h1>
   <FormAddContact onSubmit={this.hendlOnSubmit} >
<Label htmlFor="name">Name</Label>
    <Input
    id="name"
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={this.state.name}
      onChange={this.hendleNameChange}
    />
<Label htmlFor="phone">Number</Label>
    <Input
    id="phone"
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
   
    <ButtonSubmit type="submit"> Add contact </ButtonSubmit>
   </FormAddContact>

   <form >
    <h2>Contacts</h2>
    <ul>
    {(this.state.contacts).map(el => (<li key={el.id}>{el.name}</li>))}
    </ul>
   </form>
  </div>
);
}

}
