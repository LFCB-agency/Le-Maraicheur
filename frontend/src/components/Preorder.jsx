import axios from "@services/axios";
import { useState } from "react";
import SuccesPreorder from "./SuccesPreorder";

export default function ClientList() {
  const [clientList, setClientList] = useState();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [succes, setSucces] = useState(false);

  const postClient = async () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}preorder`, {
      lastname,
      firstname,
      email,
      paymentMethod,
    });
    setSucces(true);
  };

  return (
    <section className="container-preorder-form">
      {succes ? <SuccesPreorder /> : ""}
      <form className="mep" onSubmit={setClientList}>
        <label htmlFor="firstname">
          Prénom *
          <input
            type="text"
            placeholder="Prénom"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label htmlFor="lastname">
          Nom *
          <input
            type="text"
            placeholder="Nom"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email *
          <input
            type="text"
            placeholder="monemail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <div>
          Paiement :
          <select
            className="clientStatus"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Select">Choisir un paiement en: </option>
            <option value="1x">1x</option>
            <option value="3x">3x</option>
            <option value="12x">12x</option>
          </select>
        </div>
        <button type="button" onClick={() => postClient(clientList)}>
          Précommander
        </button>
      </form>
    </section>
  );
}
