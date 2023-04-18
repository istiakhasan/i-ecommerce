import React from "react";
import TvIcon from "@mui/icons-material/Tv";
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import WatchIcon from '@mui/icons-material/Watch';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
const CommonIcon = ({ name }) => {
  switch (name) {
    case "television":
      return <TvIcon />;
      break;
    case "mobile":
      return <MobileScreenShareIcon />;
      break;
    case "headphone":
      return <HeadphonesIcon />;
      break;
    case "watches":
      return <WatchIcon />;
      break;
    case "game":
      return <SportsEsportsIcon />;
      break;
    case "camera":
      return <CameraAltIcon />;
      break;
    case "audio":
      return <AudiotrackIcon />;
      break;
    case "mobileandtablet":
      return <TabletMacIcon />;
      break;
    case "homeaudio":
      return <PlaylistAddCircleIcon />;
      break;
    default:
      return <TvIcon />;
  }
};

export default CommonIcon;
