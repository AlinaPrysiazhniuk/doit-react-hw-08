import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilteredContacts } from "../../redux/contacts/filtersSlice";
import { selectNameFilter } from "../../redux/contacts/selectors";
//
export default function SearchContact() {
  const searchBoxId = useId();
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectNameFilter);

  const valueChange = (e) => {
    dispatch(changeFilteredContacts(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchBoxId}>Find contacts by name</label>
      <input
        type="text"
        name="searchbox"
        id={searchBoxId}
        value={valueFilter}
        onChange={valueChange}
        className={css.input_filter}
      />
    </div>
  );
}
