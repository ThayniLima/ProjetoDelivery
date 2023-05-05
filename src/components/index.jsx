export default function CardProduto({produto}){
   
    return(
        
        <div className= "p-4 w-56">
        <img className= "rounded-lg" src={produto.card} alt="card do produto"/>
        <h3 className="text-xl my-3 line-clamp-1">{produto.nomeProduto}</h3>
        <a className="bg-blue-300 text-black px-1 py-1 rounded " href="#">Valor</a>
      </div>
  
    )
}