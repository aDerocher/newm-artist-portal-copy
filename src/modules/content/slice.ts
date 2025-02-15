import { createSlice } from "@reduxjs/toolkit";
import { ContentState } from "./types";

const initialState: ContentState = {
  // TEMP: Data is mocked until API data is available
  genres: [
    "Alternative",
    "Anime",
    "Blues",
    "Children's",
    "Classical",
    "Clasicalelle",
    "Comedy",
    "Commercial",
    "Country",
    "Dance",
    "Electronic",
    "Enka",
    "Enko",
    "Hip Hop",
    "Indie Pop",
    "Industrial",
    "Inspirational",
    "Instrumental",
    "J-Pop",
    "Jazz",
    "K-Pop",
    "Karaoke",
    "Kayokyoku",
    "Latin",
    "Metal",
    "New Age",
    "Opera",
    "Pop",
    "R&B",
    "RGB",
  ],
  roles: [
    "Arranger",
    "Backup Singer",
    "Composer",
    "Instrumentalist",
    "Lyricist",
    "Main Talent",
    "Manager",
    "Mastering Engineer",
    "Mix Engineer",
    "Orchestrator",
    "Producer",
    "Recording Engineer",
  ],
};

const contentSlice = createSlice({
  initialState,
  name: "content",
  reducers: {
    receiveContent(state, { payload }) {
      state.genres = payload.genres;
      state.roles = payload.roles;
    },
  },
});

export const { receiveContent } = contentSlice.actions;

export default contentSlice.reducer;
