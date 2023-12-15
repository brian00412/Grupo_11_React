// import { useEffect, useState } from 'react'

// export default function app() {
//     const [Ditto, setDitto] = useState();
//     const [loaded, setloaded] = useState(false);
//     useEffect(() => {
//       fetch("http://localhost:8001/prodt")
//       .then ((res) => res.json())
//       .then ((prodt) => setDitto(prodt))
//       .catch((err) => console.log(err))
//       .finally(() => setloaded(true))
//     },[]);
//     return <div>{loaded ? ditto.name:<h2> cargando </h2>}</div>;
//   }
