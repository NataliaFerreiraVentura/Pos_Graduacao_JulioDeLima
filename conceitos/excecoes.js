/*
tentar {
// conexao com o banco de dados por exemplo}pegar (erro/exception) { salvar em algum lugar e exibir}

palavra reservada para lançar erro propositalmente(throw)
normalmente usamos para tratar erros 
*/
try {
  console.log('Tentando alimentar o pet')
//   throw new Error('Pet não comeu')
//tentar conectar no banco 
// exercutar uma query
}catch(exception) {
  console.log('Ocorreu um erro: ', exception.message)

  // capturar a excecao
}finally{
    console.log(`Sempre serei executado`)
    // fechar a conecta com o banco (garantir que foi fechado)
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero!");
  }
  return a / b;
}

try {
  let resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (erro) {
  console.log("Erro capturado:", erro.message);
}