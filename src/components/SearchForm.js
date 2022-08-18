import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SearchForm.module.css";
import { useGlobalContext } from "../hooks/context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  return (
    <form className={classes.search} onSubmit={(e) => e.preventDefault()}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.icon} />
      <input
        type="text"
        placeholder="search posts"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className={classes.input}
      />
    </form>
  );
};

export default SearchForm;
