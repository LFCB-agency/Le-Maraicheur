// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function ImageUpdate() {
//   const [updateFile, setUpdateFile] = useState();
//   const [image, setImage] = useState([]);
//   const getImage = async () => {
//     try {
//       const data = await axios
//         .get(`${import.meta.env.VITE_BACKEND_URL}pictures?categories=methode`)
//         .then((response) => response.data);
//       // console.log(data);
//       setImage(data);
//     } catch (err) {
//       if (err.response.status === 401) {
//         alert("Picture doesn't exists");
//       }
//     }
//   };
//   useEffect(() => {
//     getImage();
//   }, []);
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file", updateFile);
//     formData.append(
//       JSON.stringify({ description, categories, picSection: section })
//     );
//     const id = updateFile;
//     try {
//       const { data } = await axios.put(
//         `${import.meta.env.VITE_BACKEND_URL}pictures/update/${id}`,
//         formData
//       );
//       return setUpdateFile(data);
//     } catch (err) {
//       console.warn(err);
//       return alert(err.message);
//     }
//   };
//   return (
//     <>
//       <label htmlFor="picture-id">
//         <select onChange={(e) => setUpdateFile(e.target.value)}>
//           {image.map((img) => (
//             <option value={img.id} key={img.id}>
//               {img.file}
//             </option>
//           ))}
//         </select>
//       </label>
//       {updateFile && (
//         <img
//           src={`${import.meta.env.VITE_IMAGES_URL}${updateFile.file}`}
//           alt={updateFile.alt}
//         />
//       )}
//       <button type="button" onClick={handleUpdate}>
//         {" "}
//         Update Pic
//       </button>
//     </>
//   );
// }
