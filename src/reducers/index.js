import { combineReducers } from "redux";

const songReducers = () => {
  return [
    { title: "no scrubs", duration: "4.05s" },
    { title: "Manacu", duration: "2.15s" },
    { title: "my shits", duration: "3.37s" },
    { title: "backstreet boys", duration: "1.25s" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  } else {
    return selectedSong;
  }
};

export default combineReducers({
  songs: songReducers,
  selectedSong: selectedSongReducer,
});
