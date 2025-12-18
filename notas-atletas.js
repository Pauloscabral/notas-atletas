class Pontuacao {
    constructor(atletasArray){
         this.atletas = atletasArray;
    }
     obterNotas(notaAtleta){
      for (let i = 0; i < this.atletas.length; i++) {
         const atleta = this.atletas.find(a => a.nome === notaAtleta);//1-Utilizar o for para percorrer a matriz
         if (atleta) {
            let notasOrdenadas = [...atleta.notas].sort((a, b) => a - b);//2-Ordenar a matriz
            let notasMeio = notasOrdenadas.slice(1,4);//3-4-Notas excluíndo as notas Maior e menor
            const somaNotas = notasMeio.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;}, 0);//5-somar os notas
            let media = (somaNotas / notasMeio.length);//obter a média
           
           console.log(`Atleta: ${atleta.nome}`);
           console.log(`Notas obtidas: ${notasOrdenadas}`);            
           console.log(`Média válida: ${media}
           `);
           
           return//somaNotas.toFixed(2);
         } 
       }
   }
};


let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

const pontuacao = new Pontuacao(atletas);
pontuacao.obterNotas("Cesar Abascal");
pontuacao.obterNotas("Fernando Puntel");
pontuacao.obterNotas("Daiane Jelinsky");
pontuacao.obterNotas("Bruno Castro");