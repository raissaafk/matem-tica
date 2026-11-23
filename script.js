const LETRAS = ["A", "B", "C", "D", "E"];
const MAX_TENTATIVAS = 3;
const $ = (id) => document.getElementById(id);

let rodada = [], atual = 0, selecionada = null, erradas = [], estado = "aberta", resultados = [];

function embaralhar(lista) {
  const r = [...lista];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

// Embaralha as questões dentro de cada nível (mantém a dificuldade crescente) e as alternativas.
function novaRodada() {
  const niveis = [...new Set(QUESTOES.map((q) => q.level))].sort((a, b) => a - b);
  rodada = niveis.flatMap((n) =>
    embaralhar(QUESTOES.filter((q) => q.level === n)).map((q) => ({ ...q, ordem: embaralhar([0, 1, 2, 3, 4]) }))
  );
  atual = 0; resultados = [];
  $("tela-resultado").hidden = true; $("tela-quiz").hidden = false;
  carregarQuestao();
}

function carregarQuestao() {
  selecionada = null; erradas = []; estado = "aberta";
  render();
}

function posCorreta(q) { return q.ordem.indexOf(q.answer); }

function render() {
  const q = rodada[atual], total = rodada.length, certa = posCorreta(q);
  const resolvida = estado !== "aberta";
  $("num").textContent = atual + 1;
  const pct = Math.round((resultados.length / total) * 100);
  $("pct").textContent = pct; $("barra").style.width = pct + "%";
  $("nivel").textContent = `Nível ${q.level} · ${NIVEIS[q.level]}`;
  $("enunciado").textContent = q.text;

  document.querySelectorAll(".tentativas i").forEach((el, i) => {
    el.className = i < erradas.length ? "erro" : i === erradas.length && estado === "certa" ? "certo" : "";
  });

  const box = $("alternativas"); box.innerHTML = "";
  q.ordem.forEach((orig, pos) => {
    const b = document.createElement("button");
    b.className = "alt";
    if (resolvida && pos === certa) b.classList.add("correta");
    else if (erradas.includes(pos)) b.classList.add("errada");
    else if (selecionada === pos) b.classList.add("selecionada");
    b.disabled = resolvida || erradas.includes(pos);
    b.innerHTML = `<span class="letra">${LETRAS[pos]}</span><span></span>`;
    b.lastChild.textContent = q.options[orig];
    b.onclick = () => { selecionada = pos; render(); };
    box.appendChild(b);
  });

  let msg = null;
  if (estado === "certa") msg = ["ok", "Resposta correta! Muito bem."];
  else if (estado === "esgotada") msg = ["ruim", `Tentativas esgotadas. A resposta correta é a alternativa ${LETRAS[certa]}.`];
  else if (erradas.length === 1) msg = ["ruim", "Resposta incorreta. Tente novamente."];
  else if (erradas.length === 2) msg = ["ruim", "Resposta incorreta. Você possui somente uma tentativa restante."];
  const aviso = $("aviso");
  aviso.hidden = !msg;
  if (msg) { aviso.className = "aviso " + msg[0]; aviso.textContent = msg[1]; }

  $("confirmar").hidden = resolvida;
  $("confirmar").disabled = selecionada === null;
  $("proxima").hidden = !resolvida;
  $("proxima").textContent = atual + 1 < total ? "Próxima questão →" : "Ver resultado";
}

function confirmar() {
  if (selecionada === null || estado !== "aberta") return;
  const q = rodada[atual];
  if (selecionada === posCorreta(q)) {
    estado = "certa";
    resultados.push(erradas.length === 0 ? "primeira" : "depois");
  } else {
    erradas.push(selecionada); selecionada = null;
    if (erradas.length >= MAX_TENTATIVAS) { estado = "esgotada"; resultados.push("esgotada"); }
  }
  render();
}

function proxima() {
  if (atual + 1 < rodada.length) { atual++; carregarQuestao(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  else mostrarResultado();
}

function mostrarResultado() {
  const contar = (t) => resultados.filter((r) => r === t).length;
  const primeira = contar("primeira"), depois = contar("depois");
  const aproveitamento = ((primeira + depois) / 82) * 100;
  $("aproveitamento").textContent = aproveitamento.toFixed(1).replace(".", ",") + "%";
  $("r-total").textContent = resultados.length;
  $("r-primeira").textContent = primeira;
  $("r-depois").textContent = depois;
  $("r-esgotadas").textContent = contar("esgotada");
  $("tela-quiz").hidden = true; $("tela-resultado").hidden = false;
}

$("confirmar").onclick = confirmar;
$("proxima").onclick = proxima;
$("reiniciar1").onclick = novaRodada;
$("reiniciar2").onclick = novaRodada;
novaRodada();
