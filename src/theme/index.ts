import { createTheme } from "@mui/material/styles";

import type {} from "@mui/lab/themeAugmentation";
import { checkedIcon, uncheckedIcon } from "./components/Checkbox";
import { BpCheckedIcon, BpIcon } from "./components/RadioButton";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    link: true;
  }
}

declare module "@mui/material/Checkbox" {
  interface CheckboxPropsSizeOverrides {
    large: true;
  }
}

export const colors = {
  blue: {
    primary: "#5D50FF",
    secondary: "#5447E6",
    tertiary: "#4137B3",
    forth: "#5447E64D",
    fifth: "#471899DE",
  },
  selago: {
    primary: "#DDE1FA",
    secondary: "#B1B4C8",
    tertiary: "#8F93B0",
  },
  text: {
    primary: "#625D7E",
    secondary: "#181443",
  },
  accent: {
    primary: "#3BE1EF",
    secondary: "#35CBD7",
    tertiary: "#2FB4BF",
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#FAF9FC",
    tertiary: "#EDF3FF",
    forth: "#FAFAFA",
    fifth: "#5447E60A",
  },
  alert: {
    danger: "#E91212",
    warning: "#ECA909",
    okay: "#9CC159",
    success: "#39C47D",
    disabled: "#D6D7E2",
  },

  white: "#FFFFFF",
  black: "#000000",
};

const checkBoxLargeStyle = {
  width: 32,
  height: 32,
  minWidth: 32,
  "& input": {
    width: 32,
    height: 32,
  },
  "& svg": {
    fontSize: 24,
  },
};

export const monserratFont = '"Montserrat", Arial, sans-serif';

export const proxima = "Proxima Nova";

const paginationStyle = {
  fontFamily: monserratFont,
  fontSize: "12px",
  color: colors.text.primary,
};

export const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1200,
      md: 900,
      sm: 600,
      xl: 1536,
      xs: 0,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: colors.blue.fifth,
        },
        containedSecondary: {
          color: colors.white,
        },
        root: {
          cursor: "pointer",
          "&:hover": {
            boxShadow: "none",
          },
          "&.MuiLoadingButton-loading": {
            "& > .MuiLoadingButton-loadingIndicator": {
              marginRight: "10px",
              position: "re",
            },
          },
          borderRadius: "8px",
          boxShadow: "none",
          fontFamily: monserratFont,
          textTransform: "initial",
          "&.MuiButton-outlinedPrimary.Mui-disabled": {
            color: `${colors.alert.disabled} !important`,
          },
        },
        sizeLarge: {
          height: "56px",
          padding: "16px 24px",
        },
        sizeMedium: {
          fontSize: "14px",
          height: "40px",
          padding: "8px 16px",
        },
        sizeSmall: {
          padding: "0 32px",
          fontSize: "14px !important",
          height: "32px",
        },
      },
      variants: [
        {
          props: {
            variant: "link",
          },
          style: {
            background: "none",
            color: colors.selago.tertiary,
          },
        },
      ],
    },
    /*MuiCalendarPicker: {
      styleOverrides: {
        root: {
          '& > div:first-of-type > div:first-of-type': {
            color: colors.text.primary,
            fontFamily: `${monserratFont} !important`,
            fontSize: '16px',
            fontWeight: 600,
          },
          '& > div:nth-of-type(2) > div:first-of-type > div:first-of-type >span':
            {
              color: colors.selago.secondary,
              fontSize: '14px',
              fontWeight: 600,
            },
          background: colors.background.secondary,
          borderRadius: '8px',
        },
      },
    },*/
    MuiAutocomplete: {
      styleOverrides: {
        popupIndicator: {
          color: colors.selago.secondary,

          margin: "auto",
          border: "none",
        },
        inputRoot: {
          height: "auto !important",
          minHeight: "44px",
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        checkedIcon: BpCheckedIcon,
        disableRipple: true,
        icon: BpIcon,
      },
      styleOverrides: {
        root: {
          ".bpIcon": {
            borderRadius: "50%",
            width: 18,
            height: 18,
            background: colors.alert.disabled,
          },
          ".bpCheckedIcon": {
            backgroundColor: colors.blue.primary,
            "&:before": {
              display: "block",
              width: 18,
              height: 18,
              backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
              content: '""',
            },
            "input:hover ~ &": {
              backgroundColor: "#106ba3",
            },
          },
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        checkedIcon,
        disableRipple: true,
        icon: uncheckedIcon,
      },
      styleOverrides: {
        colorPrimary: {
          "& svg": {
            color: colors.blue.primary,
          },
          "&.Mui-checked": {
            backgroundColor: colors.blue.primary,
          },
        },
        root: {
          ".checkbox-container": {
            alignItems: "center",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            width: "100%",
            "& svg": {
              color: colors.white,
            },
          },
          "@media (min-width:1025px)": {
            "&:hover": {
              backgroundColor: colors.background.secondary,
              borderWidth: 2,
            },
          },
          "& svg": {
            fontSize: 42.7,
          },
          "&.Mui-checked": {
            border: "none",
          },
          "&.Mui-disabled": {
            backgroundColor: `${colors.alert.disabled} !important`,
            border: "none !important",
          },
          backgroundColor: colors.background.secondary,
          border: `1px solid ${colors.selago.primary}`,
          borderRadius: "4px",
          fontFamily: monserratFont,
          fontSize: "inherit",
          marginRight: "8px",
          padding: 0,
        },
      },
      variants: [
        {
          props: {
            size: "small",
          },
          style: {
            "& input": {
              height: 16,
              width: 16,
            },
            "& svg": {
              fontSize: 12,
            },
            height: 16,
            width: 16,
            minWidth: 16,
          },
        },
        {
          props: {
            size: "medium",
          },
          style: {
            "@media (max-width:767px)": checkBoxLargeStyle,
            "& input": {
              height: 18,
              width: 18,
            },
            "& svg": {
              fontSize: 20,
            },
            borderRadius: 3,
            borderColor: colors.black,
            height: 18,
            width: 18,
            minWidth: 18,
          },
        },
        {
          props: {
            size: "large",
          },
          style: checkBoxLargeStyle,
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: "1rem",
          fontFamily: monserratFont,
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {},
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          borderRadius: "8px",
          boxShadow: "none !important",
          padding: 0,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: colors.selago.secondary,
          fontSize: "inherit",
          marginRight: "8px",
          minWidth: "16px !important",
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        disabled: false,
        loadingPosition: "start",
      },
      variants: [
        {
          props: {
            variant: "contained",
          },
          style: {
            "&:hover": {
              background: `${colors.blue.tertiary} !important`,
            },
            background: `${colors.blue.primary} !important`,
            color: `${colors.white} !important`,
          },
        },
        {
          props: {
            variant: "outlined",
          },
          style: {
            background: `${colors.white} !important`,
            border: `1px solid ${colors.blue.primary} !important`,
            color: `${colors.blue.primary} !important`,
          },
        },
      ],
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:not(:last-child):after": {
            backgroundColor: colors.selago.primary,
            content: '""',
            height: "1px",
            position: "absolute",
            top: "51px",
            width: "calc(100% - 32px)",
          },
          color: colors.text.primary,
          fontFamily: monserratFont,
          fontSize: "14px",
          fontWeight: 500,
          padding: "16px",
          position: "relative",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& > .MuiSelect-icon": {
            color: colors.selago.secondary,
            fontSize: "24px",
            right: "16px",
          },
          "&:not(.MuiInputBase-multiline)": {
            height: "44px",
          },
          borderColor: colors.selago.primary,
          borderRadius: "8px",
          fontFamily: monserratFont,
          fontSize: "14px",
          fontWeight: 500,
          padding: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 8px 0px rgba(24, 20, 67, 0.24) !important",
        },
      },
    },
    /*MuiPickersDay: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: colors.selago.primary,
            lineHeight: '0px',
          },
          '&.Mui-selected': {
            backgroundColor: `${colors.blue.primary} !important`,
            borderRadius: '8px',
            lineHeight: '0px',
          },
          '&.MuiPickersDay-today': {
            borderRadius: '8px',
            lineHeight: '0px',
          },
          background: colors.background.secondary,
          fontFamily: `${monserratFont} !important`,
          fontSize: '14px',
          fontWeight: 600,
        },
      },
    },*/
    MuiSelect: {
      defaultProps: {},
    },
    MuiSwitch: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "& .Mui-checked": {
            "& .MuiSwitch-thumb": {
              background: colors.white,
            },
          },
          "& .Mui-checked+.MuiSwitch-track": {
            backgroundColor: `${colors.alert.success} !important`,
            opacity: "1 !important",
          },
          "& .MuiSwitch-switchBase": {
            padding: 0,
          },
          "& .MuiSwitch-track": {
            backgroundColor: colors.alert.disabled,
            borderRadius: 50,
          },
          alignItems: "center",
          padding: 0,
          width: "initial",
        },
        sizeMedium: {
          "& .Mui-checked": {
            left: "-1px !important",
          },
          "& .MuiSwitch-switchBase": {
            left: 4,
            top: 9,
          },
          "& .MuiSwitch-thumb": {
            height: 20,
            width: 20,
          },
          "& .MuiSwitch-track": {
            height: 26,
            minWidth: 42,
            width: 42,
          },
        },
        sizeSmall: {},
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderColor: "transparent",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          width: "100%",
          "& > tr": {
            "& > td, & > th": {
              "& a": {
                "&:visited, &:hover, &:active": {
                  color: `${colors.blue.tertiary} !important`,
                },
                "&:visited:hover, &:hover, &:active": {
                  textDecoration: "underline",
                },
                color: `${colors.blue.tertiary} !important`,
                fontWeight: 600,
                textDecoration: "none",
              },
              borderBottom: `1px solid ${colors.selago.primary}`,
              color: colors.text.primary,
              fontFamily: monserratFont,
              fontSize: "12px",
              fontWeight: 600,
              padding: "23px 24px",
            },
            "&:hover": {
              "& > .menuCell": {
                "& > button": {
                  "& > svg": {
                    fill: colors.text.primary,
                  },
                },
              },
              "& > td, & > th": {
                color: colors.text.secondary,
              },

              backgroundColor: colors.background.tertiary,
            },
            "&:nth-of-type(odd)": {
              "&:hover": {
                backgroundColor: colors.background.tertiary,
              },
            },
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& > tr": {
            "& > th": {
              color: colors.black,
              fontFamily: monserratFont,
              fontSize: "14px",
              fontWeight: "600",
            },

            background: colors.background.fifth,
            borderBottom: `1px solid ${colors.selago.primary}`,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          lineHeight: 1.6,
          padding: "18px 24px",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        popper: {
          fontFamily: monserratFont,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.calendarInput": {
            "& .Mui-focused > fieldset > legend >span": {
              display: "none",
            },
            "& label.Mui-focused": {
              display: "none",
            },
            "&>label": {
              top: "-7px",
              fontFamily: monserratFont,
              fontSize: "14px",
              fontWeight: 500,
              color: colors.selago.secondary,
            },
            "&>div": {
              backgroundColor: colors.background.secondary,
              color: colors.text.primary,
              "&>div>button": {
                color: colors.selago.secondary,
              },
            },
            "& .MuiInputAdornment-root button svg": {
              color: colors.selago.secondary,
            },
            "& .MuiOutlinedInput-root": {
              "@media (min-width:1025px)": {
                pointerEvents: "none",
                "& .MuiInputAdornment-root": {
                  pointerEvents: "all",
                },
              },
            },
          },
          "&.calendarInputWithoutDate": {
            "&>label": {
              color: colors.selago.secondary,
            },
            "& .Mui-error fieldset": {
              borderColor: `${colors.selago.secondary} !important`,
            },
          },
          "&.calendarInputWithDate": {
            "& >div >fieldset": {
              top: "0px",
            },
            "& >div >fieldset >legend": {
              display: "none",
            },
            "& >label": {
              display: "none",
            },
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        displayedRows: paginationStyle,
        input: paginationStyle,
        selectLabel: paginationStyle,
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 20,
          fontFamily: monserratFont,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        fontSize: "inherit",
      },
      styleOverrides: {
        root: {
          color: colors.blue.tertiary,
          cursor: "pointer",
          underline: "hover",
          fontWeight: 600,
          textDecoration: "none",
          "&:visited": {
            underline: "none",
            color: colors.blue.tertiary,
          },
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
      variants: [
        {
          props: { variant: "inherit" },
          style: {
            fontSize: "inherit",
          },
        },
      ],
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          fontFamily: `${monserratFont} !important`,
          "& .MuiStepConnector-root": {
            padding: "0px 8px",
            "& .MuiStepConnector-line": {
              borderColor: colors.selago.tertiary,
            },
          },
          "& .MuiStep-horizontal": {
            "& .MuiStepLabel-labelContainer .Mui-active": {
              fontWeight: 700,
              color: colors.text.primary,
              fontSize: "12px",
            },
            "& .MuiSvgIcon-root": {
              color: colors.blue.primary,
            },
          },
          "& .MuiStepLabel-label": {
            fontFamily: monserratFont,
          },
          "& .MuiStepIcon-text": {
            fontFamily: monserratFont,
          },
          "& .Mui-disabled": {
            "& .MuiStepLabel-labelContainer >span": {
              color: colors.selago.tertiary,
              fontSize: "12px",
            },
            "& .MuiSvgIcon-root": {
              color: colors.selago.tertiary,
            },
          },
          "& .Mui-completed": {
            "& .MuiSvgIcon-root": {
              color: colors.alert.success,
            },
            "& .MuiStepLabel-labelContainer": {
              "& .MuiStepLabel-label": {
                color: colors.selago.tertiary,
                fontSize: "12px",
              },
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: monserratFont,
          color: colors.blue.secondary,
          fontSize: "15px",
          textTransform: "unset",
          minWidth: "240px",
          "&.Mui-selected": {
            backgroundColor: colors.blue.secondary,
            color: colors.white,
            borderRadius: "8px 8px 0px 0px",
          },
          "@media (max-width:767px)": {
            minWidth: "unset",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      dark: colors.blue.tertiary,
      light: colors.blue.primary,
      main: colors.blue.secondary,
    },
    secondary: {
      dark: colors.accent.tertiary,
      light: colors.accent.primary,
      main: colors.accent.secondary,
    },
    action: {
      disabledBackground: colors.alert.disabled,
      disabled: colors.white,
    },
  },
  spacing: [0, 4, 5, 7, 8, 16, 32, 64],
  typography: {
    htmlFontSize: 10,
  },
});
