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
import { Provider } from "react-redux";
import store from "../../store";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <div>
        <SearchBar />
        <div className="container">
          <Logs />
          <AddBtn />
          <AddLogModal />
          <AddTechModal />
          <EditLogModal />
          <Techs />
        </div>
      </div>
    </Provider>
  );
};

export default App;
