// import React from "react";
// import axios from "axios";
// import "./Special-style.css";
// const Special = () => {
//   const [data, setData] = React.useState([]);
//   const [foodName, setFoodName] = React.useState("");
//   const [foodimg, seFoodImg] = React.useState("");
//   const [description, setDescription] = React.useState("");
//   React.useEffect(() => {
//     getData();
//   }, []); //eslint-disable-line react-hooks/exhaustive-deps
//   const getData = async () => {
//     const response = await axios.get(
//       `http://localhost:5000/meals`
//     );
//     console.log(response.data);
//     setData(response.data);
//   };

//   const addHandler = async () => {
//     let data = {
//       foodname: foodName,
//       foodimage: foodimg,
//       description: description,
//     };
//     console.log(foodName);
//     const res = await axios.post(
//       "http://localhost:5000/meals",
//       data
//     );
//     console.log(res);
//     let newData = res.data;
//     const foodlist = [data];
//     foodlist.push(newData);
//     setData(foodlist);
//   };
//   const Deletehandler = async (id) => {
//     const Delete = await axios.delete(
//       `http://localhost:5000/meals/${_id}`
//     );
//     if (Delete.status === 200) {
//       const datalist = data;
//       let deletedfood = datalist.filter((data) => {
//         return data.id !== id;
//       });
//       setData(deletedfood);
//     }
//   };
//   return (
//     <div>
//       <div className="header">
//         <div className="headerleftbtn">
//           <input
//             className="leftbtn"
//             type="text"
//             value={foodName}
//             name="name"
//             placeholder="Food-Name"
//             onChange={(e) => setFoodName(e.target.value)}
//           />
//           <input
//             className="leftbtn"
//             type="url"
//             alt="image"
//             value={foodimg}
//             name="foodimg"
//             placeholder="Food-image-(url)"
//             onChange={(e) => seFoodImg(e.target.value)}
//           />
//           <input
//             className="leftbtn"
//             type="button"
//             value="New foodtype"
//             onClick={(e) => addHandler(e)}
//           />
//         </div>
//         <textarea
//           className="description"
//           type="text"
//           value={description}
//           name="your food description"
//           placeholder="your food description"
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>

//       <div className="special-container">
//         {data
//           ? data.map((e, index) => {
//               return (
//                 <div className="specialcards" key={index}>
//                   <div className="specialreturnname">{e.foodname}</div>
//                   <img
//                     className="specialreturnimage"
//                     src={e.foodimage}
//                     alt="foodimg"
//                   />
//                   <div className="specialreturndesc">{e.description}</div>
//                   <br />
//                   <input
//                     className="dele"
//                     type="button"
//                     value="delete"
//                     onClick={() => {
//                       Deletehandler(e.id);
//                     }}
//                   />
//                 </div>
//               );
//             })
//           : "loading"}
//       </div>
//     </div>
//   );
// };

// export default Special;
