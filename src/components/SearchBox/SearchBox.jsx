import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector((state) => state.filters.filters.name);

  const handleSearchValue = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <>
      <h2 className={css.header}>Find contacts by name</h2>

      <input
        className={css.formfield}
        type="text"
        value={selectNameFilter}
        onChange={handleSearchValue}
      />
    </>
  );
};

export default SearchBox;
