import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.tsx"; // <-- отут використовується default export

ReactDOM.createRoot(document.getElementById('root')!).
render(<RouterProvider router={routes}/>);