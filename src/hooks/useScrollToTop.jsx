import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const state = useSelector((state) => state.utils.categoryStatus);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, state]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
