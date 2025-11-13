# As 6 Coisas Que Eu Queria Ter Sabido Quando Era um Dev Júnior

A barreira entre o nível júnior e o nível pleno é subjetiva. Alguns acreditam que não é só o conhecimento técnico que define, e que, na verdade, as habilidades interpessoais (como facilidade para trabalhar em equipe, se expressar bem, etc.) são o que coloca os desenvolvedores em níveis diferentes.

Já os mais céticos acreditam que a habilidade de resolver os problemas do mundo real usando código é o grande medidor de nível.

Eu sou do time que acredita que é um pouco de tudo. Uma pessoa com grandes habilidades interpessoais e pouco conhecimento técnico não é um bom programador. Assim como uma enciclopédia viva, mas que não possui o dom da comunicação, também não é um bom programador.

Afinal, o equilíbrio é tudo.

De qualquer forma, existe um conhecimento que eu gostaria de ter tido quando comecei a carreira e que iria me ajudar a ultrapassar essa barreira de níveis mais facilmente.

Trago neste artigo algumas dessas lições em forma de dicas.

## 1. Use o Princípio da Responsabilidade Única

O princípio da responsabilidade única diz que cada método ou função deve ter apenas uma responsabilidade bem definida. Isso facilita a manutenção e a compreensão do código.

**Antes (código desorganizado e difícil de ler):**

```jsx
function process(a, b, c) {
  let x = a + b;
  if (c) {
    x *= 2;
  }
  console.log("Resultado:", x);
  return x;
}
```

**Depois (mais legível e modularizado):**

```javascript
function sum(a, b) {
  return a + b;
}

function doubleIfNeeded(value, shouldDouble) {
  return shouldDouble ? value * 2 : value;
}

function processNumbers(a, b, shouldDouble) {
  const sumResult = sum(a, b);
  return doubleIfNeeded(sumResult, shouldDouble);
}

console.log("Resultado:", processNumbers(2, 3, true));
```

## 2. Nomeiação Clara de Variáveis e Funções

Dar nomes claros e descritivos é essencial para a legibilidade do código. Se você precisa de um comentário para explicar o que uma função faz, talvez o nome não seja bom o suficiente.

**Antes (pouco descritivo):**

```jsx
function d(p) {
  return p * 2;
}
console.log(d(5));
```

**Depois (mais claro):**

```jsx
function doubleNumber(number) {
  return number * 2;
}
console.log(doubleNumber(5));
```

## 3. Evite Funções e Classes Gigantes

Funções grandes dificultam a manutenção do código. O ideal é dividir responsabilidades em partes menores e reutilizáveis.

**Antes (função gigante):**

```jsx
const { jsPDF } = require("jspdf");
const mysql = require("mysql");
const nodemailer = require("nodemailer");

// Classe BookGenerator
class BookGenerator {
  generate() {
    // Gerar PDF
    const doc = new jsPDF();
    doc.setFontSize(40);
    doc.text("My title Book", 35, 25);
    doc.text("Content of the Book", 15, 35);
    doc.save("book.pdf");

    // Salvar dados no banco de dados
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "store",
    });

    connection.connect();
    const author = "My Name";
    const date_create = "1999-01-01";
    const query = "INSERT INTO Book (author, date_create) VALUES (?, ?)";

    connection.query(query, [author, date_create], (err, results) => {
      if (err) throw err;
      console.log("Dados inseridos com sucesso!");
    });

    connection.end();

    // Enviar Email para o usuário
    const transporter = nodemailer.createTransport({
      host: "localhost",
      port: 25,
      secure: false,
    });

    const mailOptions = {
      from: "sample@test.com",
      to: "sample@test.com",
      subject: "My Subject",
      text: "Aqui está o conteúdo do e-mail.",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email enviado: " + info.response);
      }
    });
  }
}

// Criar e executar a função
const generator = new BookGenerator();
generator.generate();
```

**Depois (modularizado):**

```jsx
class DataProcessor {
    constructor(size = 100) {
        this.data = this.generateRandomData(size);
    }

    generateRandomData(size) {
        return Array.from({ length: size }, () => Math.random());
    }

    calculateAverage() {
        return this.data.reduce((sum, num) => sum + num, 0) / this.data.length;
    }

    getSortedData() {
        return [...this.data].sort((a, b) => a - b);
    }

    getReversedData() {
        return [...this.data].reverse();
    }

    countNumbersAbove(value) {
        return this.data.filter(num => num > value).length;
    }

    countEvenOdd() {
        return this.data.reduce(
            (acc, num) => {
                Math.floor(num * 100) % 2 === 0 ? acc.even++ : acc.odd++;
                return acc;
            },
            { even: 0, odd: 0 }
        );
    }

    analyzeData() {
        const average = this.calculateAverage();
        console.log("Average:", average);

        console.log("Sorted Data:", this.getSortedData());
        console.log("Reversed Data:", this.getReversedData());

        console.log("Max:", Math.max(...this.data), "Min:", Math.min(...this.data));
        console.log("Numbers above average:", this.countNumbersAbove(average));

        const { even, odd } = this.countEvenOdd();
        console.log("Even count:", even, "Odd count:", odd);
    }
}

class ObjectProcessor {
    constructor(size = 100) {
        this.obj = this.generateRandomObject(size);
    }

    generateRandomObject(size) {
        return Object.fromEntries(
            Array.from({ length: size }, (_, i) => ["key" + i, Math.random() * 100])
        );
    }

    getKeys() {
        return Object.keys(this.obj);
    }

    getValues() {
        return Object.values(this.obj);
    }

    calculateSum() {
        return this.getValues().reduce((sum, num) => sum + num, 0);
    }

    filterValuesAbove(threshold) {
        return this.getValues().filter(val => val > threshold);
    }

    getSquaredValues() {
        return this.getValues().map(val => val ** 2);
    }

    getTopSortedValues(limit = 10) {
        return this.getSquaredValues().sort((a, b) => b - a).slice(0, limit);
    }

    analyzeObject() {
        console.log("Keys:", this.getKeys());
        console.log("Values:", this.getValues());
        console.log("Sum of values:", this.calculateSum());
        console.log("Values above 50:", this.filterValuesAbove(50));
        console.log("Top 10 squared values:", this.getTopSortedValues());
    }
}

const dataProcessor = new DataProcessor();
dataProcessor.analyzeData();

const objectProcessor = new ObjectProcessor();
objectProcessor.analyzeObject();
```

## 4. Não Reinvente a Roda

Muitas funcionalidades já estão implementadas em bibliotecas ou nas próprias funções nativas da linguagem. Utilize-as!

**Antes (loop manual desnecessário):**

```jsx
const numbers = [1, 2, 3, 4, 5];
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log(doubled);
```

**Depois (usando `map`):**

```jsx
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
```

## 5. Use Async/Await ao Invés de Callbacks Aninhados

Callbacks aninhados tornam o código confuso. Async/Await facilita a leitura e manutenção.

**Antes (callback hell):**

```jsx
function fetchData(callback) {
  setTimeout(() => {
    callback("Dados carregados");
  }, 2000);
}

fetchData((data) => {
  console.log(data);
});
```

**Depois (async/await):**

```jsx
function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve("Dados carregados"), 2000));
}

async function load() {
  const data = await fetchData();
  console.log(data);
}

load();
```

## 6. Evite o Uso Excessivo de `any` no TypeScript

O TypeScript é poderoso, mas o uso excessivo de `any` anula suas vantagens. Utilize tipagem específica.

**Antes (com `any`):**

```tsx
function getUserData(id: any): any {
  return { id, name: "João" };
}
```

**Depois (usando tipos específicos):**

```tsx
type User = {
  id: number;
  name: string;
};

function getUserData(id: number): User {
  return { id, name: "João" };
}
```

## Conclusão

Atravessar a barreira entre júnior e pleno envolve tanto habilidades técnicas quanto interpessoais. Ao aplicar essas dicas, você se tornará um desenvolvedor mais eficiente e preparado para desafios maiores.