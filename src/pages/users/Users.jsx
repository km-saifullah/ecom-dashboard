import React, { useState } from "react";

const Users = () => {
  const [filterEmail, setFilterEmail] = useState("");
  const [filterNumber, setFilterNumber] = useState("");
  const [filterGroup, setFilterGroup] = useState("");

  const handleFilterEmail = (e) => {
    setFilterEmail(e.target.value);
  };
  const handleFilterNumber = (e) => {
    setFilterNumber(e.target.value);
  };
  const handleFilterGroup = (e) => {
    setFilterGroup(e.target.value);
  };

  // clear btn
  const handleClearFilter = (e) => {
    setFilterEmail("");
    setFilterNumber("");
    setFilterGroup("");
  };
  return (
    <>
      {/* filter system */}
      <section className="mb-12 ">
        <h2 className="text-3xl capitalize font-medium py-3  ">filter</h2>
        <div className="flex items-center justify-between ">
          <input
            className="border px-2 py-2 rounded-md w-[20rem] "
            type="email"
            placeholder="email"
            value={filterEmail}
            onChange={handleFilterEmail}
          />
          <input
            className="border px-2 py-2 rounded-md w-[20rem] "
            type="number"
            placeholder="mobile"
            value={filterNumber}
            onChange={handleFilterNumber}
          />
          <select
            className="border px-2 py-2 rounded-md"
            value={filterGroup}
            onChange={handleFilterGroup}
          >
            <option value="">select group</option>
            <option value="manager">manager</option>
            <option value="modarator">modarator</option>
            <option value="admin">admins</option>
          </select>
          <div className="flex items-center gap-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Filter
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
              onClick={handleClearFilter}
            >
              Clear
            </button>
          </div>
        </div>
      </section>
      {/* user List */}
      <section>
        <div className="border-b-2 outline-offset-8 py-3 flex justify-between items-center ">
          <h2 className="text-3xl capitalize font-medium py-3  ">Users</h2>
          <div className="flex items-center gap-3">
            <button>delete</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              add user
            </button>
            <button>update</button>
          </div>
        </div>
        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr className=" border-b-2 outline-offset-8 ">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Activity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Khalid saifullah</td>
                <td>Khalid@some.com</td>
                <td>017********5</td>
                <td> active</td>

                <td className="flex justify-end gap-3 ">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Users;
