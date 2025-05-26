import { useState } from "react";
import { toast } from "react-hot-toast";
import { useEffect } from 'react';

const useDataProviders = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:5000/api/providers";
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [image, setImage] = useState(null);
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProviders = async () =>{
   const response = await fetch(API);
    if (!response.ok) {
      throw new Error("Hubo un error al obtener los proveedores");
    }
    const data = await response.json();
    setProviders(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  const saveProvider = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("telephone", telephone);
    formData.append("image", image);

    const response = await fetch(API, {
      method: "POST",
      body : formData
    });

    if (!response.ok) {
      throw new Error("Hubo un error al registrar el proveedor");
    }

    const data = await response.json();
    toast.success('Proveedor registrado');
    setProviders(data);
    fetchProviders();
    setName("");
    setTelephone("");
    setImage(null);
  };

  const deleteProvider = async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Hubo un error al eliminar el proveedor");
    }

      toast.success('Proveedor Eliminado');
    fetchProviders();
  };

  const updateProvider = async (dataProvider) => {
    setId(dataProvider._id);
    setName(dataProvider.name);
    setTelephone(dataProvider.telephone);
    setImage(dataProvider.image);
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const editProvider = {
        name,
        telephone,
        image
      };
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editProvider),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el proveedor");
      }

      const data = await response.json();
      console.log(data);
       toast.success('proveedor actualizado');
      setId("");
      setName("");
      setTelephone("");
      setImage(null);
      setActiveTab("list");
      fetchProviders();
    } catch (error) {
      console.error("Error al editar el proveedor:", error);
    }
  };

  return {
    activeTab,
    setActiveTab,
    id,
    name,
    setName,
    telephone,
    setTelephone,
    image,
    setImage,
    providers,
    setProviders,
    loading,
    saveProvider,
    deleteProvider,
    updateProvider,
    handleEdit,
  };

};

export default useDataProviders;
