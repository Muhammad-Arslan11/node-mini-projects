import React, {useEffect, useRef, useState} from 'react';

function ModelForm({ isOpen, onClose, mode, onSubmit }) {

  // use useState to hold the input data
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [status, setStatus] = useState('');

    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current?.focus();
    }, []);


  return (
    <>
      {/* Trigger Button */}
      <button
        className="btn px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out"
        onClick={() => document.getElementById('my_modal_5').showModal()}
      >
        {isOpen ? "Save" : "Update"}
      </button>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-gray-600 rounded-xl p-6">
          <h3 className="font-bold text-xl text-gray-800 mb-4">
            {isOpen ? "Edit Client" : "Client Details"}
          </h3>

          {/* Name Input Fields */}
          <div className="space-y-4">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text" className="grow ml-3" placeholder="Jon Doe" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Job
            <input type="text" className="grow ml-3" placeholder="Software Engineer" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
          Email
            <input type="text" className="grow ml-3" placeholder="jonDoe@gmail.com" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
          Salary
            <input type="text" className="grow ml-3" placeholder="$100,000" />
          </label>

          <select className="select w-full max-w-xs">
             <option disabled selected>Status</option>
             <option>Active</option>
             <option>Inactive</option>
          </select>
          </div>

          {/* Modal Action Buttons */}
          <div className="modal-action flex justify-end mt-6">
            <form method="dialog">
              <button className="btn px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out">
                Close
              </button>
              <button className="btn px-4 py-2 ml-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                {isOpen ? "Save Client" : "Update Client"}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ModelForm;