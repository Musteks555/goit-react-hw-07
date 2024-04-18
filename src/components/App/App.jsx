import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { selectError, selectLoading } from "../../redux/selectors";
import { fetchContacts } from "../../redux/contactsOps";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

function App() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            {loading && !error && <b>Request in progress...</b>}
            <SearchBox />
            <ContactList />
        </div>
    );
}

export default App;
