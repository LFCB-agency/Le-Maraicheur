/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/min/moment-with-locales";
import "moment/locale/fr";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArchiveIcon from "@mui/icons-material/Archive";
import RemoveSucces from "./RemoveSucces";
// ^ specify moment like this due to a bug we need to point out the dir
// to change the local timezone of moment.js
export default function ClientList() {
  const [clientList, setClientList] = useState([]);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isArchived, setIsArchived] = useState(0);

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
    if (
      confirm(
        "Êtes vous sûr de vouloir soumettre ces modifications? \nCliquer sur OK pour confirmer ou annuler."
      )
    ) {
      axios
        .delete(`${import.meta.env.VITE_BACKEND_URL}preorder/${id}`, {
          body: clientList,
        })
        .then((response) => {
          setMessage(response.data);
          setSuccess(true);
          getClient();
        });
    }
    setSuccess(false);
  };

  const archivedClient = async (id) => {
    if (confirm("Voulez vous archiver ce client ?")) {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}preorder/archived/${id}`, {
          archived: true,
        })
        .then(() => getClient());
    }
  };
  const updateStatus = async (id, event) => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}preorder/${id}`, {
        checkboxStatus: event.target.value,
      })
      .then(() => getClient());
  };

  const handleStatus = () => {
    setIsArchived(isArchived === 0 ? 1 : 0);
  };

  return (
    <div className="client-list-container">
      <div className="client-list-button">
        <button
          className={
            isArchived === 0
              ? "button-admin-choice"
              : "button-admin-choice-disable"
          }
          type="button"
          onClick={handleStatus}
        >
          Clients
        </button>
        <button
          className={
            isArchived === 1
              ? "button-admin-choice"
              : "button-admin-choice-disable"
          }
          type="button"
          onClick={handleStatus}
        >
          Archivés
        </button>
      </div>
      {clientList.length === 0 ? (
        <p className="nothinghere">
          Il n'y à rien par ici... <br />
          <br />
          Reviens plus-tard lorsque des clients auront faim..
        </p>
      ) : (
        clientList
          .filter((client) => client.archived === isArchived)
          .map((clients) => {
            const dateFormat = moment().format("l");
            const clientStyle =
              clients.checkboxStatus === 0
                ? "client-list-display"
                : "client-list-display-done";
            return (
              <section key={clients.id}>
                {success ? <RemoveSucces message={message} /> : ""}

                <div className="client-list">
                  <ul className="client-list-num">
                    <div className={clientStyle} key={clients.id} />
                    <li className="clientId">#{clients.id}</li>
                    <li className="clientFn">Prénom: {clients.firstname}</li>
                    <li className="clientLn">Nom: {clients.lastname}</li>
                    <li className="clientEmail">E-mail: {clients.email}</li>
                    <li className="clientPayment">{clients.paymentMethod} €</li>
                    <li className="clientDate">
                      Date d'inscription: {dateFormat}
                    </li>
                    <select
                      value={clients.checkboxStatus}
                      onChange={(event) => updateStatus(clients.id, event)}
                    >
                      <option value="0">A contacter</option>
                      <option value="1">Déjà Contacté</option>
                    </select>

                    <button
                      className="clientDelete"
                      type="button"
                      onClick={() => deleteClient(clients.id)}
                    >
                      <DeleteForeverIcon />
                    </button>
                    <button
                      className="clientDelete"
                      type="button"
                      value={clients.archived}
                      onClick={() => archivedClient(clients.id)}
                    >
                      <ArchiveIcon />
                    </button>
                  </ul>
                  <br />
                  <br />
                </div>
              </section>
            );
          })
      )}
    </div>
  );
}
