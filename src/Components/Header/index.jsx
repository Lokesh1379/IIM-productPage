import logo from "../../images/logoiim-removebg-preview.png"
import YouTubeVideo from "../Youtybe";
import "./style.css"
const HeaderComponent = ({ product, ren }) => {
    return <>
        <div className="header-container">
            <div className="des-container">
                {
                    ren ?
                        <div className="card">
                            <img className="profile" src={logo} alt="profile-logo" />
                            <div className="card-body">
                                <h5 className="card-title"><b>Product Name :</b>{product.product_Name}</h5>
                                <p className="card-text"><b>Description :</b>{product.description}</p>
                            </div>
                        </div> : <h2>Data not Found</h2>
                }
            </div>
            <div className="video-container">
                <YouTubeVideo />
            </div>
        </div>
    </>
}

export default HeaderComponent;