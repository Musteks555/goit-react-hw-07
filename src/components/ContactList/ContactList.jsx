import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = () => {
    const selectContacts = useSelector((state) => state.contacts.items);
    const selectNameFilter = useSelector((state) => state.filters.name);
    const filteredContacts = selectContacts.filter((contact) => contact.name.toLowerCase().includes(selectNameFilter.toLowerCase()));

    return (
        <div className={css.conctactList}>
            {filteredContacts.map(({ id, name, number }) => {
                return <Contact key={id} contactName={name} contactNumber={number} contactId={id} />;
            })}
        </div>
    );
};

export default ContactList;
