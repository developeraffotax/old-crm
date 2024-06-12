import React, { useState } from "react";
import Layout from "../../components/Loyout/Layout";
import { GoPlus } from "react-icons/go";
import { style } from "../../utlis/CommonStyle";
import AddJobModal from "../../components/Modals/AddJobModal";

export default function AllJobs() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
      <div className="w-full h-full py-4 px-2 sm:px-4 ">
        <div className="flex items-center justify-between">
          <h1 className=" text-2xl sm:text-3xl font-semibold ">Job Planning</h1>
          <button
            className={`${style.button1}`}
            onClick={() => setIsOpen(true)}
          >
            <GoPlus className="h-5 w-5 text-white " /> Add Tasks
          </button>
        </div>
        <hr className="my-5 bg-gray-300 w-full h-[2px]" />
      </div>
      {/* Add Modal */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-[999] bg-black/70 flex items-center justify-center py-6 px-4">
          <AddJobModal setIsOpen={setIsOpen} />
        </div>
      )}
    </Layout>
  );
}
