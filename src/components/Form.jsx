import React from "react";

const Form = ({ inputs, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2">
        <input
          className="border m-2 p-2"
          name="firstName"
          placeholder="First Name"
          type="text"
          value={inputs.firstName || ""}
          onChange={handleChange}
        />
        <input
          className="border m-2 p-2"
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={inputs.lastName || ""}
          onChange={handleChange}
        />
        <input
          className="border m-2 p-2"
          name="email"
          type="email"
          placeholder="Email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
        <input
          className="border m-2 p-2"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={inputs.phone || ""}
          onChange={handleChange}
        />
        <input
          className="border col-span-2 p-2 m-2"
          name="address"
          placeholder="Address"
          type="text"
          value={inputs.address || ""}
          onChange={handleChange}
        />
        <textarea
          className="border col-span-2 m-2 p-2"
          name="message"
          cols="30"
          rows="10"
          // value={inputs.message || ""}
          // onChange={handleChange}
        ></textarea>
        <button className="col-span-2 m-2">Submit</button>
      </div>
    </form>
  );
};

export default Form;
