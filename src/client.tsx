import React from "react";
import ReactDOM from "react-dom";

const App = ({ text }: { text: string }) => {
 return (
   			<div>
     				<p>{text}</p>
   			</div>
 		);
};

ReactDOM.render(<App text={"React: hello world"} />, document.getElementById("root"));
