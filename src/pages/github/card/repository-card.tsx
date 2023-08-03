import { FC } from "react";
import { FaStar, FaCircle } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { RepositoryItem } from "../../../interfaces/github/repositories.interface";
import classes from "./styles.module.scss";

/**
 * @param item - The 'RepositoryItem' object that contains information about a GitHub repository.
 * 
 * @returns A React component that renders a card with statistics for a GitHub repository.
 */

type RepositoryCardProps = {
  item: RepositoryItem;
};

export const RepositoryCard: FC<RepositoryCardProps> = ({ item }) => {
  return (
    <a
      href={item.html_url}
      className={classes["repo_card__item"]}
      key={item?.id}
      target="_blank"
      rel="noreferrer"
    >
      <div className={classes["repo_statistics_container"]}>
        <span>
          <h3>{item?.full_name}</h3>
          <p>{item?.description}</p>
        </span>
        <div className={classes["repo_statistics"]}>
          <span>
            <FaStar />
            <p>{item?.stargazers_count}</p>
          </span>
          {item.language && (
            <span>
              <FaCircle />
              <p>{item.language}</p>
            </span>
          )}
          <span>
            <BsEye />
            <p> {item?.watchers_count}</p>
          </span>
          <span>
            <BiGitRepoForked />
            <p> {item.forks_count}</p>
          </span>
        </div>
      </div>
    </a>
  );
};
