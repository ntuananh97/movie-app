import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenresTvShowsAction } from "../actions/tvShows";
import { selectGenresTvShows } from "../selector/tvShowSelector";

export function useGetGenresTvShows(isCall) {
  
  const dispatch = useDispatch();
  const genres = useSelector((state) => selectGenresTvShows(state));
  useEffect(() => {
    if (isCall) dispatch(fetchGenresTvShowsAction({
      language: 'vi'
    }));
  }, [dispatch, isCall]);

  return { ...genres };
}
