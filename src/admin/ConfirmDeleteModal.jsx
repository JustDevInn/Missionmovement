// src/admin/ConfirmDeleteModal.jsx
import React from "react";

const ConfirmDeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-[#1c1c1c] border border-red-600 p-6 rounded-lg max-w-sm text-center shadow-lg">
        <h2 className="text-xl font-bold text-red-500 mb-4">
          Are you sure you want to delete this article?
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded"
          >
            Yes, Delete
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
