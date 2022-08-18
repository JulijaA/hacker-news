import React from "react";
import classes from "./Stories.module.css";
import { useGlobalContext } from "../hooks/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import TimeAgo from "timeago-react";

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading) {
    return <div className={classes.loading}></div>;
  }
  return (
    <section className={classes.stories}>
      {hits.map((story) => {
        const {
          objectID,
          title,
          created_at,
          num_comments,
          url,
          points,
          author,
        } = story;
        return (
          <article key={objectID} className={classes.story}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.info}>
              <FontAwesomeIcon
                className={classes.fontAwesomeIcons}
                icon={faHeart}
              />
              {points} points{" "}
              <span>
                <FontAwesomeIcon
                  className={classes.fontAwesomeIcons}
                  icon={faUser}
                />
                {author}{" "}
              </span>{" "}
              <span>
                <FontAwesomeIcon
                  className={classes.fontAwesomeIcons}
                  icon="fa-solid fa-clock"
                />
                <TimeAgo datetime={created_at} />
              </span>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://news.ycombinator.com/item?id=${objectID}`}
                className={classes.comments}
              >
                <FontAwesomeIcon
                  className={classes.fontAwesomeIcons}
                  icon="fa-solid fa-message"
                />
                {num_comments}
              </a>
            </p>
            <a
              href={url}
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              read more
            </a>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
