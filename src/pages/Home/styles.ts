import styled from "styled-components";
import { colors, functions, properties, resolutions, snippets } from "../../styles";
import stepping from "../../assets/jpg/stepping.jpg";


const Styles = styled.div`
${'' /* General-ish styles */}
  padding: 0;
  section {
    padding: 5rem;
    @media(max-width: ${resolutions.phone}) {
      padding: 2rem;
    }
  }
  .primary {
    color: ${colors.primary};
  }
  .secondary {
    color: ${colors.secondary};
  }
  .white {
    color: ${colors.white};
  }
  ${'' /* Player Quotes */}
  .quote {
    display: flex;
    flex-direction: column;
    max-width: 60%;
    @media(max-width: ${resolutions.phone}) {
      max-width: unset;
    }
    .message {
      padding: 5rem;
      font-size: 5rem;
      color: ${colors.grey1};
      position: relative;
      font-weight: 400;
      @media(max-width: ${resolutions.phone}) {
        padding: 2rem;
        font-size: 1.5rem;
      }
      &::before, &::after {
        position: absolute;
        color: inherit;
        font-size: 10rem;
        @media(max-width: ${resolutions.phone}) {
          font-size: 4rem;
          height: fit-content;
        }
      }
      &::before {
        content: "“";
        top: 0;
        left: 0;
        line-height: 10rem;
        @media(max-width: ${resolutions.phone}) {
          line-height: unset;
        }
      }
      &::after {
        content: "”";
        bottom: 0;
        right: 0;
        line-height: 0.5;
      }
    }
    .author {
      margin-left: 5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      @media(max-width: ${resolutions.phone}) {
        margin-left: 0;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }
      img {
        border: 5px solid ${colors.grey1};
        border-radius: 50%;
        width: 7rem;
        @media(max-width: ${resolutions.phone}) {
          width: 4rem;
          border-width: 3px;
        }
      }
      .name {
        color: ${colors.secondary};
        font-size: 2rem;
        @media(max-width: ${resolutions.phone}) {
          font-size: 1.5rem
        }
      }
      .role {
        font-size: 1.5rem;
        color: ${colors.grey1};
        @media(max-width: ${resolutions.phone}) {
          font-size: 1rem
        }
      }
    }
  }
  
  ${'' /* Banner */}
  #Banner {
    display: flex;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    @media(max-width: ${resolutions.phone}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
    #bold {
      @media(max-width: ${resolutions.phone}) {
        order: 2;
      }
      h1 {
        text-transform: uppercase;
        line-height: 150px;
        @media(max-width: ${resolutions.phone}) {
          line-height: 75px;
        }
        div {
          animation-fill-mode: forwards;
        }
        .x1, .x2 {
          display: flex;
          align-items: baseline;
          font-weight: 900;
          overflow: hidden;
          @media(max-width: ${resolutions.phone}) {
            justify-content: center;
          }
          div {
            transform: translateY(-100%);
            font-size: inherit;
            font-weight: inherit;
          }
        }
        .x1 {
          font-size: 8rem;
          @media(max-width: ${resolutions.phone}) {
            font-size: 4rem;
          }
          div {
            &:nth-of-type(2) {
              animation-delay: 500ms;
            }
          }
        }
        .x2 {
          font-size: 12.4rem;
          @media(max-width: ${resolutions.phone}) {
            font-size: 6.2rem;
          }
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
        @media(max-width: ${resolutions.phone}) {
          margin-top: 2rem;
          .button-row {
            justify-content: center;
          }
        }
        .bulls-summary {
          margin-bottom: 2rem;
          color: ${colors.grey1};
          font-size: 1.1rem;
          @media(max-width: ${resolutions.phone}) {
            text-align: center;
          }
        }
      }
    }
    #coverImg {
      width: 40rem;
      aspect-ratio: 1 / 1;
      animation-fill-mode: forwards;
      background-color: transparent;
      animation-delay: 1.5s;
      @media(max-width: ${resolutions.phone}) {
        order: 1;
        width: 15rem;
      }
    }
  }

  ${'' /* Stepping */}
  #Stepping {
    padding: 0;
    min-height: 50vh;
    height: 70rem;
    background-size: cover !important;
    background-position-x: right !important;
    background-position-y: center !important;
    width: 100%;
    background: linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 50%, rgba(18,18,18,0) 50%, rgba(18,18,18,1) 100%), url(${stepping});
    background-repeat: no-repeat;
    position: relative;
    @media(max-width: ${resolutions.phone}) {
      height: auto;
      padding: 0;
    }
    &::after {
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      background-color: ${functions.rgba(colors.dark, 0.3)};
      background-image: url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M2 0h2v12H2V0zm1 20c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM9 8c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-1 4h2v12H8V12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  }

  ${'' /* Massive Side Steps */}
  #MSS {
    min-height: 90rem;
    position: relative;
    display: flex;
    align-items: center;
    @media(max-width: ${resolutions.phone}) {
      min-height: unset;
      flex-direction: column;
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
      @media(max-width: ${resolutions.phone}) {
        width: auto;
        height: auto;
        transform: unset;
        position: unset;
        line-height: 50px;
        margin-bottom: 3rem;
      }
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
        text-align: right;
        @media(max-width: ${resolutions.phone}) {
          font-size: 9.5vw;
        }
      }
      .side-steps {
        font-size: 15rem;
        @media(max-width: ${resolutions.phone}) {
          font-size: 14vw;
        }
      }
    }
  }

  ${'' /* Unrelenting */}
  #Unrelenting {
    min-height: 80rem;
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
`;


export default Styles;