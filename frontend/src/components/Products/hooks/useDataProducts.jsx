import { useState } from "react";
import { toast } from "react-hot-toast";
import { useEffect } from 'react';

const useDataProducts = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:5000/api/products";
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () =>{
   const response = await fetch(API);
    if (!response.ok) {
      throw new Error("Hubo un error al obtener los productos");
    }
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const saveProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      price,
      stock
    };

    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error("Hubo un error al registrar el producto");
    }

    const data = await response.json();
    toast.success('Producto registrado');
    setProducts(data);
    fetchProducts();
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
  };

  const deleteProduct = async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Hubo un error al eliminar el producto");
    }

      toast.success('Producto Eliminado');
    fetchProducts();
  };

  const updateProduct = async (dataProduct) => {
    setId(dataProduct._id);
    setName(dataProduct.name);
    setDescription(dataProduct.description);
    setPrice(dataProduct.price);
    setStock(dataProduct.stock)
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const editProduct = {
        name,
        description,
        price,
        stock
      };
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editProduct),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }

      const data = await response.json();
      console.log("data desde handleEdit en hook custom");
      console.log(data);
       toast.success('producto actualizado');
      setId("");
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setActiveTab("list");
      fetchProducts();
    } catch (error) {
      console.error("Error al editar el producto:", error);
    }
  };

  return {
    activeTab,
    setActiveTab,
    id,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    stock,
    setStock,
    products,
    setProducts,
    loading,
    saveProduct,
    deleteProduct,
    updateProduct,
    handleEdit,
  };

};

export default useDataProducts;
