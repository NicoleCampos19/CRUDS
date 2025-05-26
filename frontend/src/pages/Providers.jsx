import React from "react";
import './Provider.css';
import ListProviders from "../components/Providers/ListProvider";
import FormProvider from "../components/Providers/FormProvider";
import useDataProviders from "../components/Providers/hooks/useDataProvider";

const Providers = () => {
  const {
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
  } = useDataProviders();

  return (
    <div className="product-page" style={{ paddingTop: "200px" }}>
      <div className="product-container">
          <div className="product-tabs">
          <button className={`product-tab ${activeTab === "list" ? "active" : ""}`} onClick={() => setActiveTab("list")}>
    Lista de proveedores
  </button>
  <button className={`product-tab ${activeTab === "form" ? "active" : ""}`} onClick={() => setActiveTab("form")}>
    Gestionar Proveedores
  </button>
</div>
          <div>
            {activeTab === "list" && (
              <div>
                <ListProviders
                  providers={providers}
                  loading={loading}
                  deleteProvider={deleteProvider}
                  updateProvider={updateProvider}
                />
              </div>
            )}
            {activeTab === "form" && (
              <div>
                <FormProvider
                  setName={setName}
                  setTelephone={setTelephone}
                  setImage={setImage}
                  saveProvider={saveProvider}
                  name={name}
                  telephone={telephone}
                  image={image}
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

export default Providers;
