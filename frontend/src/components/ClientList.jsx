import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/components/clientlist.scss";

export default function ClientList() {
  const [clientList, setClientList] = useState([]);

  const getClient = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}preorder`)
        .then((response) => response.data);
      setClientList(data);
      //   console.log(data);
    } catch (err) {
      if (err.sendStatus === 401) {
        // eslint-disable-next-line
        alert("Can't fetch Clients");
      }
    }
  };
  useEffect(() => {
    getClient();
  }, []);

  return (
    <div className="client-list-container">
      {/* <ul className="client-list-title">
        <li>Id</li>
        <li>Nom</li>
        <li>Prenom</li>
        <li>Email</li>
        <li>Paiement</li>
        <li>Date de l'inscription</li>
        <li>Traitement</li>
      </ul> */}
      {clientList.map((clients) => (
        <div className="client-list-display" key={clients.id}>
          <ul className="client-list-num">
            <li>{clients.id}</li>
            <li>{clients.firstname}</li>
            <li>{clients.lastname}</li>
            <li>{clients.email}</li>
            <li>{clients.paymentMethod}</li>
            <li>{clients.date}</li>
            <li>{clients.checkboxStatus}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
