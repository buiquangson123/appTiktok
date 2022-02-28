import { useParams } from "react-router-dom";
import "./Followed.scss";

function BodyFollowed({ data }) {
  let { slug } = useParams();

  let user = {};
  if (data && data.length > 0) {
    let userID = data.find((item) => item.name === slug);
    user.name = userID.name;
    user.avatar = userID.avatar;
    user.title = userID.title;
    user.des = userID.des;
  }

  function handleVideo(e) {
    e.target.classList.add("active");
    document.querySelector(".btn-love").classList.remove("active");
  }

  function handleLove(e) {
    e.target.classList.add("active");
    document.querySelector(".btn-video").classList.remove("active");
  }

  return (
    <>
      <div className="body-detail-user">
        <div className="user-infor">
          <div className="user-img">
            <img
              className="user-img-logo"
              src={"../images/" + user.avatar}
              alt="logo"
            />
          </div>
          <div className="user-contact">
            <div className="user-contact-des">
              <p className="user-name">{user.name}</p>
              <p className="user-title">{user.title}</p>
              <div className="user-btn-follow">
                {/* <button className="btn-follow">Follow</button> */}

                <button className="btn-mes">Tin nhắn</button>
                <button className="btn-cancel-follow">
                  <i className="fas fa-user-check"></i>
                </button>
                <div className="noti-follow">
                  <span>Bỏ follow</span>
                </div>
              </div>
            </div>
            <div className="user-contact-share">
              <span className="btn-share">
                <i className="fas fa-share"></i>
                <div className="noti-share">
                  <div className="notiList">
                    <a href=" " className="notiItem">
                      <i
                        style={{ color: "#25D366" }}
                        className="fab fa-whatsapp-square"
                      ></i>
                      <p>Chia sẻ với WhatsApp</p>
                    </a>
                    <a href=" " className="notiItem">
                      <i
                        style={{ color: "#0075FA" }}
                        className="fab fa-facebook"
                      ></i>
                      <p>Chia sẻ với Facebook</p>
                    </a>
                    <a href=" " className="notiItem">
                      <i
                        style={{ color: "#1DA1F2" }}
                        className="fab fa-twitter"
                      ></i>
                      <p>Chia sẻ với Twitter</p>
                    </a>
                    <a href=" " className="notiItem">
                      <i
                        style={{ color: "#FE2C55", fontSize: "1.5rem" }}
                        className="fas fa-link"
                      ></i>
                      <p>Sao chép liên kết</p>
                    </a>
                    <a href=" " className="notiItem">
                      <i
                        style={{ color: "#0D68C3" }}
                        className="fab fa-linkedin"
                      ></i>
                      <p>Chia sẻ với LinkedIn</p>
                    </a>
                    <a href=" " className="notiItem">
                      <i
                        style={{ color: "#FF4500" }}
                        className="fab fa-reddit"
                      ></i>
                      <p>Chia sẻ với Reddit</p>
                    </a>
                    <a href=" " className="notiItem">
                      <i
                        style={{ color: "#37AEE2" }}
                        className="fab fa-telegram"
                      ></i>
                      <p>Chia sẻ với Telegram</p>
                    </a>
                    <a href=" " className="notiItem">
                      <i
                        style={{ color: "#0DBEF3", fontSize: "2rem" }}
                        className="fas fa-envelope"
                      ></i>
                      <p>Chia sẻ với Email</p>
                    </a>
                    <a href=" " className="notiItem">
                      <i
                        style={{ color: "#00B900" }}
                        className="fab fa-line"
                      ></i>
                      <p>Chia sẻ với Line</p>
                    </a>
                  </div>
                </div>
              </span>
              <span className="btn-ellip">
                <i className="fas fa-ellipsis-h"></i>
                <div className="noti-report">
                  <div className="report-name">
                    <i className="far fa-flag"></i>
                    Báo cáo
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="user-number">
          <span className="number-follow">0</span>
          <span>Đang Follow</span>
          <span className="number-follower">67.8K</span>
          <span>Follower</span>
          <span className="number-love">308k</span>
          <span>Thích</span>
        </div>
        <div className="user-des">
          Thành Công Là Không Bao Giờ Bỏ Cuộc!
          <br />
          Tìm hiểu về Tôi ở Link bên dưới 📩
        </div>
        <div className="user-video">
          <div className="video-text">
            <button
              className="btn-video active"
              onClick={(e) => handleVideo(e)}
            >
              Video
            </button>
            <button className="btn-love" onClick={(e) => handleLove(e)}>
              <i className="fas fa-lock"></i>
              Đã thích
            </button>
          </div>
          <div className="list-video"></div>
          <div className="video-loved">
            <i class="fas fa-lock"></i>
            <p>Video đã thích của người dùng này ở trạng thái riêng tư</p>
            <p>Các video được thích bởi loan5318 hiện đang ẩn</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyFollowed;
