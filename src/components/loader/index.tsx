import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classes from "./styles.module.scss";

/**
 *
 * @param {number} count - The number of times the Skeleton component should be rendered.
 * @returns {JSX.Element} The loading skeleton component.
 */

export const Loader: React.FC<{ count: number }> = ({ count }): JSX.Element => {
  return (
    <div style={{ display: "flex" }}>
      <Skeleton
        style={{
          height: "100px",
          width: "200px",
          borderRadius: "10px",
          backgroundColor: "#ccc",
          color: "#000",
          fontSize: "16px",
          padding: "10px",
          margin: "10px",
        }}
        containerClassName={classes.loader}
        count={count}
      />
    </div>
  );
};
