const dataInicio = new Date("2025-05-26T23:50:00");

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const segundosTotais = Math.floor(diferenca / 1000);
  const dias = Math.floor(segundosTotais / (60 * 60 * 24));
  const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  const formatado = `${dias} dias ${horas.toString().padStart(2, '0')}h `
                  + `${minutos.toString().padStart(2, '0')}min `
                  + `${segundos.toString().padStart(2, '0')}s`;

  document.getElementById("contador").textContent = formatado;
}

setInterval(atualizarContador, 1000);
atualizarContador();
