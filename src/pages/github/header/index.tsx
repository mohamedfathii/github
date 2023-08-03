import {
    Root as AvatarContainer,
    Image as AvatarImage,
  } from "@radix-ui/react-avatar";
  import githubIcon from "../../../assets/github-mark.svg";
  import classes from "./styles.module.scss";
  
  /**
   * Renders a header section with an avatar image and some text content.
   * 
   * @returns The rendered header section.
   */
  export const Header = () => {
    return (
      <section className={classes.header}>
        <AvatarContainer>
          <AvatarImage src={githubIcon} />
        </AvatarContainer>
        <div className={classes.content}>
          <h1>GitHub Searcher</h1>
          <p>Search users or repositories below</p>
        </div>
      </section>
    );
  };
  