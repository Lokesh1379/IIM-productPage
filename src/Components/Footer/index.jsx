import { memo } from "react";
import "./style.css"

const FooterComponent = () => {
    return <>
        <div className='footer-container'>
            <div className="copyright">&copy;
                {new Date().getFullYear()} , All rights reserved by IIM
            </div>
        </div>
    </>
}

export default memo(FooterComponent);