import React from "react";
import './Branches.css';
import ListBranch from "../components/Branches/ListBranch";
import RegisterBranches from "../components/Branches/registerBranches";
import useDataBranches from "../components/Branches/hooks/useDataBranches";

const Branches = () => {
  const {
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
  } = useDataBranches();

  return (
    <div className="product-page" style={{ paddingTop: "200px" }}>
      <div className="product-container">
          <div className="product-tabs">
          <button className={`product-tab ${activeTab === "list" ? "active" : ""}`} onClick={() => setActiveTab("list")}>
    Lista de sucursales
  </button>
  <button className={`product-tab ${activeTab === "form" ? "active" : ""}`} onClick={() => setActiveTab("form")}>
    Gestionar Sucursales
  </button>
</div>
          <div>
            {activeTab === "list" && (
              <div>
                <ListBranch
                  branches={branches}
                  loading={loading}
                  deleteBranch={deleteBranch}
                  updateBranch={updateBranch}
                />
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <RegisterBranches
                  setName={setName}
                  setAddress={setAddress}
                  setBirthday={setBirthday}
                  setSchedule={setSchedule}
                  setTelephone={setTelephone}
                  saveBranch={saveBranch}
                  name={name}
                  address={address}
                  birthday={birthday}
                  schedule={schedule}
                  telephone={telephone}
                  id={id}
                  handleEdit={handleEdit}
                />
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Branches;
