import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
    name: "",
    number: "",
};

const ContactsSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactsSchema}>
            <Form className={css.contactForm}>
                <label className={css.contactLabel}>
                    <span>Name</span>
                    <Field type="text" name="name"></Field>
                    <ErrorMessage name="name" component="span" className={css.contactError} />
                </label>

                <label className={css.contactLabel}>
                    <span>Number</span>
                    <Field type="text" name="number"></Field>
                    <ErrorMessage name="number" component="span" className={css.contactError} />
                </label>

                <button type="submit" className={css.contactBtn}>
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
