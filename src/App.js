import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus(getRandomStatus());
  }, []);

  function getRandomStatus() {
    return Math.random() < 0.5 ? "Fixe" : "Podre";
  }

  return <div>Computação em Cloud é {status}</div>;
}

export default App;
