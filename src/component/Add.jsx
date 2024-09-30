import React, { useState } from "react";

const Add = () => {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    year: "",
    branch: "",
    attended: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("YOUR_MONGODB_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      if (response.ok) {
        console.log("Student added successfully");
        setStudent({
          name: "",
          rollNo: "",
          year: "",
          branch: "",
          attended: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-10">
      <h2 className="text-2xl font-semibold text-[#0a0147] text-center mb-6">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
        <input
          type="text"
          name="name"
          value={student.name}
          placeholder="Student Name"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#0a0147]"
        />
        <input
          type="text"
          name="rollNo"
          value={student.rollNo}
          placeholder="Roll Number"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#0a0147]"
        />
        <input
          type="text"
          name="year"
          value={student.year}
          placeholder="Year"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#0a0147]"
        />
        <input
          type="text"
          name="branch"
          value={student.branch}
          placeholder="Branch"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#0a0147]"
        />
        <input
          type="text"
          name="attended"
          value={student.attended}
          placeholder="Attended (Yes/No)"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#0a0147]"
        />
        
        {/* Flex container for button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-[#0a0147] text-white rounded-md py-2 px-4 hover:bg-indigo-600 transition duration-300"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
