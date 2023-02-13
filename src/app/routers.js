import CategoriesPage from "./pages/CategoriesPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailMoviePage from "./pages/DetailMoviePage";
import WatchMoviePage from "./pages/WatchMoviePage";
import ActorPage from "./pages/ActorPage";
import DirectorPage from "./pages/DirectorPage";
import TagsPage from "./pages/TagsPage";


export const publicRouter = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/the-loai/:name/:id",
    element: <CategoriesPage />,
  },
  {
    path: "/tim-kiem",
    element: <SearchPage />,
  },
  {
    path: `/phim/:name/:id`,
    element: <DetailMoviePage />,
  },
  {
    path: `/quoc-gia/:name/:code`,
    element: <DetailMoviePage />,
  },
  {
    path: `/phim-moi`,
    element: <DetailMoviePage />,
  },
  {
    path: `/phim-le`,
    element: <DetailMoviePage />,
  },
  {
    path: `/phim-chieu-rap`,
    element: <DetailMoviePage />,
  },
  {
    path: "/xem-phim",
    element: <WatchMoviePage />,
  },
  {
    path: "/dien-vien",
    element: <ActorPage />,
  },
  {
    path: "/dao-dien",
    element: <DirectorPage />,
  },
  {
    path: "/tags",
    element: <TagsPage />,
  },
];

export const privateRouter = []

// const router = createBrowserRouter([...publicRouter, ...privateRouter]);



