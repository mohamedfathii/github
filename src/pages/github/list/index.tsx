import { Fragment, useEffect, useState } from "react";
import { Filter } from "../filter";
import { Loader } from "../../../components/loader";
import { getRepositories, getUsers } from "../../../api";
import { UserItem } from "../../../interfaces/github/users.interface";
import {
  RepositoryItem,
} from "../../../interfaces/github/repositories.interface";
import { Card } from "../card";
import classes from "../card/styles.module.scss";
import { updateStoreData } from "./list-store";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

/**
 * A React component that fetches and displays data from the GitHub API based on user input.
 * It allows the user to search for either users or repositories and displays the results in a card format.
 * The main objective of the function is to provide a user-friendly interface for searching and displaying GitHub data.
 */
export const List = () => {
  const [data, setDate] = useState<any>([]);
  const dispatch = useDispatch();
  const cachedResult = useSelector((state: any) => state.githubSlice);

  const [filter, setFilter] = useState<{
    search: string;
    option: "users" | "repositories" | null;
  }>({
    search: "",
    option: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Fetches data from the GitHub API based on the filter settings.
   * Updates the state variables with the fetched data.
   */

  const fetchData = async () => {
    try {
      setIsLoading(true);
      let res: any;
      if (filter?.option === "users") {
        res = await getUsers(filter.search);
        setDate(res?.data);
        dispatch(
          updateStoreData({
            searchQuery: filter.search,
            filterOption: filter.option,
            data: res?.data,
          }),
        );
      } else if (filter?.option === "repositories") {
        res = await getRepositories(filter.search);
        setDate(res?.data);
        dispatch(
          updateStoreData({
            searchQuery: filter.search,
            filterOption: filter.option,
            data: res?.data,
          }),
        );
      } else {
        setDate([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (filter?.search?.length >= 3) {
      if (
        cachedResult.searchQuery === filter?.search &&
        cachedResult.filterOption === filter.option &&
        !_.isEmpty(cachedResult.data)
      ) {
        setDate(cachedResult.data);
      } else {
        fetchData();
      }
    }
  }, [filter]);

  /**
   * Updates the filter state variable based on user input.
   * @param filterData - The filter data containing the search query and option.
   */
  const onDataReceived = (filterData: any) => {
    setFilter(filterData);
  };

  /**
   * Renders the fetched data in a card format.
   * Displays a loader while fetching data, a message to start typing if no search query is entered,
   * and the fetched data in card format if available.
   */
  const RenderResult = () => {
    if (!isLoading && filter.search) {
      return (
        <section className={classes["card"]}>
          {data?.items?.map(
            (item: UserItem | RepositoryItem) =>
              filter.option && <Card type={filter.option} item={item} key={item?.id} />,
          )}
        </section>
      );
    } else if (isLoading) {
      return <Loader count={40} />;
    } else {
      return <p>start typing to fetch Data</p>;
    }
  };

  return (
    <Fragment>
      <Filter filterData={onDataReceived} />
      {RenderResult()}
    </Fragment>
  );
};
