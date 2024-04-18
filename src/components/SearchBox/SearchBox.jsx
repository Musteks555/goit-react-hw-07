import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
    const dispatch = useDispatch();

    const selectNameFilter = useSelector((state) => state.filters.name);

    return (
        <>
            <label className={css.contactsLabel}>
                <span>Find contacts by name</span>
                <input type="text" value={selectNameFilter} onChange={(event) => dispatch(changeFilter(event.target.value))} />
            </label>
        </>
    );
};

export default SearchBox;
