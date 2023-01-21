import { Box } from "@mui/material";
import { ReactComponent as PlayIcon } from "../assets/play.svg";
import PauseIcon from "@mui/icons-material/Pause";

export const Play = ({ play, setPlay, video, show, setShowBtn }) => {
  return (
    <Box
      sx={{
        width: "92.6px",
        height: "92.6px",
        backgroundColor: "primary.main",
        borderRadius: "73.6px",
        display: show ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        position: "absolute",
        top: "46%",
        left: { xs: "38%", sm: "43%", md: "41%" },
        opacity: play && "0",
        transitions: "1s",
        animation: play && "mymove",
        animationDuration: "3s",
        "&:hover": {
          opacity: "1",

          animation: "none",
        },
        "@keyframes mymove": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      }}
      onMouseEnter={() => {
        if (play) {
          setShowBtn(true);
        }
      }}
      onClick={() => {
        setPlay(!play);
        if (!play) {
          video.play();
        } else {
          video.pause();
        }
      }}
    >
      {play ? (
        <PauseIcon
          sx={{
            fontSize: "32px",
            color: "white",
          }}
        />
      ) : (
        <PlayIcon />
      )}
    </Box>
  );
};
