import axios from "axios";
import { useState, useEffect } from "react";

const SeachBest = () => {
    const [bestItems, setBestItems] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get('/data/products.json');
                const products = response.data.products;
                const itemLists = products.flatMap(product =>
                    product.variants.map(variant => ({
                        model_id: product.model.model_id,
                        cate_no: product.model.cate_no,
                        name: product.model.name,
                        price: product.model.price,
                        id: variant.id,
                        serial: variant.serial,
                        color: variant.color,
                        thumbnail: variant.thumbnail[0],
                        stock: variant.stock,
                        discount: variant.discount,
                        sales_count: variant.sales_count,
                        created_at: variant.created_at,
                        totalSales: product.model.price * (100 - variant.discount) / 100 * variant.sales_count
                    }))
                );
                const sortedItems = itemLists.sort((a, b) => b.totalSales - a.totalSales);
                setBestItems(sortedItems.slice(0, 4));
            } catch(error) {
                console.error('베스트아이템 데이터 로딩 실패 : ', error);
            }
        }
        fetchData();
    }, [])    
    return (
        <div className="SeachBest">
            <h3>베스트 상품</h3>
            <div className="search-best-list">
                <ul>
                    {bestItems.map(item =>
                        <li key={item.id}>{item.name}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SeachBest;