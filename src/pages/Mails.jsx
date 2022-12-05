import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";

const Mails = () => {
  const [inquiries, setInquiries] = useState([]);
  const url = "http://localhost/kodegoPHP/server/react-assign/index.php";
  const getData = new FormData();

  const handleDelete = (e) => {
    getData.append("user_id", e.currentTarget.id);
    getData.append("function", "delete");
    axios
      .post(url, getData)
      .then(function () {
        axios.get(url).then((response) => {
          setInquiries(response.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setInquiries(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8 min-h-screen">
      <div className="py-20">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold leading-tight">
            Tourist Inquiries
          </h2>
          <button>Add +</button>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              {inquiries.map((inquiry) => (
                <Table
                  inquiry={inquiry}
                  handleDelete={handleDelete}
                  key={inquiry.user_id}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mails;
