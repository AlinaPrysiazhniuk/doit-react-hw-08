import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilteredContacts } from "../../redux/contacts/filtersSlice";
import { selectNameFilter } from "../../redux/contacts/selectors";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Input from "@mui/material/Input";
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
      <Input
        type="text"
        name="searchbox"
        id={searchBoxId}
        value={valueFilter}
        onChange={valueChange}
        // id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
      {/* <input className={css.input_filter} /> */}
    </div>
  );
}
