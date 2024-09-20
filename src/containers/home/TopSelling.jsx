import React, {useEffect, useState} from "react";
import './style/TopSelling.css'


const TopSelling = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await fetch('https://dummyjson.com/products/category/womens-dresses');
                const data = await response.json();
                console.log(data);
                setProducts(data.products);
                setLoading(false);
            }catch(error){
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return(
        <div className="Grand-parent">
            <div>
                <h2 className="top-selling">TOP SELLING</h2>
            </div>
            <div className='allcloth'>
                {loading ? (
                    <p>Loading products...</p>
                ):(
                    products.slice(0,4).map((product) =>(
                        <ProductCards product={product}/>
                    ))
                )}
            </div>
            <div>
                <button className="view-all-button">View All</button>
            </div>
        </div>
    );
 };

const ProductCards = ({ product }) => {
    return(
      <div>
          <div className='topsellcolor'>
              <img className='topsell' src={product.images[0]} alt="product"/>
              <p className="title">{product.title}</p>
              <p className="price">${product.price}</p>
          </div>
      </div>
    );
};

export default TopSelling;