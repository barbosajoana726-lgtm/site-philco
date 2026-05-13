import React from "react";
import "./App.css";

const produtos = [
  {
    nome: 'Smart TV 50" Philco QLED',
    preco: "R$ 1.999,90",
    imagem:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80",
  },

  {
    nome: 'Smart TV 32" Philco Roku',
    preco: "R$ 999,90",
    imagem:
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?auto=format&fit=crop&w=900&q=80",
  },

  {
    nome: "Air Fryer Philco 5,5L",
    preco: "R$ 349,90",
    imagem:
      "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=900&q=80",
  },

  {
    nome: "Notebook Philco Rosa",
    preco: "R$ 2.399,90",
    imagem:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  return (
    <div className="site">

      <header className="topo">
        <h1>🎀 Philco Kitty Store 🎀</h1>

        <nav>
          <a href="#produtos">Produtos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero">

        <div className="hero-texto">

          <span>💖 Loja Oficial 💖</span>

          <h2>
            TVs e Eletrônicos <br />
            Philco no tema Hello Kitty
          </h2>

          <p>
            Os melhores produtos Philco com um visual rosa,
            moderno e super fofo 🎀
          </p>

          <button>Ver Produtos</button>

        </div>

      </section>

      <section className="produtos" id="produtos">

        <h2>✨ Produtos em Destaque ✨</h2>

        <div className="grid">

          {produtos.map((produto, index) => (

            <div className="card" key={index}>

              <img src={produto.imagem} alt={produto.nome} />

              <h3>{produto.nome}</h3>

              <strong>{produto.preco}</strong>

              <button>🛒 Comprar</button>

            </div>

          ))}

        </div>

      </section>

      <footer id="contato">

        <p>© 2026 Philco Kitty Store 💖</p>

      </footer>

    </div>
  );
}

export default App;
