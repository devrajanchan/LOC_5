import React from "react";
import { PopupButton } from "react-calendly";
import { Button } from "react-bootstrap";

const Calendly = () => {
  return (
    <div className="App">
      <Button>
      <PopupButton
        url="https://calendly.com/devrajanchan333"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
         text="Click here to schedule!"
        
      /></Button>
    </div>
  );
};

export default Calendly;