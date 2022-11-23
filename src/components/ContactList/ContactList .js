import { ButtonDelete, List, ListItem } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ Array, onDelete }) => (
  <List>
    {Array.length > 0 ? (
      Array.map(({ id, name, number }) => (
        <ListItem key={id}>
          <span>
            {name}: {number}
          </span>
          <ButtonDelete onClick={() => onDelete(id)}> ❌</ButtonDelete>
        </ListItem>
      ))
    ) : (
      <p>You don't have any contact</p>
    )}
  </List>
);

ContactList.propTypes = {
  Array: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
