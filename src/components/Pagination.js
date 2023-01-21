// import styled from "styled-component";
import { styled } from "@mui/system";
const Start = styled("div")(({ theme }) => ({
  width: "87px",
  height: "71px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #bdbdbd",
  color: theme.palette.primary.main,
  borderTopLeftRadius: "8px",
  borderBottomLeftRadius: "8px",
  borderTopRightRadius: "0px",
  borderBottomRightRadius: "0px",
  fontWeight: "600",
  "&:hover": {
    // display: "none",
    backgroundColor: "#eee",
  },
}));

const End = styled(Start)({
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px",
  borderTopLeftRadius: "0px",
  borderBottomLeftRadius: "0px",
  ml: "0px",
  borderLeft: "0px",
});

export const paginationStyles = {
  ".MuiPaginationItem-page": {
    backgroundColor: "white",
    height: { xs: "72.5px", md: "73px" },
    width: "47px",
    fontWeight: "700",
    // width: "100%",
    borderRadius: "0px",
    // border: "1px solid #bdbdbd",
    borderTop: "1px solid #bdbdbd",
    borderRight: "1px solid #bdbdbd",
    borderBottom: "1px solid #bdbdbd",
    "&.Mui-selected": {
      backgroundColor: "primary.main",
      color: "white",
      // display: "none",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "primary.main",
      color: "white",
      // display: "none",
    },
    "&:hover": {
      // display: "none",
      backgroundColor: "#eee",
    },
  },
  "li:nth-of-type(4)": {
    // backgroundColor: "primary.main",
    borderRight: "0px",
  },

  ".MuiPagination-ul": {
    // gap: "0px",
    "& li": {
      // width: "80px",
    },
    // display:"none"
  },

  button: {
    padding: "0px",
    margin: "0px",
    fontSize: "16px",
  },
  "& .MuiButtonBase-root.MuiPaginationItem-root.Mui-disabled": {
    // display: "none",

    opacity: "1",
    // padding: "80px"s,
    ".disable": {
      color: "#bdbdbd",
      backgroundColor: "#F3F3F3",
    },
  },
};

export const First = () => {
  return <Start className="disable">First</Start>;
};

export const Next = () => {
  return <End className="disable">Next</End>;
};
