import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmark from "./pages/Bookmark";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";

// eslint-disable-next-line react/prop-types

function App() {
  return (
    <div className="min-h-screen overflow-auto bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tvseries" element={<TvSeries />} />
          <Route path="bookmark" element={<Bookmark />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
