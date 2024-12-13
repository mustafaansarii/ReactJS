const StudentMarksTable = ({id,name,marks}) => {
    // Sample data for students and their marks
    console.log(id)
    return (
      <table className="min-w-full table-auto border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-200">
      <th className="border border-gray-300 px-4 py-2">ID</th>
      <th className="border border-gray-300 px-4 py-2">Name</th>
      <th className="border border-gray-300 px-4 py-2">Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr className="text-center">
      <td className="border border-gray-300 px-4 py-2">{id}</td>
      <td className="border border-gray-300 px-4 py-2">{name}</td>
      <td className="border border-gray-300 px-4 py-2">{marks}</td>
    </tr>
  </tbody>
</table>

    );
  };
  
  export default StudentMarksTable;
  