import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/components/clientlist.scss";
import moment from "moment/min/moment-with-locales";
import "moment/locale/fr";
// ^ specify moment like this due to a bug we need to point out the dir
// to change the local timezone of moment.js
export default function ClientList() {
  const [clientList, setClientList] = useState([]);

  const getClient = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}preorder`)
        .then((response) => response.data);

      setClientList(data);
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

  const deleteClient = async (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}preorder/${id}`, {
        body: clientList,
      })
      .then(() => getClient());
  };

  const updateStatus = async (id, event) => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}preorder/${id}`, {
        checkboxStatus: event.target.value,
      })
      .then(() => getClient());
  };

  return (
    <div className="client-list-container">
      {clientList.length === 0 ? (
        <p>nothing to display</p>
      ) : (
        clientList.map((clients) => {
          const dateFormat = moment().format("l");
          const clientStyle =
            clients.checkboxStatus === 0
              ? "client-list-display"
              : "client-list-display-done";
          return (
            <div className={clientStyle} key={clients.id}>
              <ul className="client-list-num">
                <li className="clientId">#{clients.id}</li>
                <li className="clientFn">Nom :{clients.firstname}</li>
                <li className="clientLn">Prenom :{clients.lastname}</li>
                <li className="clientEmail">Email :{clients.email}</li>
                <li className="clientPayment">
                  {" "}
                  Payment :{clients.paymentMethod}
                </li>
                <li className="clientDate">
                  Date d'inscription : {dateFormat}
                </li>
                <select
                  value={clients.checkboxStatus}
                  onChange={(event) => updateStatus(clients.id, event)}
                >
                  <option value="0">A contacter</option>
                  <option value="1">Deja Contacté</option>
                </select>
                <button
                  className="clientDelete"
                  type="button"
                  onClick={() => deleteClient(clients.id)}
                >
                  Delete
                </button>
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
}
