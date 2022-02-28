import "./ContainerNav.scss";
import { useState, useEffect } from "react";

function BodyContainer(data, user, slug) {
  const [loading, setLoading] = useState(false);
  let [vol, setVol] = useState(0);
  const [music, setMusic] = useState(0);

  localStorage.getItem("vol") > 0
    ? setVol(localStorage.getItem("vol"))
    : setVol(0);

  function playVideo(e, id) {
    const videoId = e.target.closest(".video");
    if (e.target.className.split(" ")[1] === "fa-pause") {
      videoId.querySelector("video").pause();
      e.target.classList.remove("fa-pause");
      e.target.classList.add("fa-play");
    } else {
      videoId.querySelector("video").play();
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
    }
  }

  // handle slider vol
  function valueVol(e) {
    setVol(e.target.value);
    setMusic(e.target.value / 100);
  }

  useEffect(() => {
    localStorage.setItem("vol", vol);
    const listVideo = document.querySelectorAll(".video-main");
    const slider = document.querySelectorAll("#myinput");
    for (let val of slider) {
      val.value = vol;
      const min = 0;
      const max = 100;

      for (let videoItem of listVideo) {
        videoItem.volume = vol / 100;
      }

      val.style.background = `linear-gradient(to right, white 0%, white ${
        ((vol - min) / (max - min)) * 100
      }%, #7a7979 ${((vol - min) / (max - min)) * 100}%, #7a7979 100%)`;
    }
  }, [vol]);

  useEffect(() => {
    const btnVolList = document.querySelectorAll(".video .btn-volume i");
    if (music === 0) {
      for (let btnItem of btnVolList) {
        btnItem.classList.remove("fa-volume-up");
        btnItem.classList.add("fa-volume-mute");
      }
    } else {
      for (let btnItem of btnVolList) {
        btnItem.classList.add("fa-volume-up");
        btnItem.classList.remove("fa-volume-mute");
      }
    }
  }, [music]);

  // onclick btn vol
  function volVideo(e, id) {
    const btnVolList = document.querySelectorAll(".video .btn-volume i");

    if (e.target.className.split(" ")[1] === "fa-volume-up") {
      setVol(0);
      setMusic(0 / 100);
      for (let btnItem of btnVolList) {
        btnItem.classList.remove("fa-volume-up");
        btnItem.classList.add("fa-volume-mute");
      }
    } else {
      setVol(100);
      setMusic(100 / 100);
      for (let btnItem of btnVolList) {
        btnItem.classList.remove("fa-volume-mute");
        btnItem.classList.add("fa-volume-up");
      }
    }
  }

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  function shortNumber(num) {
    var type = ["K", "M", "G"];
    var decimal;
    for (var i = type.length - 1; i >= 0; i--) {
      decimal = Math.pow(1000, i + 1);

      if (num >= decimal) {
        return (num / decimal).toFixed(1) + type[i];
      }
    }
    return num;
  }

  return (
    <div className="body-container">
      {loading === false && <span>Loading.....</span>}
      {loading === true &&
        slug &&
        data.length > 0 &&
        data
          .filter((item) => item.name === slug)[0]
          .video.map((video) => {
            return (
              <div className="container-item" key={video.id}>
                <div className="heading-item">
                  <div className="item-img">
                    <img
                      className="item-img-logo"
                      src={"../images/" + user.avatar}
                      alt="logo"
                    />
                  </div>

                  <div>
                    <div className="item-content">
                      <div className="content-name">
                        <p className="name-main">{user.name}</p>
                        <p className="name-title">{user.title}</p>
                      </div>
                      <div className="content-des">
                        <span>{video.des_video}</span>
                      </div>
                      <div className="content-music">
                        <i className="fas fa-music"></i>
                        <a
                          href="https://www.w3schools.com"
                          className="link-music"
                        >
                          {video.music}
                        </a>
                      </div>
                    </div>
                    <div className="item-follow">
                      <button className="btn-follow">Follow</button>
                    </div>
                  </div>
                </div>

                <div className="content-audio">
                  <div className={"video video-" + video.id}>
                    <video
                      className="video-main"
                      src={"../video/" + slug + "/" + video.name_video}
                      loop
                      volume={music}
                      muted={music === 0 ? true : false}
                      // onClick={() => playVideo(video.id)}
                    ></video>

                    <button className="btn-play">
                      <i
                        className="fas fa-play"
                        onClick={(e) => playVideo(e, video.id)}
                      ></i>
                    </button>
                    <button className="btn-volume">
                      <i
                        className="fas fa-volume-mute"
                        onClick={(e) => volVideo(e, video.id)}
                      ></i>
                    </button>
                    <div className="display-vol">
                      <input
                        id="myinput"
                        className="value-vol"
                        type="range"
                        min="0"
                        max="100"
                        value={vol}
                        onInput={(e) => valueVol(e)}
                      />
                    </div>
                  </div>
                  <div className="item-action">
                    <div className="list-action">
                      <div className="item-like">
                        <button className="btn-like active">
                          <i className="fas fa-heart"></i>
                        </button>
                        <p>{video.love}k</p>
                      </div>
                      <div className="item-comment">
                        <button className="btn-cmt">
                          <i className="fas fa-comment-dots"></i>
                        </button>
                        <p>{video.comment}k</p>
                      </div>
                      <div className="item-share">
                        <button className="btn-share">
                          <i className="fas fa-share"></i>
                        </button>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      {slug === null &&
        loading === true &&
        data.length > 0 &&
        data.map((video) => {
          return (
            <div className="container-item" key={video.id}>
              <div className="heading-item">
                <div className="item-img">
                  <img
                    className="item-img-logo"
                    src={"../images/" + video.avatar_video}
                    alt="logo"
                  />
                </div>

                <div>
                  <div className="item-content">
                    <div className="content-name">
                      <p className="name-main">{video.user_video}</p>
                      <p className="name-title">{video.title_video}</p>
                    </div>
                    <div className="content-des">
                      <span>{video.des_video}</span>
                    </div>
                    <div className="content-music">
                      <i className="fas fa-music"></i>
                      <a
                        href="https://www.w3schools.com"
                        className="link-music"
                      >
                        {video.music}
                      </a>
                    </div>
                  </div>
                  <div className="item-follow">
                    <button className="btn-follow">Follow</button>
                  </div>
                </div>
              </div>

              <div className="content-audio">
                <div className={"video video-" + video.id}>
                  <video
                    className="video-main"
                    src={
                      "../video/" + video.user_video + "/" + video.name_video
                    }
                    loop
                    // onClick={(e) => playVideo(e, video.id)}
                  ></video>

                  <button
                    className="btn-play active"
                    onClick={(e) => playVideo(e, video.id)}
                  >
                    <i className="fas fa-play"></i>
                  </button>

                  <button
                    className="btn-volume"
                    // onClick={() => volVideo(video.id)}
                  >
                    <i className="fas fa-volume-mute"></i>
                  </button>
                  <div className="display-vol">
                    <input
                      id="myinput"
                      className="value-vol"
                      type="range"
                      min="0"
                      max="100"
                      // value={vol}
                      // onInput={() => valueVol(video.id)}
                    />
                  </div>
                </div>
                <div className="item-action">
                  <div className="list-action">
                    <div className="item-like">
                      <button className="btn-like active">
                        <i className="fas fa-heart"></i>
                      </button>
                      <p>{shortNumber(video.love)}</p>
                    </div>
                    <div className="item-comment">
                      <button className="btn-cmt">
                        <i className="fas fa-comment-dots"></i>
                      </button>
                      <p>{shortNumber(video.comment)}</p>
                    </div>
                    <div className="item-share">
                      <button className="btn-share">
                        <i className="fas fa-share"></i>
                      </button>
                      <p>{shortNumber(video.share)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default BodyContainer;
