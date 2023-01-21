import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Main } from "./components/Main";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import FeatureSection from "./sections/FeatureSection";
import ListSection from "./sections/ListSection";
import CtaSection from "./sections/CtaSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
/*TOdo



1. map embed +
2. smooth scroll +
3. validation +
4. onhover on property card+
5. maxwidth 1440px+
6. Section code, clean up, push!!! 
*/

export const PrimaryBtn = styled("button")(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    border: "none",
    padding: { xs: "16px 24px", md: "20px 32px" },
    borderRadius: "13px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "18px",
  })
);
function App(props) {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const [Navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    setScrollY(window.scrollY);

    if (window.scrollY >= 450) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return (
    <Main sx={{ minHeight: "300vh" }}>
      <Header Navbar={Navbar} />
      <Hero />
      <FeatureSection scrollY={scrollY} />
      <ListSection scrollY={scrollY} />
      <CtaSection />
      <TestimonialSection scrollY={scrollY} />
      <FooterSection />
    </Main>
  );
}

export default App;
