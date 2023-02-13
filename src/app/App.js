import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouter } from "../app/routers";
import DefaultLayout from "./Layout/DefaultLayout";
import "../assets/styles/reset.css";
import "../assets/styles/bootstrap-grid.min.css";
import "../assets/styles/base.css";
// import "../assets/styles/library/slick.min.css";
// import "../assets/styles/library/slick-theme.min.css";
import "../assets/styles/global.scss";
import "../assets/styles/responsive.scss";
import ScrollToTop from "./componentWeb/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {publicRouter.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <DefaultLayout path={item.path}>{item.element}</DefaultLayout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
