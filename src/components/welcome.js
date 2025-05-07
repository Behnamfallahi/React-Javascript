import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import React from "react";
// import {  faClose} from "@fortawesome/react-fontawesome" ;
const Welcome = () => {
  const [showicon, setshowicon] = useState();
  useEffect(() => {
    const data = localStorage.getItem("show-app-intro");
    setshowicon(JSON.parse(data) ?? true);
  }, []);
  const hidwelcom = () => {
    setshowicon(false);
    localStorage.setItem("show-app-intro", JSON.stringify(false));
  };
  return (
    <React.Fragment>
      {showicon && (
        <div className="container">
          <div className="bg-primary text-white my-3">
            <FontAwesomeIcon
              icon={faClose}
              style={{ float: "right", margin: "5px" }}
              onClick={hidwelcom}
            />
            <div className="p-4">welcome</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Welcome;
