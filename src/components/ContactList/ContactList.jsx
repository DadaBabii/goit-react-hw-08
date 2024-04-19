import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import { getContacts } from "../../redux/selectors.js";

const ContactList = () => {
  const selectNameFilter = useSelector((state) => state.filters.filters.name);
  const selectContacts = useSelector(getContacts);
  const filteredContacts = selectContacts.filter((item) =>
    item.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
