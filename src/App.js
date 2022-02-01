import SearchParams from "./SearchParams";
import React from "react";
import { render } from "react-dom";
  const App = () => {
    return React.createElement("div", {}, [
      <SearchParams/>
      
    ]);
  };
  
  //ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
export default App;

/*        const res = fetch(
            `https://api.whatsapp.com/send?phone=91${finalNumber}&text=${finalMessage}`,
            {method: 'GET', mode: 'no-cors', redirect: 'follow', headers: {
                'Content-Type': 'url/api'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },}
        );*/