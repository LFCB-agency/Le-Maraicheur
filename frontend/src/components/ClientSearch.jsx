// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function ClientSearch() {
//   const [input, setInput] = useState("");
//   const [clientSearch, setClientSearch] = useState();
//   const [clientDefault, setClientDefault] = useState();

//   const getClient = async () => {
//     try {
//       const data = await axios
//         .get(`${import.meta.env.VITE_BACKEND_URL}preorder`)
//         .then((response) => response.data);

//       setClientSearch(data);
//       setClientDefault(data);
//     } catch (err) {
//       if (err.sendStatus === 401) {
//         // eslint-disable-next-line
//         alert("Can't fetch Clients");
//       }
//     }
//   };
//   useEffect(() => {
//     getClient();
//   }, []);

//   const updateInput = async (input) => {
//     const filter = clientSearch.filter((clients) => {
//       return clients.firstname.toLowerCase().includes(input.toLowerCase());
//     });
//     setInput(input);
//     setClientSearch(filter);
//   };

//   return (
//       <>
//       <h1>search</h1>

//       </>
//   )
// }
