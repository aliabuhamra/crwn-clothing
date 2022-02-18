import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

function MenuItem(props) {
  const { title, imageUrl, size, linkUrl, match, history } = props;
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        {/* toUpperCase built in function in javascript*/}
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
export default withRouter(MenuItem);
