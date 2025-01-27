const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');
    
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult('Peso inválido.', false);
        return;
    }

    if (!height) {
        setResult('Altura inválida.', false);
        return;
    }

    const imc = getImc(weight, height);
    const categoryImc = getCategory(imc);

    const msg = `Seu IMC é ${imc} (${categoryImc}).`;
    setResult(msg, true);
});

function getCategory (imc) {
    const category = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
        'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return category[5];

    if (imc >= 34.9) return category[4];

    if (imc >= 29.9) return category[3];

    if (imc >= 24.9) return category[2];

    if (imc >= 18.5) return category[1];

    if (imc < 18.5) return category[0];
}

function getImc(weight, height) {
    const imc = weight / height ** 2;
    return imc.toFixed(2);
}

//função para criar e retornar P 
function createP() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = createP();

    if (isValid) {
        p.classList.add('phrase-result');
    } else {
        p.classList.add('incorrect');
    }

    p.innerHTML = msg;
    result.appendChild(p);
}

