const articles = [
  {
    id: 1,
    title: "Introduzione a React",
    text: "React è una libreria JavaScript utilizzata per costruire interfacce utente.",
  },
  {
    id: 2,
    title: "Cos'è un componente",
    text: "I componenti sono blocchi riutilizzabili che compongono un'applicazione React.",
  },
  {
    id: 3,
    title: "Gestire lo stato con useState",
    text: "Lo state permette ai componenti di React di gestire dati dinamici.",
  },
  {
    id: 4,
    title: "Le props in React",
    text: "Le props permettono di passare dati da un componente padre a uno figlio.",
  },
  {
    id: 5,
    title: "Il rendering delle liste",
    text: "In React le liste vengono renderizzate utilizzando metodi come map().",
  },
];

function App() {
  return (
    <>
    {/* Articles */}
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            {articles.map((item) => (
              <div className="card mb-3" key={item.id}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container">
      <div className="form">
        <input className="form-control mt-5" type="text" />
        <div className="btn btn-primary mt-3">Carica</div>
      </div>
      </div>
    </>
  );
}

export default App;
