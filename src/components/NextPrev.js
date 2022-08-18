import React from "react";
import { useGlobalContext } from "../hooks/context";
import classes from "./NextPrev.module.css";

const NextPrev = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <div className={classes.container}>
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("inc")}>
        next
      </button>
    </div>
  );
};

export default NextPrev;
