import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/reducer/productSlice';
import ProductCards from '../ui/ProductCards';

const BestSeller = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div className="relative">
            <ProductCards products={products} header="Our Bestseller" seeAllButton="See All" />
        </div>
    );
}

export default BestSeller;
