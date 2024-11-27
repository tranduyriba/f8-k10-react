import React from 'react'
import { useEffect, useState } from 'react'
import shop from './ShopPage';
import { Link } from 'react-router-dom';


   
const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [skip, setSkip] = useState(0);
    const [page, setPage] = useState(1);
  useEffect(() => {
    
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data.products);
        setProducts(data.products);
    });
  }, [limit, skip]);
  const handleSelect = (e) => {
    const selectedLimmit = e.target.value;
    setLimit(selectedLimmit);
  }
const handleSearch = (e) => {
    const searchValue = e.target.value;
}
    return (
    <div>
        <h2>Danh sách sản phẩm</h2>
        <select onChange={(e) => handleSelect(e)}>
            <option value={10}>Hien thi 10 san pham</option>
            <option value={20}>Hien thi 20 san pham</option>
            <option value={30}>Hien thi 40 san pham</option>
            <option value="all">Hien thi tat ca san pham</option>
        </select>
        <input type="text" onChange={(e) => handleSearch(e)} placeholder="Search" />
        {products.map((item) => (
            <div key={item.id}>
              <Link to={`/products/${item.id}`}><img src={item.thumbnail} alt="item.title" />
                  </Link>
                <span>{item.id}</span>
                  <Link to={`/products/${item.id}`}><h3>{item.title}</h3>
                  </Link>
                <p>Giá: {item.price}</p>
                <Link to={`/products/${item.id}`} >Chi tiết</Link>
                <p>Mô tả: {item.description}</p>
            </div>
        ))}
        {/* {nut bam next} */}
        <button onClick={() => setSkip(skip + limit)}>Next</button>
    </div>
  );
};

export default ShopPage;