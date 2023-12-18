import { AllRoutes } from "./routes/AllRoutes";
import {Cloudinary} from "@cloudinary/url-gen";
import Cookies from 'js-cookie';
import Pay from "./pages/Pay";
import Razor from "./components/Razor";
import Stripe from "./components/Stripe";



const App = ()=> {
  const cld = new Cloudinary({cloud: {cloudName: 'dx78kzenz'} });
  Cookies.remove('tempData');
  return (
    <div className="App">
       <AllRoutes/>
       {/* <Stripe/> */}
    </div>
  );
}

export default App;
