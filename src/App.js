import react, { useState } from "react";
import Data from "./Data";

function App() {
  const [text, setText] = useState("");

  const handler = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <input type="text" value={text} onChange={handler} />
      </div>
      <div className="container">
        {Data.filter((val) => {
          if (text == "") {
            return val;
          }
          // else if(val.name.toLowerCase().startWith(text.toLowerCase()))
          else if (val.name.toLowerCase().includes(text.toLowerCase())) {
            return val;
          }
        }).map((entry) => {
          return (
            <div>
              <h4>{entry.name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
