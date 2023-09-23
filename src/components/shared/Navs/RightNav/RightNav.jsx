import Banner from "./Banner/Banner";
import FindUsOn from "./FindUsOn/FindUsOn";
import LoginWithSocial from "./LoginWith/LoginWithSocial";
import Qzone from "./Qzone/Qzone";

const RightNav = () => {
    return (
        <div>
            <LoginWithSocial></LoginWithSocial>
            <FindUsOn />
            <Qzone/>
            <Banner />
        </div>
    );
};

export default RightNav;