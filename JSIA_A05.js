let tarefas = [];
let opcao = "";

let sexo = "";
let saudacao = "";

while (sexo !== "M" && sexo !== "F") {
  sexo = prompt("Qual o seu sexo? (M/F)").toUpperCase();

  if (sexo === "M") {
    saudacao = "Bem-vindo!";
  } else if (sexo === "F") {
    saudacao = "Bem-vinda!";
  } else {
    alert("=== Ateção: opção inválida. Digite apenas 'M' para masculino ou 'F' para feminino. ===");
  }
}

alert(saudacao + " Vamos gerenciar suas tarefas!");

while (opcao !== "5") {
  opcao = prompt(
    "===| Escolha uma opção: |===\n" +
    "1 - Adicionar Tarefa\n" +
    "2 - Listar Tarefas\n" +
    "3 - Remover Tarefa\n" +
    "4 - Concluir Tarefa\n" +
    "5 - Sair"
  );

  if (opcao === "1") {
    let novaTarefa = prompt("Digite o nome da nova tarefa:");
    tarefas.push(novaTarefa);
    alert("=== Tarefa adicionada com sucesso! ===");
  } else if (opcao === "2") {
    if (tarefas.length === 0) {
      alert("=== Nenhuma tarefa na lista. ===");
    } else {
      let lista = "Lista de Tarefas:\n";
      for (let i = 0; i < tarefas.length; i++) {
        lista += i + " - " + tarefas[i] + "\n";
      }
      alert(lista);
    }
  } else if (opcao === "3") {
    let indice = prompt("Digite o número da tarefa que deseja remover:");
    if (indice >= 0 && indice < tarefas.length) {
      tarefas.splice(indice, 1);
      alert("=== Tarefa removida com sucesso! ===");
    } else {
      alert("=== Atenção: Número inválido. ===");
    }
  } else if (opcao === "4") {
    let indice = prompt("Digite o número da tarefa que deseja concluir:");
    if (indice >= 0 && indice < tarefas.length) {
      tarefas[indice] = "✅ " + tarefas[indice];
      alert("=== Tarefa concluída com sucesso! ===");
    } else {
      alert("=== Atenção: Número inválido. ===");
    }
  } else if (opcao === "5") {
    alert("===| Encerrando o programa... |===");
  } else {
    alert("=== Atenção: opção inválida. Tente novamente. ===");
  }
}
