import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

const Contact = ({ contactName, contactNumber, contactId }) => {
    const dispatch = useDispatch();

    return (
        <div className={css.contactItem}>
            <div className={css.contactInfo}>
                <div className={css.contactInfoContainer}>
                    <IoPersonSharp />
                    <span className={css.contactInfoText}>{contactName}</span>
                </div>

                <div className={css.contactInfoContainer}>
                    <FaPhone />
                    <span className={css.contactInfoText}>{contactNumber}</span>
                </div>
            </div>

            <button type="button" className={css.contactBtn} onClick={() => dispatch(deleteContact(contactId))}>
                Delete
            </button>
        </div>
    );
};

export default Contact;
