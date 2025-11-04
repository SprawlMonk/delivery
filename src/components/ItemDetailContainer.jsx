import db from "../db/db.js"
import { useState, useEffect } from "react"
import ItemDetailCard from "./ItemDetailCard.jsx"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})

  const { itemId } = useParams()

  const getItem = () => {
    const docRef = doc( db, "items", itemId )
    getDoc(docRef)
      .then((respuesta) => {
        const data = { id: respuesta.id, ...respuesta.data() }
        setItem(data);
      })
  }

  useEffect(()=> {
    getItem();
  }, []);

  return (
    <ItemDetailCard item={item} />
  )
}
export default ItemDetailContainer;