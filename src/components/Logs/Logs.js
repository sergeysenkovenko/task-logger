import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LogItem from "./LogItem";
import Spinner from "../Spinner";
import { getLogs } from "../../actions/logsActions";

const Logs = ({ logs: { logs, loading, search }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const onSearch = (items, search) => {
    if (!search) {
      return items;
    }
    return items.filter(el =>
      el.message.toLowerCase().includes(search.toLowerCase()) || el.tech.toLowerCase().includes(search.toLowerCase())
    );
  };

  const allLogs =
    logs &&
    onSearch(logs, search).map(log => <LogItem log={log} key={log.id} />);

  const placeholder = <p className="center">Nothing to show...</p>;

  if (loading || !logs) {
    return <Spinner />;
  }
  
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Task Logs</h4>
      </li>
      {!loading && logs.length === 0
        ? placeholder
        : allLogs.length > 0
        ? allLogs
        : placeholder}
    </ul>
  );
};

Logs.propTypes = {
  logs: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = ({ logs }) => ({
  logs,
  search: logs.search
});

export default connect(mapStateToProps, { getLogs })(Logs);
