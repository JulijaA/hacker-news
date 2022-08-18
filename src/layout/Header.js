import classes from "./Header.module.css";
import SideForm from "../components/SearchForm";
const Header = () => {
  return (
    <div className={classes.header}>
      <img
        className={classes.logo}
        src={require("../assets/logo-hn-search-a822432b.webp")}
        alt="hacker news logo"
      />
      <div className={classes.title}>
        <p className={classes.search}>
          Search <br />
          Hacker News
        </p>
      </div>
      <SideForm />
    </div>
  );
};

export default Header;
