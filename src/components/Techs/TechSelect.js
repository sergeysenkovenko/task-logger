import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/techsActions";

const TechSelect = ({ getTechs, techs: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelect.propTypes = {
  techs: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = ({ techs }) => ({
  techs
});

export default connect(mapStateToProps, { getTechs })(TechSelect);
