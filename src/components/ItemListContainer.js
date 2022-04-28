import React from 'react';
import '../styles/ItemListContainer.css';

import { ItemList } from './ItemList';

const ItemListContainer = () => {
    return (
        <>
            <div className="item-container">
            <ItemList/>
            </div>
        </>
    )
}
export default ItemListContainer