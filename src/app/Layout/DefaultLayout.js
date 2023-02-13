import React from "react";
import Header from "../componentWeb/Header";
import Footer from "../componentWeb/Footer";

function DefaultLayout({ children, path }) {
  return (
    <>
      <Header />
      {path === "/xem-phim" ? (
        <>{children}</>
      ) : (
        <main className="main">
          <div className="container">{children}</div>
        </main>
      )}

      <Footer />
    </>
  );
}

export default DefaultLayout;
