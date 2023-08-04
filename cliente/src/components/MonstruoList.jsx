
import { useEffect,useState } from "react";
import { getAllMonstruos } from "../api/monstruosApi";
import { Monstruo } from "./Monstruo";

export function MonstruoList() {
  const [monstruos, setMonstruos] = useState([]);

  useEffect(() => {
    async function loadMonstruos() {
      const response = await getAllMonstruos();
      const monstruos = response.data;
      setMonstruos(monstruos);
    }
    loadMonstruos();
  }, []);
  
  return (
    <div>
      {monstruos.map((monstruo) => (<Monstruo monstruo={monstruo} key={monstruo.id}/>))}
    </div>
      
  )}



