export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Mahmud",
    img: "https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE=",
    status: "active",
    email: "1fake@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Kylie",
    img: "https://toppng.com/uploads/preview/businesswoman-blank-profile-picture-female-11563049297axzpapjulw.png",
    email: "2fake@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Marshall",
    img: "https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE=",
    email: "3fake@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Saliu",
    img: "https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE=",
    email: "4fake@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Bella",
    img: "https://toppng.com/uploads/preview/businesswoman-blank-profile-picture-female-11563049297axzpapjulw.png",
    email: "5fake@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Mellisa",
    img: "https://toppng.com/uploads/preview/businesswoman-blank-profile-picture-female-11563049297axzpapjulw.png",
    email: "6fake@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Aisha",
    img: "https://toppng.com/uploads/preview/businesswoman-blank-profile-picture-female-11563049297axzpapjulw.png",
    email: "7fake@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Femi",
    img: "https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE=",
    email: "8fake@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Folarin",
    img: "https://toppng.com/uploads/preview/businesswoman-blank-profile-picture-female-11563049297axzpapjulw.png",
    email: "9fake@gmail.com",
    status: "pending",
    age: 22,
  },
  {
    id: 10,
    username: "Emeka",
    img: "https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE=",
    email: "10fake@gmail.com",
    status: "active",
    age: 25,
  },
];
