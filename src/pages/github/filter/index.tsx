import { useCallback, useEffect, useReducer } from "react";
import classes from "./styles.module.scss";
import { Select, Option } from "../../../components/select";
import { Input } from "../../../components/Input";
import { Header } from "../header";
import { debounce } from "lodash";

/**
 * Filter Component
 * 
 * This component provides a filter functionality for searching users or repositories on GitHub.
 * It includes an input field for typing the search query and a select dropdown for selecting the search option.
 * The component uses useReducer to manage state changes and debounce function to debounce the search query.
 * The filterData prop is called with the selected option and search query as arguments.
 * 
 * @param {Object} filterData - The function to be called when filter data is updated.
 * 
 * @returns {JSX.Element} The rendered filter component.
 */

const reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
        animatedClass: action.payload
          ? "align-items-start"
          : "align-items-center",
      };
    case "SELECTED_OPTION":
      return {
        ...state,
        selectedOption: action.payload,
        animatedClass: "align-items-start",
      };
    default:
      return state;
  }
};
const options: Option[] = [
  { value: "users", label: "Users" },
  { value: "repositories", label: "Repositories" },
];

export const Filter = ({ filterData }: any) => {
  const [state, dispatch] = useReducer(reducer, {
    searchQuery: "",
    selectedOption: options[0],
    animatedClass: "align-items-center",
  });

  const onValueChangeHandler = (value: string) => {
    const option = options.find((o) => o.value === value);
    dispatch({ type: "SELECTED_OPTION", payload: option });
  };

  const handleSearchOnChange = (event: any) => {
    debounceSearchQuery(event);
  };

  const debounceSearchQuery = useCallback(
    debounce((event: any) => {
      dispatch({ type: "SEARCH_QUERY", payload: event.target.value });
    }, 800),
    [],
  );

  useEffect(() => {
    filterData({
      option: state.selectedOption.value,
      search: state.searchQuery,
    });
  }, [state.searchQuery, state.selectedOption]);

  return (
    <section className={`${classes[state.animatedClass]} ${classes.container}`}>
      <div>
        <Header />
        <div className={classes.controls}>
          <Input
            type="string"
            placeholder="start typing to search ..."
            onChange={handleSearchOnChange}
          />

          <Select
            options={options}
            defaultValue={state.selectedOption.value}
            onValueChange={onValueChangeHandler}
          ></Select>
        </div>
      </div>
    </section>
  );
};
