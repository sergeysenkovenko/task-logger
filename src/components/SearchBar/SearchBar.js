import React, { useRef } from "react";
import { connect } from "react-redux";
import { setSearch} from "../../actions/logsActions";

const SearchBar = ({ setSearch }) => {
  const search = useRef("");

  const onFilter = e => {
    if(search.current.value){
      setSearch(e.target.value)
    }else{
      setSearch(null)
    }
  }
  const clearInput = () => {
    search.current.value = ''
    setSearch(null)
  }
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field container" style={{margin: "0 auto"}}>
            <input id="search" name="search" type="search" placeholder="Search logs..." onChange={onFilter} ref={search}/>
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons" onClick={clearInput}>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(null, { setSearch })(SearchBar);
