import { useState } from "react";
const articles = [
  "Introduzione a React",
  "Cos'è un componente",
  "Gestire lo stato con useState",
  "Le props in React",
  "Il rendering delle liste",
];

function App() {
  const [newArticle, setNewArticle] = useState("");
  const [article, setArticle] = useState(articles);

  function handlerSubmit(e) {
    e.preventDefault();
    setArticle([newArticle, ...article]);
  }

  return (
    <>
      {/* Articles */}
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            {article.map((item, index) => (
              <div className="card mb-3" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{item}</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container">
        <form className="form" onSubmit={handlerSubmit}>
          <input
            className="form-control mt-5"
            type="text"
            value={newArticle}
            onChange={(e) => setNewArticle(e.target.value)}
          />
          <button className="btn btn-primary mt-3" type="submit">
            Carica
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
