import React from "react";

interface GreetingsProps {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
}

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      hello {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>click me</button>
      </div>
    </div>
  );
}

export default Greetings;
