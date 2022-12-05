import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Table = ({ inquiry, handleDelete }) => {
  return (
    <tbody>
      <tr>
        <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-600 whitespace-no-wrap">
            {inquiry.firstName} {inquiry.lastName}
          </p>
        </td>
        <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-600 whitespace-no-wrap">{inquiry.email}</p>
        </td>
        <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-600 whitespace-no-wrap">{inquiry.phone}</p>
        </td>
        <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-600 whitespace-no-wrap">{inquiry.address}</p>
        </td>
        <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-600 whitespace-no-wrap">{inquiry.message}</p>
        </td>
        <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-600 whitespace-no-wrap flex justify-center items-center gap-1">
            <MdDelete
              id={inquiry.user_id}
              onClick={handleDelete}
              className="icon"
              size={30}
              style={{ color: "#c4302b", cursor: "pointer" }}
            />
            <FaEdit size={28} style={{ color: "#FFC300" }} className="icon" />
          </p>
        </td>
      </tr>
    </tbody>
  );
};

export default Table;
