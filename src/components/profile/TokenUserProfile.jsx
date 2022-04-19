import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UserLogo from "./UserLogo";
import {
  changeTokenUserLogo,
  handleLikeUserTweet,
  handleTokenUserProfile,
  useProfileDispatch,
  useProfileState,
} from "../context/profileContext";
import { decodeToken } from "../../utils/decodeToken";

const TokenUserProfile = () => {
  const profileDispatch = useProfileDispatch();
  const { tokenUserInfo, userTweet } = useProfileState();
  const { t } = useTranslation();

  const tokenUserId = decodeToken(localStorage.getItem("x-auth-token")).payload
    ._id;

  const renderTweets = (text) => {
    return {
      __html: text.replace(/#\S+/g, `<span class="text-primary">$&</span>`),
    };
  };

  const handleProfile = () => handleTokenUserProfile(profileDispatch);
  useEffect(() => {
    handleProfile();
  }, []);

  return (
    <div
      style={
        localStorage.getItem("i18nextLng") === "fa-IR"
          ? { direction: "rtl" }
          : { direction: "ltr" }
      }
    >
      <Helmet>
        <title>{t("profileHelmet")}</title>
      </Helmet>

      <div className="profile">
        <div className="profile_header">
          <i className="fab fa-twitter twitter_logo"></i>
        </div>

        <div
          className={`profile_content ${
            localStorage.getItem("i18nextLng") === "fa-IR" ? "irNast" : "enOp"
          }`}
        >
          <div className="logo_profile_first">
            <UserLogo imageUrl={tokenUserInfo.image} />

            <div
              className={`btn-group ${
                localStorage.getItem("i18nextLng") === "fa-IR"
                  ? "float-start mx-sm-2"
                  : "float-end"
              }`}
            >
              <button
                type="button"
                className="btn btn-outline-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={
                  localStorage.getItem("i18nextLng") === "fa-IR"
                    ? { fontSize: "19px", lineHeight: 0.5, paddingTop: "16px" }
                    : null
                }
              >
                {t("tokenUserBtn")}
              </button>

              <ul
                className="dropdown-menu"
                style={
                  localStorage.getItem("i18nextLng") === "fa-IR"
                    ? { textAlign: "right" }
                    : null
                }
              >
                <label
                  htmlFor="upload-photo"
                  className="btn dropdown-item my-1"
                  style={{ fontSize: "18px" }}
                >
                  {t("tokenUserBtn-1")}
                </label>
                <input
                  type="file"
                  name="photo"
                  id="upload-photo"
                  style={{
                    opacity: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
                  onChange={(event) =>
                    changeTokenUserLogo(profileDispatch, event)
                  }
                />

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <button
                  type="button"
                  className="btn dropdown-item"
                  style={{ fontSize: "18px" }}
                  onClick={() => {
                    localStorage.removeItem("x-auth-token");
                    window.location.reload();
                  }}
                >
                  {t("tokenUserBtn-2")}
                </button>
              </ul>
            </div>
          </div>

          <div className="m-2">
            <p id="fullname" className="text-capitalize">
              {tokenUserInfo.name}
            </p>
            <p id="username" className="enOp">
              {localStorage.getItem("i18nextLng") === "fa-IR"
                ? tokenUserInfo.username + "@"
                : "@" + tokenUserInfo.username}
            </p>

            <div className="list-group list-group-horizontal-sm">
              <button
                type="button"
                className={`list-group-item list-group-item-action mx-1 active
                ${
                  localStorage.getItem("i18nextLng") === "fa-IR"
                    ? "list_fa"
                    : null
                }`}
                aria-current="true"
              >
                {t("userBtn-1")}
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action
                ${
                  localStorage.getItem("i18nextLng") === "fa-IR"
                    ? "list_fa"
                    : null
                }`}
                style={{ fontSize: "15px" }}
              >
                {t("userBtn-2")}
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action mx-1
                ${
                  localStorage.getItem("i18nextLng") === "fa-IR"
                    ? "list_fa"
                    : null
                }`}
              >
                {t("userBtn-3")}
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action
                ${
                  localStorage.getItem("i18nextLng") === "fa-IR"
                    ? "list_fa"
                    : null
                }`}
                disabled
              >
                {t("userBtn-4")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {userTweet.length === 0 ? (
        <div className="tweets_content text-center text-warning pt-5">
          <h1>{t("userTweetTitle")}</h1>
        </div>
      ) : (
        <div className="tweets_content">
          {userTweet.map((tweet) => (
            <div className="tweets_content_items" key={tweet._id}>
              <NavLink
                to="/home/profile"
                className="user_btn enOp btn text-light"
              >
                {localStorage.getItem("i18nextLng") === "fa-IR" ? (
                  <div className="prof-logo-fa">
                    <UserLogo imageUrl={tweet.user.image} />
                  </div>
                ) : (
                  <UserLogo imageUrl={tweet.user.image} />
                )}

                <div
                  style={
                    localStorage.getItem("i18nextLng") === "fa-IR"
                      ? { float: "left" }
                      : { float: "right" }
                  }
                >
                  <p
                    id="fullname"
                    className="text-capitalize"
                    style={{ fontSize: "16px", margin: "2px 0 0 10px" }}
                  >
                    {tweet.user.name}
                  </p>
                  <p
                    id="username"
                    style={{
                      color: "gray",
                      fontSize: "10px",
                      margin: "0 8px",
                    }}
                  >
                    {localStorage.getItem("i18nextLng") === "fa-IR"
                      ? tweet.user.username + "@"
                      : "@" + tweet.user.username}
                  </p>
                </div>
              </NavLink>

              <div style={{ margin: "0.5rem 0 0 2.8rem" }}>
                <p
                  className="enOp"
                  style={{ fontSize: "15px" }}
                  dangerouslySetInnerHTML={renderTweets(`${tweet.text}`)}
                />

                <div className="pt-3 d-flex justify-content-between">
                  <div className="content_icon first-icon" title="Disabled">
                    <div className="content_comment d-inline">
                      <i className="far fa-comment tweets_icon"></i>
                    </div>
                  </div>

                  <div className="content_icon second-icon" title="Disabled">
                    <div className="content_retweet d-inline">
                      <i className="fas fa-retweet tweets_icon"></i>
                    </div>
                  </div>

                  <div className="content_icon third-icon">
                    <div
                      className="content_heart d-inline"
                      onClick={() =>
                        handleLikeUserTweet(
                          profileDispatch,
                          tweet._id,
                          tokenUserId
                        )
                      }
                    >
                      <i className="fas fa-heart tweets_icon"></i>
                    </div>
                    <span className="content_num">{tweet.likes}</span>
                  </div>

                  <div className="content_icon last-icon" title="Disabled">
                    <div className="content_down d-inline">
                      <i className="far fa-arrow-alt-circle-down tweets_icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenUserProfile;
