import styled from "styled-components";
import { colors, functions } from "../../styles";


const Styles = styled.div`
  .root-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    #logo {
      img {
        height: 5rem;
      }
    }
    .links {
      display: flex;
      align-items: center;
      gap: 1rem;
      .nav-link {
        color: ${colors.white};
      }
    }
  }

  .root-content {
    .primary {
      color: ${colors.primary};
    }
    .secondary {
      color: ${colors.secondary};
    }
    .white {
      color: ${colors.white};
    }
    ${'' /* Banner */}
    #Banner {
      padding: 5rem 0;
      display: flex;
      gap: 2rem;
      justify-content: space-between;
      align-items: center;

      #bold {
        h1 {
          text-transform: uppercase;
          line-height: 150px;
          div {
            animation-fill-mode: forwards;
          }
          .x1, .x2 {
            display: flex;
            align-items: baseline;
            font-weight: 900;
            overflow: hidden;
            div {
              transform: translateY(-100%);
              font-size: inherit;
              font-weight: inherit;
            }
          }
          .x1 {
            font-size: 8rem;
            div {
              &:nth-of-type(2) {
                animation-delay: 500ms;
              }
            }
          }
          .x2 {
            font-size: 12.6rem;
            div {
              display: flex;
              align-items: baseline;
              animation-delay: 1s;
            }
          }
        }
        .call-to-action {
          margin-top: 3rem;
          animation-delay: 1s;
          .bulls-summary {
            margin-bottom: 2rem;
            color: ${colors.grey1};
            font-size: 1.1rem;
          }
        }
      }

      
      #coverImg {
        height: 40rem;
        width: 40rem;
        clip-path: polygon(20% 0,100% 0,100% 80%,80% 100%,0 100%,0 20%);
        position: relative;
        &::before, &::after {
          content: "";
          position: absolute;
          width: 5rem;
          height: 5rem;
          z-index: 1;
        }
        &::before {
          top: 0;
          right: 0;
          border-top: 2px solid ${colors.white};
          border-right: 2px solid ${colors.white};
        }
        &::after {
          bottom: 0;
          left: 0;
          border-bottom: 2px solid ${colors.white};
          border-left: 2px solid ${colors.white};

        }
        .overlay {
          position: relative;
          height: 100%;
          width: 100%;
          &::after {
            content: "";
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            position: absolute;
            background-color: ${functions.rgba(colors.black, 0.6)};
            background-image: url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.16'%3E%3Cpath d='M2 0h2v12H2V0zm1 20c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM9 8c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-1 4h2v12H8V12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
        }
      }
    }
  }

`;


export default Styles;