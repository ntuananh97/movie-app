import CategoriesPage from "./pages/CategoriesPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailMoviePage from "./pages/DetailMoviePage";
import WatchMoviePage from "./pages/WatchMoviePage";
import ActorPage from "./pages/ActorPage";
import DirectorPage from "./pages/DirectorPage";
import TagsPage from "./pages/TagsPage";
import { ROUTER_PATH } from "../constanst.js";



export const publicRouter = [
  {
    path: ROUTER_PATH.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTER_PATH.CATEGORIES,
    element: <CategoriesPage />,
  },
  {
    path: ROUTER_PATH.SEARCH,
    element: <SearchPage />,
  },
  {
    path: ROUTER_PATH.DETAIL_MOVIE,
    element: <DetailMoviePage />,
  },
  {
    path: ROUTER_PATH.COUNTRIES,
    element: <CategoriesPage />,
  },
  {
    path: ROUTER_PATH.NEW_MOVIE,
    element: <CategoriesPage />,
  },
  {
    path: ROUTER_PATH.SINGLE_MOVIE,
    element: <CategoriesPage />,
  },
  {
    path: ROUTER_PATH.ON_PLAYING_MOVIE,
    element: <CategoriesPage />,
  },
  {
    path: ROUTER_PATH.WATCH_MOVIE,
    element: <WatchMoviePage />,
  },
  {
    path: ROUTER_PATH.ACTOR,
    element: <ActorPage />,
  },
  {
    path: ROUTER_PATH.DIRECTOR,
    element: <DirectorPage />,
  },
  {
    path: ROUTER_PATH.TAGS,
    element: <TagsPage />,
  },
];

export const privateRouter = []

// const router = createBrowserRouter([...publicRouter, ...privateRouter]);



