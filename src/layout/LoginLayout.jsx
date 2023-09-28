import NavigationBar from '../components/shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
const LoginLayout = () => {
    return (
      <div>
        <NavigationBar />
        <Outlet />
        <Toaster position="top-center" reverseOrder={true} />
      </div>
    );
};

export default LoginLayout;