import { useState } from "react";
import Form from "../components/Form";
import axios from "axios";

const Contact = () => {
  const [inputs, setInputs] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const url = "http://localhost/kodegoPHP/server/react-assign/index.php";
  const getData = new FormData();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(inputs).forEach((key) => {
      getData.append(key, inputs[key]);
    });
    getData.append("function", "insert");
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
    setInputs("");
    console.log(inquiries);
    alert("Message sent successfully");
  };

  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by!</p>
      <div className="grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt="/"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
        <Form
          inputs={inputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Contact;
