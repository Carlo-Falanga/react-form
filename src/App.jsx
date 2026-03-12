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
    title: "Introduzione a React",
    text: "Lo state permette ai componenti di React di gestire dati dinamici.",
  },
  {
    id: 4,
    title: "Introduzione a React",
    text: "Le props permettono di passare dati da un componente padre a uno figlio.",
  },
  {
    id: 5,
    title: "Introduzione a React",
    text: "In React le liste vengono renderizzate utilizzando metodi come map().",
  },
];

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Article title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde eius corrupti, ut quisquam modi omnis amet odio ipsum vel?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
