import { useState } from "react";
import { toast } from "react-hot-toast";
import { useEffect } from 'react';

const useDataBranches = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:5000/api/branches";
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [schedule, setSchedule] = useState("");
  const [telephone, setTelephone] = useState("");
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBranches = async () =>{
   const response = await fetch(API);
    if (!response.ok) {
      throw new Error("Hubo un error al obtener las sucursales");
    }
    const data = await response.json();
    setBranches(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  const saveBranch = async (e) => {
    e.preventDefault();
    const newBranch = {
      name,
      address,
      birthday,
      schedule,
      telephone
    };
    console.log("Datos enviados:", newBranch)
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBranch),
    });

    if (!response.ok) {
      throw new Error("Hubo un error al registrar la sucursal");
    }

    const data = await response.json();
    toast.success('Sucursal registrada');
    console.log(data)
    setBranches(data);
    fetchBranches();
    setName("");
    setAddress("");
    setBirthday("");
    setSchedule("");
    setTelephone("");
  };

  const deleteBranch = async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Hubo un error al eliminar la sucursal");
    }

      toast.success('Sucursal Eliminada');
    fetchBranches();
  };

  const updateBranch = async (dataBranch) => {
    setId(dataBranch._id);
    setName(dataBranch.name);
    setAddress(dataBranch.address);
    setBirthday(dataBranch.birthday);
    setSchedule(dataBranch.schedule)
    setTelephone(dataBranch.telephone)
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const editBranch = {
        name,
        address,
        birthday,
        schedule,
        telephone
      };
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editBranch),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la sucursal");
      }

      const data = await response.json();
      console.log("data desde handleEdit en hook custom");
      console.log(data);
       toast.success('sucursal actualizada');
      setId("");
      setName("");
      setAddress("");
      setBirthday("");
      setSchedule("");
      setTelephone("")
      setActiveTab("list");
      fetchBranches();
    } catch (error) {
      console.error("Error al editar la sucursal:", error);
    }
  };

  return {
    activeTab,
    setActiveTab,
    id,
    name,
    setName,
    address,
    setAddress,
    birthday,
    setBirthday,
    schedule,
    setSchedule,
    telephone,
    setTelephone,
    branches,
    setBranches,
    loading,
    saveBranch,
    deleteBranch,
    updateBranch,
    handleEdit,
  };

};

export default useDataBranches;
