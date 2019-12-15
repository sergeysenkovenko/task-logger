import React from 'react';
import { connect } from "react-redux";
import { deleteTech, getTechs } from "../../actions/techsActions";
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech, getTechs}) => {
  const onDelete = e => {
    e.preventDefault();
    deleteTech(id);
    getTechs();
    M.toast({ html: 'Technician deleted' });
  };
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={e => onDelete(e)}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTech, getTechs })(TechItem);