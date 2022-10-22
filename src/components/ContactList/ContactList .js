import { ButtonDelete, List, ListItem } from "./ContactList.styled";

export const ContactList = ({Array, onDelete}) =>(
        <List>
            {Array.length > 0 ? (
(Array).map(({id, name, number}) => (<ListItem key={id}><span> {name}: {number}</span> <ButtonDelete onClick={()=> onDelete(id)}> ❌</ButtonDelete> </ListItem>))
            ):(
<p>You don't have any contact</p>
            )
            }
    </List>
    )
