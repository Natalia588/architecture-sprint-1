import React, { lazy }  from "react";
import ReactDOM from "react-dom/client";

import "./index.css";


/*
Testing

const UsersTestControl = lazy(() => import('users/UsersTestControl').catch(() => {
 return { default: () => <div className='error'>Users Component is not available!</div> };
})
);

const PlacesTestControl = lazy(() => import('places/PlacesTestControl').catch(() => {
 return { default: () => <div className='error'>Places Component is not available!</div> };
})
);

const App = () => (
<div className="container">
 <UsersTestControl></UsersTestControl>
 <PlacesTestControl></PlacesTestControl>
</div>
);
*/

const App = () => (
<div className="container">
	/*
		TODO: page structure. 
		Need to migrade it from ./components/App.js (original structure)
	*/
</div>
);

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)