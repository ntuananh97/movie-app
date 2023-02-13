import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const {  search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);

  return null;
}