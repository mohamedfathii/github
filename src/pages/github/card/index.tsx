import { FC } from "react";
import { RepositoryCard } from "./repository-card";
import { UserCard } from "./user-card";
import { RepositoryItem } from "../../../interfaces/github/repositories.interface";
import { UserItem } from "../../../interfaces/github/users.interface";

/**
 *  @param {object} props - The component props.
 * @param {string} props.type - The type of card to render. Can be either "users" or "repositories".
 * @param {object} props.item - The data to be displayed in the card. Should be of type 'UserItem' or 'RepositoryItem'.
 * @returns {JSX.Element} - The rendered card component.
 */
export type CardProps = {
  type: "users" | "repositories";
  item: UserItem | RepositoryItem;
};

export const Card: FC<CardProps> = ({ type, item }) => {
  const cards = {
    users: <UserCard item={item as UserItem} />,
    repositories: <RepositoryCard item={item as RepositoryItem} />,
  };
  return cards[type];
};
