import styled from "styled-components";
import { colors, functions, properties, snippets } from "../../styles";


const Styles = styled.div`
  .root-header {
    display: flex;
    justify-content: center;
    align-items: center;
    #logo {
      img {
        height: 7rem;
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
        width: 40rem;
        aspect-ratio: 1 / 1;
        clip-path: ${properties.clipPath};
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

    ${'' /* Massive Side Steps */}
    #MSS {
      min-height: 90rem;
      padding: 5rem;
      position: relative;
      display: flex;
      align-items: center;
      h2 {
        font-size: 5rem;
        color: ${colors.grey1};
        font-family: inherit;
        max-width: 60%;
      }
      #textFlipped {
        transform: rotate(90deg);
        position: absolute;
        top: 200px;
        right: 0;
        height: 100px;
        width: 200px;
        white-space: nowrap;
        line-height: 170px;
        .massive, .side-steps {
          font-weight: 900;
          color: ${colors.grey4};
          span {
            font-weight: inherit;
            font-size: inherit;
            color: ${colors.grey1};
          }
        }
        .massive {
          font-size: 12rem;
        }
        .side-steps {
          font-size: 15rem;
        }
      }
    }

    ${'' /* Unrelenting */}
    #Unrelenting {
      min-height: 80rem;
      padding: 5rem;
      position: relative;
      .list-images {
        li {
          display: block;
          position: absolute;
          aspect-ratio: 1 / 1;
          width: 30rem;
          clip-path: ${properties.clipPath};
          overflow: visible;
          &::before {
            content: "";
            ${snippets.absoluteCenter};
            height: 101%;
            width: 105%;
            box-shadow: inset 0px 0px 121px 6px rgba(16,2,26,1);
          }
        }
      }
      #textFlipped {
        transform: rotate(90deg);
        position: absolute;
        top: 200px;
        right: 0;
        height: 100px;
        width: 200px;
        white-space: nowrap;
        line-height: 200px;
        .x1, .x2 {
          font-weight: 900;
          color: ${colors.grey4};
        }
        .x1 {
          font-size: 15rem;
        }
        .x2 {
          font-size: 20rem;
        }
      }
    }
  }

`;


export default Styles;