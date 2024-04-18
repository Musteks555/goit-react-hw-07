import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <div className={css.conctactList}>
            {filteredContacts.map(({ id, name, number }) => {
                return <Contact key={id} contactName={name} contactNumber={number} contactId={id} />;
            })}
        </div>
    );
};

export default ContactList;
