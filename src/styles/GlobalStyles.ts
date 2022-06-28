import { createGlobalStyle } from "styled-components";
import { properties, colors, functions, snippets } from ".";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
    box-sizing: border-box;
    font-size: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  html, body {
    min-height: 100vh;
  }
  body {
    max-width: 100%;
    position: relative;
    overflow-x: hidden;
    background-color: ${colors.dark};
  }
  body, h1, h2, h3, h4, h5, h6, p, figure {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
  }
  ol, ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  input, select, textarea, button {
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    &:focus, &:hover {
      outline: none;
    }
    &::placeholder {
      color: ${colors.grey2};
      font-style: italic;
      font-weight: 300;
    }
  }
  button {
    cursor: pointer;
    user-select: none;
  }
  figure {
    text-align: center;
    figcaption {
      text-align: left;
    }
  }
  img {
    object-position: center;
    object-fit: contain;
    vertical-align: middle;
    user-select: none;
  }
  a {
    outline: none;
    text-decoration: none;
    &:hover{
      text-decoration: none;
    }
  }



  .root-page {
    padding: 3rem 5rem;
    max-width: ${properties.maxContentWidth};
    width: 100%;
    margin: 0 auto;
  }



  .button {
    background-color: ${colors.secondary};
    color: ${colors.black};
    padding: 0.3rem 1rem;
    border: 2px solid ${colors.secondary};
    border-radius: ${properties.borderRadius};
    transition: all ${properties.transition};
    &.transparent-white {
      background-color: transparent;
      border-color: ${colors.white};
      color: ${colors.white};
      &:hover, &:focus {
        background-color: ${colors.white};
        color: ${colors.black};
      }
    }
  }

  .button-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default GlobalStyles;