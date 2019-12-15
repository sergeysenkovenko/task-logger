import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import LogItem from "./LogItem";
import Spinner from "../Spinner";
import { getLogs } from "../../actions/logsActions";

const Logs = ({ logs: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || !logs) {
    return <Spinner />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Task Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">Nothing to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  logs: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = ({ logs }) => ({
  logs
});

export default connect(mapStateToProps, { getLogs })(Logs);
