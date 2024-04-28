import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import axios from 'axios'

// function Do() {
//   const [admin, setAdmin] = useState([])
//   useEffect(() => {
//     axios.get('https://localhost:7036/api/Admin')
//       .then(res => setAdmin(res.data))
//       .catch(e => console.error(e))
//   },[])
//   return (
//     <> <div>
//         <ul>
//           {admin.map(a => (
//             <li key={a.adminId}>{a.adminName} with {a.adminEmail} with {a.password} hi </li>
//           ))}
//         </ul>
//     </div></>
//   )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
