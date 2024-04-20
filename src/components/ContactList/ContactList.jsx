import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";

import { selectFilteredContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
