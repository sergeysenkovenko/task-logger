import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "../SearchBar";
import Logs from "../Logs";
import AddBtn from "../Controls/AddBtn";
import AddLogModal from "../Modals/AddLogModal";
import AddTechModal from "../Modals/AddTechModal";
import EditLogModal from "../Modals/EditLogModal";
import Techs from "../Techs";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div>
      <SearchBar />
      <div className="container">
        <Logs />
        <AddBtn />
        <AddLogModal />
        <AddTechModal />
        <EditLogModal />
        <Techs/>
      </div>
    </div>
  );
};

export default App;
