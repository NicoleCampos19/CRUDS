import CardProvider from "./CardProvider";
import React from "react";

const ListProvider = ({ providers, loading, deleteProvider, updateProvider }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold underline text-center">
        Listado de proveedores
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {providers?.map((provider) => (
          <CardProvider
            key={provider._id}
            provider={provider}
            deleteProvider={deleteProvider}
            updateProvider={updateProvider}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProvider;