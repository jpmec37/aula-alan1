const vetor = ["nome123", 20, "email@gmail.com"];
let verificador = [];

console.log(verificaoUser("nome123123123213", 20, "emialteste@gmai.com"));

function verificaoUser(user, idade, email) {
  const vetor = [user, idade, email];
  for (let i = 0; i <= 4; i++) {
    if (i === 0) {
      if (vetor[i].length > 3) {
        verificador.push(true);
      } else {
        verificador.push(false);
      }
    } else if (i === 1) {
      if (vetor[i] >= 18) {
        verificador.push(true);
      } else {
        verificador.push(false);
      }
    } else if (i === 2) {
      if (vetor[i].indexOf("@") != -1) {
        verificador.push(true);
      } else {
        verificador.push(false);
      }
    }
  }
  if (verificador.indexOf(false) === -1) {
    return "Usuário valido";
  } else {
    return "Usuario Invalido";
  }
}
