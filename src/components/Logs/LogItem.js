import React from "react";
import Moment from "react-moment";
const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
        <div>
          <a
            href="#edit-log-modal"
            className={`modal-trigger ${
              log.attention ? "red-text" : "blue-text"
            }`}
            //   onClick={() => setCurrent(log)}
          >
            {log.message}
          </a>
          <br />
          <span className="grey-text">
            <span className="black-text">ID #{log.id}</span> last updated by{" "}
            <span className="black-text">{log.tech}</span> on{" "}
            <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
          </span>
        </div>
        <a style={{marginTop:"6px"}} href="#!" /*onClick={onDelete}*/ className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default LogItem;
