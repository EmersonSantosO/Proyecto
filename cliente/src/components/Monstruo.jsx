export function Monstruo({monstruo}){
  return (
    <div>
      <h1>{monstruo.nombre}</h1>
      <h2>{monstruo.familia}</h2>
      <h3>{monstruo.vida}</h3>
      <img src={monstruo.imagen} alt={monstruo.nombre} />
      <hr />
    </div>
  )
}