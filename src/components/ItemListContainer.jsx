import db from "../db/db.js";
import BasicCard from "./Card.jsx";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";



const getItems = async () => {
    const itemsRef = collection(db, "items");
    const ans = await getDocs(itemsRef);
    const data = ans.docs.map((itemDB) => {
        return { id: itemDB.id, ...itemDB.data() };
    });
    return data;
};

const getFilteredItems = async (categoryId) => {
    const itemsRef = collection(db, "items");
    const q = query(itemsRef, where("category", "==", categoryId));
    const ans = await getDocs(q);
    const data = ans.docs.map((itemDB) => {
        return { id: itemDB.id, ...itemDB.data() };
    });
    return data;
};

const ItemCards = ({ items }) => {
    return (
        <div className="ItemCards">
            {items.map((item) => (
                <BasicCard key={item.id} item={item} />
            ))}
        </div>
    );
};

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(() => {
        const fetchItems = async () => {
            if (categoryId) {
                const filteredItems = await getFilteredItems(categoryId);
                setItems(filteredItems);
            } else {
                const allItems = await getItems();
                setItems(allItems);
            }
        };
        fetchItems();
    }, [categoryId]);

    return <ItemCards items={items} />;
}

export default ItemListContainer;
