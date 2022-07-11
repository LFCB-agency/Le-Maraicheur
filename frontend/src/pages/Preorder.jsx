import axios from "@services/axios";
import { useState } from "react";

export default function ClientList() {
  const [clientList, setClientList] = useState();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const postClient = async () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}preorder`, {
      lastname,
      firstname,
      email,
      paymentMethod,
    });
  };

  return (
    <form className="mep" onSubmit={setClientList}>
      <label htmlFor="firstname">
        Firstname :
        <input
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </label>
      <label htmlFor="lastname">
        Lastname :
        <input
          type="text"
          placeholder="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        Email :
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="paymentMethod">
        Payment :
        <select
          className="clientStatus"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="Select">Select</option>
          <option value="1x">1x</option>
          <option value="3x">3x</option>
          <option value="12x">12x</option>
        </select>
      </label>
      <button type="button" onClick={() => postClient(clientList)}>
        Register
      </button>
    </form>
  );
}
