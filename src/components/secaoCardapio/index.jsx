import CardProduto from ".."


export default function SecaoCardapio(props) {
    const{nomeProduto} = props
    const {produto} = props
    return (
        <>
            <h2 className="text-2xl">{nomeProduto}</h2>
            <section className="flex">
                {produto.map(produto=> <CardProduto produto={produto}/>)}
            </section>

        </>
    )
}