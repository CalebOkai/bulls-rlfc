import styled from "styled-components";
import { colors, properties, snippets } from "../../styles";


interface Props {
  color?: string;
}

const Styles = styled.div`
  .root-header {
    display: flex;
    border-bottom: 1px solid ${colors.grey3};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.white};
    padding: 1rem 2rem;
    background-color: ${(props: Props) => props.color};
    border-color: ${(props: Props) => props.color === colors.white ? colors.grey3 : props.color};
    position: relative;
    height: ${properties.navHeight};
    &>* {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .backBtn, #menuBtn {
      img {
        height: 1rem;
      }
    }
    #pageTitle {
      gap: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      ${snippets.absoluteCenter}
      img {
        &:nth-of-type(1) {
          height: 1.5rem;
        }
        &:nth-of-type(2) {
          height: 1rem;
        }
      }
      h1 {
        color: ${colors.primary};
        font-size: 1rem;
      }
    }
  }
  
  .root-content {
    background-color: ${colors.white};
  }
`;

export default Styles;