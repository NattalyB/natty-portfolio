// ===== CTA do herói leva até o formulário de agendamento =====
document.getElementById('cta-hero').addEventListener('click', () => {
  document.getElementById('agendar').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('nome').focus({ preventScroll: true });
});

// ===== Consumo da API ViaCEP =====
const cepInput = document.getElementById('cep');
const cidadeInput = document.getElementById('cidade');
const cepStatus = document.getElementById('cep-status');

cepInput.addEventListener('input', () => {
  // mantém só números e limita a 8 dígitos
  let digits = cepInput.value.replace(/\D/g, '').slice(0, 8);
  cepInput.value = digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;

  if (digits.length === 8) {
    buscarCep(digits);
  } else {
    cidadeInput.value = '';
    cepStatus.textContent = '';
    cepStatus.classList.remove('is-error');
  }
});

async function buscarCep(cep) {
  cepStatus.textContent = 'Buscando endereço...';
  cepStatus.classList.remove('is-error');

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      cidadeInput.value = '';
      cepStatus.textContent = 'CEP não encontrado.';
      cepStatus.classList.add('is-error');
      return;
    }

    cidadeInput.value = `${dados.localidade} / ${dados.uf}`;
    cepStatus.textContent = 'Endereço encontrado!';
  } catch (erro) {
    cidadeInput.value = '';
    cepStatus.textContent = 'Não foi possível consultar o CEP agora.';
    cepStatus.classList.add('is-error');
  }
}

// ===== Envio do formulário (sem reload, mensagem de agradecimento) =====
const form = document.getElementById('agendar-form');
const thankYou = document.getElementById('thank-you');
const thankYouMsg = document.getElementById('thank-you-msg');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!nome || !email) {
    return; // validação simples via HTML5 (required) já cobre a maioria dos casos
  }

  const primeiroNome = nome.split(' ')[0];
  thankYouMsg.textContent = `Recebi seu pedido, ${primeiroNome}! Vou confirmar o horário pelo e-mail ${email} em breve.`;

  form.hidden = true;
  thankYou.hidden = false;
});

// ===== Permite enviar outro pedido sem recarregar a página =====
document.getElementById('thank-you-reset').addEventListener('click', () => {
  form.reset();
  cidadeInput.value = '';
  cepStatus.textContent = '';
  thankYou.hidden = true;
  form.hidden = false;
});
