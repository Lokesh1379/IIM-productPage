
import "./style.css";
import iphone from "../../images/iphone.png"
import oneplus from "../../images/oneplus.png";
import realme from "../../images/realme.png"
const OtherProducts = () => {
    const otherProducts = [
        {
            imageUrl: iphone,
        },
        {
            imageUrl: oneplus,
        },
        {
            imageUrl: realme,
        },
        {
            imageUrl: iphone,
        },
        {
            imageUrl: oneplus,
        },
        {
            imageUrl: realme,
        },
        {
            imageUrl: iphone,
        },
        {
            imageUrl: oneplus,
        },
        {
            imageUrl: realme,
        },
        {
            imageUrl: iphone,
        },
        {
            imageUrl: oneplus,
        },
        {
            imageUrl: realme,
        },
        {
            imageUrl: iphone,
        },
        {
            imageUrl: oneplus,
        },
        {
            imageUrl: realme,
        },
        {
            imageUrl: iphone,
        },
        {
            imageUrl: oneplus,
        },
        {
            imageUrl: realme,
        },
    ]

    return <>

        <div className="other-main-container">
            <h3>Other Products</h3>
            <div className="others-container">
                {
                    otherProducts.map((product) => {
                        return <>
                            <img src={product.imageUrl} alt="img-1" id="product-image" />
                        </>
                    })
                }
            </div>
        </div>
    </>
}
export default OtherProducts;