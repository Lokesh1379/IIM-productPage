import React, { Fragment, useState } from "react";
import data from "../Data/Data.json";
import "./style.css"
import { Link } from "react-router-dom";
import HeaderComponent from "../Header";
const ProductDetails = () => {
    const [products, setProducts] = useState(data);
    const [render, setRender] = useState(true)
    const [searchAge, setSearchAge] = useState(18);
    const [description, setDescription] = useState(products[0])
    const temp = data;
    const filterHandler = ({ target: { value } }) => {
        setSearchAge(value)
        if (value === "all" || value === "Age") {
            setRender(true)
            setProducts(temp)
        }
        else {
            const filteredProducts = data.filter((product) => product.age === value);
            setRender(filteredProducts.length === 0 ? false : true);
            setProducts(filteredProducts);
        }
    }
    let age = ["Age", "all"];
    for (let i = 18; i <= 40; i++) {
        age.push(i)
    }
    return <>
        <HeaderComponent product={description} ren={render} />
        <div className="details-container">
            <div className="filter-container">
                <span>Filter :</span>
                <select onChange={filterHandler} id="age">
                    {
                        age.map((a, i) => {
                            return <Fragment key={i}>
                                <option value={a}>
                                    {a}
                                </option>
                            </Fragment>
                        })
                    }
                </select>
            </div>
            <div>
                {render ? <table >
                    <thead className="custom-table">
                        <tr>
                            <th>Insurance Name</th>
                            <th>Product Name</th>
                            <th>Claim Status</th>
                            <th>Premium</th>
                            <th>Age</th>
                            <th>Download PDF</th>
                            <th>More Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.insurance_Name}</td>
                                <td>{product.product_Name}</td>
                                <td>{product.claimStatus}</td>
                                <td>{product.premium}</td>
                                <td>{product.age}</td>
                                <td>
                                    <Link to="" target="_self">
                                        Download PDF
                                    </Link>
                                </td>
                                <td>
                                    <Link to="" target="_self" onClick={() => setDescription(product)}>
                                        more details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <h3>Sorry no data matched with the age {searchAge}</h3>}
            </div>
        </div>

    </>
}

export default ProductDetails;
