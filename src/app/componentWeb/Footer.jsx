/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__desc">
            <p>
              <b>
                <Link to="/">Xem phim online</Link>
              </b>{" "}
              miễn phí chất lượng cao với phụ đề tiếng việt - thuyết minh - lồng
              tiếng. Mọt phim có nhiều thể loại phim phong phú, đặc sắc, nhiều
              bộ phim hay nhất - mới nhất.
            </p>
            <p>
              Website motphim.net với giao diện trực quan, thuận tiện, tốc độ
              tải nhanh, thường xuyên cập nhật các bộ phim mới hứa hẹn sẽ đem
              lại những trải nghiệm tốt cho người dùng.
            </p>
          </div>
          <div className="footer__info flex">
            <div className="footer__column">
              <div className="footer__heading">Quy định</div>
              <ul>
                <li className="footer__item">
                  <a href="#">Điều khoản chung</a>
                </li>
                <li className="footer__item">
                  <a href="#">Chính sách riêng tư</a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__heading">Giới thiệu</div>
              <ul>
                <li className="footer__item">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="footer__item">
                  <Link to="#">Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
