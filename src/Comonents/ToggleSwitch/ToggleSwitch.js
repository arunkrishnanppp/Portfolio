import React, { useContext, useState } from "react";
import StyleContext from "../../Context/StyleContext";
import "./ToggleSwich.css";
const ToggleSwitch = () => {
  const { isDark } = useContext(StyleContext);
  const [ischecked, setischecked] = useState(isDark);
  const styleContext = useContext(StyleContext);
  return (
    <div class="wrapper swicth">
      <input
        type="checkbox"
        name="checkbox"
        class="switch"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setischecked(!ischecked);
        }}
      ></input>
    </div>
  );
};

export default ToggleSwitch;
