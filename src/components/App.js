import React from "react";
import Header from "./Header";
import { useAuth0 } from "./Auth/react-auth0-spa";

const App = ({ idToken }) => {
  const { loading, logout } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header logoutHandler={logout} />
      <div className="row container-fluid p-left-right-0 m-left-right-0">
        <div className="row col-md-9 p-left-right-0 m-left-right-0">
          <div className="col-md-6 sliderMenu p-30">
          </div>
          <div className="col-md-6 sliderMenu p-30 bg-gray border-right">
          </div>
        </div>
        <div className="col-md-3 p-left-right-0">
          <div className="col-md-12 sliderMenu p-30 bg-gray">
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

