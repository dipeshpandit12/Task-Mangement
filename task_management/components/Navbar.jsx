

export default function Navbar() {
  return (
    <div className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Task Management</h1>
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
