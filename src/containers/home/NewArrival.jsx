import React, { useState, useEffect } from 'react';
import './style/NewArrival.css';
import tshirt from "../../assets/images/T-shirt.png";

const NewArrival = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/category/mens-shirts');
                const data = await response.json();
                console.log(data);
                setProducts(data.products);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="alljoin">
            <div>
                <h2 className="new-arrivals">NEW ARRIVALS</h2>
            </div>

            <div className="each">
                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    products.slice(0, 4).map((product) => (
                        <ProductCard product={product} />
                    ))
                )}
            </div>
            <div className="but">
            <button className="view-all-button">View All</button>
            </div>
        </div>
    );
};

const ProductCard = ({ product }) => {
    return (
        <div >
            <div className="tshirtcolour">
                <img className="tshirt" src={product.images[0]} alt="T-shirt" />
            <p className="title">{product.title}</p>
            <p className="price">${product.price}</p>
            </div>

        </div>
    );
};

export default NewArrival;