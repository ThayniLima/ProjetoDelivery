import CardProduto from "@/components";
import SecaoCardapio from "@/components/secaoCardapio";

export default function Home() {

  const produto = [
    {
      nomeProduto: "Hamburguer Artesanal",
      card: "https://media.istockphoto.com/id/1215569804/pt/foto/fresh-and-juicy-hamburger-on-a-paper-pillow-with-beer-on-a-wooden-table-dark-background.jpg?s=612x612&w=0&k=20&c=kYXvxZkmKm8FlKzhEBWpRYfRWZKmC7VvKYZRt2r7j5E="
    },

    {
      nomeProduto: "Pizza",
      card: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      nomeProduto: "Batata Frita",
      card: "https://media.istockphoto.com/id/481757852/pt/foto/queijo-batatas-fritas-caseiras-salgadas.jpg?s=612x612&w=0&k=20&c=uBz2Cxj6INl4PhrqCCbo0fcfC6vYnYr6wjcv9H4O0Hg="
    },

    {
      nomeProduto: "Coxinha de Frango",
      card: "https://media.istockphoto.com/id/1298993369/pt/foto/brazilian-snacks.jpg?b=1&s=612x612&w=0&k=20&c=MF8Ust71gDVCUtqYlojqWVMucL2gAHQORb1Ps9LFZZ4="
    },

    {
      nomeProduto: "Petit Gateau",
      card: "https://media.istockphoto.com/id/512820236/pt/foto/lava-bolo-de-chocolate-com-gelado.jpg?s=612x612&w=0&k=20&c=GZ0WMh2ebG-1Tua2koHXq74hel5ccSdbZ752ShtfjRg="
    },
    {
      nomeProduto: "Sorvete",
      card: "https://media.istockphoto.com/id/1264447431/pt/foto/strawberry-ice-cream-with-fresh-strawberries.jpg?s=612x612&w=0&k=20&c=H_5ZDKpR2X_fvTiy0S9DcPEtXw5xETmYyYd0LR4iQ0k="
    }
  ]
  const maisPedidos = [
    {
      nomeProduto: "Batata Frita",
      card: "https://media.istockphoto.com/id/481757852/pt/foto/queijo-batatas-fritas-caseiras-salgadas.jpg?s=612x612&w=0&k=20&c=uBz2Cxj6INl4PhrqCCbo0fcfC6vYnYr6wjcv9H4O0Hg="
    },

    {
      nomeProduto: "Coxinha de Frango",
      card: "https://media.istockphoto.com/id/1298993369/pt/foto/brazilian-snacks.jpg?b=1&s=612x612&w=0&k=20&c=MF8Ust71gDVCUtqYlojqWVMucL2gAHQORb1Ps9LFZZ4="
    },

    {
      nomeProduto: "Petit Gateau",
      card: "https://media.istockphoto.com/id/512820236/pt/foto/lava-bolo-de-chocolate-com-gelado.jpg?s=612x612&w=0&k=20&c=GZ0WMh2ebG-1Tua2koHXq74hel5ccSdbZ752ShtfjRg="
    },
  ]

  return (
    <>

      <SecaoCardapio nomeProduto="Mais pedidos" produto={maisPedidos} />
      <SecaoCardapio nomeProduto="Cardápio" produto={produto} />
      
    </>
     
  )
}
