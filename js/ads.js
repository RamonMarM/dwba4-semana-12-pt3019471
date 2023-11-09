class Ads extends React.Component {
 
  constructor() {
    super();
    this.state = [{disciplina: "Sistemas Operacionais", carga: 66.7, periodo: "Noturno"},
                  {disciplina: "Inglês", carga: 33.3, periodo: "Noturno"},
                  {disciplina: "Laboratório de Estruturas de Dados e Programação", carga: 33.3, periodo: "Noturno"},
                  {disciplina: "Introdução a Banco de Dados", carga: 66.7, periodo: "Noturno"}
                 ];
  }
  render() {
    return (
      <div>
        <h2><center> Componentes Curriculares </center></h2>
        <table id="grade">
          <tr>
            <th>DISCIPLINA</th>
            <th>CARGA</th>
            <th>PERIODO</th>
          </tr>
        {this.state.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.disciplina}</td>
              <td>{val.carga}</td>
              <td>{val.periodo}</td>
            </tr>
          )
        })}
      </table>
      </div>
    );
  }
}
ReactDOM.render(<Ads />, document.getElementById('ads'));