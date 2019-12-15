import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techsActions";
import TechItem from "./TechItem";

const Techs = ({ getTechs, techs: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  const placeholder = !loading && techs && techs.length === 0 && (
    <p className="center">No techs yet...</p>
  );

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
          {placeholder}
        </ul>
      </div>
    </div>
  );
};

Techs.propTypes = {
  techs: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = ({ techs }) => ({
  techs
});

export default connect(mapStateToProps, { getTechs })(Techs);
