const hexToRgb = (hex: string) => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}
export const functions = {
  rgba: (hex: string, alpha: number) => {
    const color = hexToRgb(hex);
    if (color)
      return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  },
  randomColor: () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  colorLuminance: (hex: any, lum: number) => {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }
    return rgb;
  }
}


export const colors = {
  // Accents
  primary: "#61496E",
  secondary: "#c7a900",
  tertiary: "#000",
  white: "#fff",
  black: "#000",
  // Shades of Grey
  grey1: "#7f7f7f",
  grey2: "#adadad",
  grey3: "#E0E0E0",
  grey4: "#F6F6F6",
  grey5: "#3e3e3e",
  grey6: "#434343",
  grey7: "#EFEFEF",
  grey8: "#F9F9F9",
  grey9: "#E3E3E3",
  grey10: "#1f1f1f",
  grey11: "#dfdfdf",
  // Events
  error: "#c70000",
  warning: "#E5C209",
  success: "#4cab5c",
  linkHover: "c7a900",
  // Misc
  keypad: "#E2EBF5",
  blueBlack: "#0A2F45",
  header: "#F1F5FA",
  facebook: "#4267b2",
  twitter: "#38A1F3",
  linkedin: "#4875B4",
  googleplus: "#C63D2D",
  instagram: "linear-gradient(341deg, #e1306c 0%,#c13584 59%,#833ab4 79%,#5851d8 90%,#405de6 100%)",
}

export const resolutions = {
  fullHD: "1919px",
  tabletLarge: "991px",
  tablet: "767px",
  phone: "574px",
  // Content Restriction
  maxContentWidth: "608px",
}

export const properties = {
  // Dimensions, Paddings, and Margins
  maxPageWidth: "960px",
  maxFieldWidth: "27rem",
  navHeight: "65px",

  // Effects
  boxShadow: `0px 2px 10px rgba(0, 0, 0, 0.1)`,
  transition: "150ms linear",
  borderRadius: "30px",
  smallBorderRadius: "10px",
  highestZIndex: "10001",
}

export const snippets = {
  // Position Absolute Centering
  absoluteCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  // Display Flex Centering
  flexCenter: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  scrollBar: `
    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${functions.rgba(colors.grey2, 0.5)};
      border-radius: 10px;
    }
  `
}