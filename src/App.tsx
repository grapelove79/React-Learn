import React from "react";
import Greetings from "./Greetings";

const App: React.FC = () => {
  const onClick = (name) => {
    console.log(`${name} hahah`);
  };
  return <Greetings name="Hello" onClick={onClick} />;
};

export default App;
