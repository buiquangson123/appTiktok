/* eslint-disable array-callback-return */
import "./ContainerNav.scss";
import BodyFollowed from "./BodyFollowed.js";
import BodyMain from "./BodyMain.js";
import BodyProposed from "./BodyProposed";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

import { Routes, Route, Link } from "react-router-dom";

function Container() {
  const navRef = useRef(null);
  const [account, setAccount] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      let res = await axios.get("https://data-tiktok.herokuapp.com/user");
      let data = res && res.data ? res.data : [];
      setAccount(data);
      setLoading(true);
    }
    fetch();
  }, []);

  return (
    <div className="container grid wide">
      <div ref={navRef} className="containerNav" id="scrollNav">
        <div className="navUser">
          <a href=" " className="navUserItem">
            <i className="fas fa-home"></i>
            <p>Dành cho bạn</p>
          </a>
          <a href=" " className="navUserItem">
            <i className="fas fa-user-friends"></i>
            <p>Đang follow</p>
          </a>
          <a href=" " className="navUserItem">
            <i className="fas fa-video"></i>
            <p>Live</p>
          </a>
        </div>
        <div className="navProposed">
          <span className="headingProposed">Tài khoản được đề xuất</span>
          <ul className="navProposedList">
            {loading === false && <span>loading...</span>}
            {account &&
              account.length > 0 &&
              account.map((item) => {
                if (item.followed !== 1) {
                  return (
                    <li className="navProposedItem" key={item.id}>
                      <Link
                        to={"/proposed/" + item.name}
                        className="navProposedLink"
                      >
                        <img
                          className="imgProposed"
                          src={"../images/" + item.avatar}
                          alt="ảnh đại diện"
                        />
                        <div className="inforProposed">
                          <span className="nameItem">
                            {item.name}
                            <i className="fas fa-check-circle"></i>
                          </span>
                          <p className="desItem">{item.title}</p>
                        </div>
                      </Link>
                    </li>
                  );
                }
              })}
          </ul>
          <span className="viewAllProposed">Xem tất cả</span>
        </div>
        <div className="navFollow">
          <span className="headingFollow">Các tài khoản đang follow</span>
          <ul className="navFollowList">
            {loading === false && <span>loading...</span>}
            {account &&
              account.length > 0 &&
              account.map((item) => {
                if (item.followed === 1) {
                  return (
                    <li className="navProposedItem" key={item.id}>
                      <Link
                        to={"/followed/" + item.name}
                        className="navProposedLink"
                      >
                        <img
                          className="imgProposed"
                          src={"../images/" + item.avatar}
                          alt="ảnh đại diện"
                        />
                        <div className="inforProposed">
                          <span className="nameItem">
                            {item.name}
                            <i className="fas fa-check-circle"></i>
                          </span>
                          <p className="desItem">{item.title}</p>
                        </div>
                      </Link>
                    </li>
                  );
                }
              })}
          </ul>
          <span className="viewAllFollow">Xem thêm</span>
        </div>
        <div className="navPopular">
          <span className="headingPopular">Khám phá</span>
          <ul className="navPopularList">
            <li className="navPopularItem">
              <a href=" " className="navPopularLink">
                <div className="inforPopular">
                  <i className="fas fa-paperclip"></i>
                  <p className="nameItem">
                    thanthaisieusao thanthaisieusao thanthaisieusao
                  </p>
                </div>
              </a>
            </li>
            <li className="navPopularItem">
              <a href=" " className="navPopularLink">
                <div className="inforPopular">
                  <i className="fas fa-search"></i>
                  <p className="nameItem">khoedepdontet</p>
                </div>
              </a>
            </li>
            <li className="navPopularItem">
              <a href=" " className="navPopularLink">
                <div className="inforPopular">
                  <i className="fas fa-music"></i>
                  <p className="nameItem">Hương dâu</p>
                </div>
              </a>
            </li>
            <li className="navPopularItem">
              <a href=" " className="navPopularLink">
                <div className="inforPopular">
                  <i className="fas fa-paperclip"></i>
                  <p className="nameItem">Yêu lại từ đầu (Khắc Việt)</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="navPolicy">
          <div className="about-tiktok">
            <a href="https://www.tiktok.com/about?lang=vi-VN">Giới thiệu</a>
            <a href="https://newsroom.tiktok.com/en-us/?lang=vi-VN">Bảng tin</a>
            <a href="https://www.tiktok.com/about/contact?lang=vi-VN">
              Liên hệ
            </a>
            <a href="https://careers.tiktok.com/?lang=vi-VN">Sự nghiệp</a>
            <a href="https://www.bytedance.com/?lang=vi-VN">Bytedance</a>
          </div>
          <div className="promote-tiktok">
            <a href="https://www.bytedance.com/?lang=vi-VN">Tiktok for good</a>
            <a href="https://www.bytedance.com/?lang=vi-VN">Quảng cáo</a>
            <a href="https://www.bytedance.com/?lang=vi-VN">Developer</a>
            <a href="https://www.bytedance.com/?lang=vi-VN">Transparency</a>
            <a href="https://www.bytedance.com/?lang=vi-VN">Tiktok rewards</a>
          </div>
          <div className="term-tiktok">
            <a href="https://www.bytedance.com/?lang=vi-VN">Trợ giúp</a>
            <a href="https://www.bytedance.com/?lang=vi-VN">An toàn</a>
            <a href="https://www.bytedance.com/?lang=vi-VN">Điều khoản</a>
            <a href="https://www.bytedance.com/?lang=vi-VN">Quyền riêng tư</a>
            <a href="https://www.bytedance.com/?lang=vi-VN">
              Hướng dẫn cộng đồng
            </a>
            <a href="https://www.bytedance.com/?lang=vi-VN">Creater portal</a>
          </div>
          <span>@2022 Tiktok</span>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<BodyMain data={account} />} />
        <Route
          path="/proposed/:slug"
          element={<BodyProposed data={account} />}
        />
        <Route
          path="/followed/:slug"
          element={<BodyFollowed data={account} />}
        />
      </Routes>
    </div>
  );
}

export default Container;
