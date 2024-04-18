import React, { useEffect, useState } from 'react';
import './Product.css'

function Product() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((e) => {
                console.log("There is something wrong");
            });
    }, []);
    return (
        <div className="products-container">
            <div className="products-background"></div>
            <div className="products-content"></div>
            <h1 className="products-header">Our Products</h1>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>DESCRIPTION</th>
                        <th>IMAGE</th>
                        <th colSpan={2}>CATEGORY</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ecom) => (
                        <tr key={ecom.id}>
                            <td>{ecom.id}</td>
                            <td>{ecom.title}</td>
                            <td>{ecom.price}</td>
                            <td>{ecom.description}</td>
                            <td>
                                <div className="product-images">
                                    {ecom.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Product ${ecom.id} Image ${index + 1}`}
                                            className="product-image"
                                        />
                                    ))}
                                </div>
                            </td>
                            <td className="products-category">{ecom.category.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Product