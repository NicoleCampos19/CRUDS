import BranchCard from "./BranchCard";
import React from "react";

const ListBranches = ({ branches, loading, deleteBranch, updateBranch }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold underline text-center">
        Listado de sucursales
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {branches?.map((branch) => (
          <BranchCard
            key={branch._id}
            branch={branch}
            deleteBranch={deleteBranch}
            updateBranch={updateBranch}
          />
        ))}
      </div>
    </div>
  );
};

export default ListBranches;