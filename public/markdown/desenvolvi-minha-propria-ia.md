# Como criei uma IA que toca música de graça e superei os desafios de arquitetura serverless

O desenvolvimento de aplicações que utilizam Inteligência Artificial está avançando a uma velocidade vertiginosa. No entanto, o ecossistema atual está cheio de interfaces bonitas que, por trás, são apenas um clone básico e puramente textual do ChatGPT. 

Sempre fui ligado à música, então o meu caminho não poderia ter sido diferente: decidi construir o **BeatGenius**, um "sommelier" de música autónomo que desenha experiências musicais personalizadas com base no humor do utilizador, geolocalização e meteorologia em tempo real.

Mais do que uma aplicação de reprodução de música, este projeto nasceu como um autêntico laboratório de arquitetura para testar os limites técnicos das tecnologias de IA atuais em produção.

---

# Os Critérios de Desenvolvimento

Para que o projeto se destacasse como um produto robusto de engenharia de software, estabeleci três critérios fundamentais de avaliação durante o desenvolvimento:

- **Data Grounding:** O sistema consegue garantir que a informação fornecida é verdadeira e livre de alucinações?
- **Infraestrutura e Resiliência:** O backend consegue lidar com múltiplos requests assíncronos e chamadas de APIs sem estourar os limites de timeout da cloud?
- **Desempenho e Interface:** A interface lida bem com a concorrência entre fluxos de áudio ao vivo e renderização de texto por streaming em tempo real?

Abaixo, detalho como cada um destes pilares foi resolvido na arquitetura do ecossistema.

---

# 🛠️ Os Desafios Técnicos e a Arquitetura

### 1️⃣ Data Grounding & Zero Alucinações

Para garantir que a IA nunca inventa músicas ou artistas que não existem, retirei por completo o controlo criativo de dados brutos do LLM. 

Utilizei a abordagem de **Tool Calling (Function Calling)** via **LangChain** para forçar o modelo (**Gemini 2.5 Flash**) a consultar de forma estritamente determinística APIs reais de metadados (**Last.fm**) e meteorologia (**Open-Meteo**). O papel da IA é curar e contextualizar a experiência com base no ambiente do utilizador, mas os dados estruturados que chegam ao ecrã são 100% reais.

---

### 2️⃣ Contornar Limitações de Serverless (Timeout)

Fazer o deploy de agentes de IA autónomos que dependem de encadeamento de múltiplas APIs externas na **Vercel (Hobby Tier)** traz um desafio crítico de infraestrutura: o limite estrito de **10 segundos** de execução por serverless function.

Resolvi este obstáculo técnico desenhando o backend com **Next.js Route Handlers** e o ecossistema da **Vercel AI SDK**, implementando **Streaming de Respostas nativo via Server-Sent Events (SSE)**. A lógica é simples e eficiente: a cada palavra devolvida pelo pedido (e renderizada de imediato na interface do cliente), o tempo de execução da função serverless faz reset. Bingo!

---

### 3️⃣ Frontend com Foco em Performance

Como programador com **mais de 7 anos de experiência no desenvolvimento de interfaces**, sabia que o maior perigo no lado do cliente seria a quebra de frames devido à atividade intensa de processamento em segundo plano.

Criei um dashboard dinâmico onde o estado global do leitor de áudio (integrado de forma nativa com a **YouTube IFrame API**) e o fluxo constante de texto por streaming enviado pela IA coexistem em harmonia. O resultado é um fluxo assíncrono fluido, livre de bloqueios no browser ou re-renderizações desnecessárias da árvore de componentes.

---

## Considerações Finais

O projeto está totalmente funcional, responsivo e disponível de forma gratuita para testes. Se quiser analisar a interface ou auditar o fluxo de engenharia, os links estão abertos:

🔗 **Experimente a aplicação em:** [https://beatgenius.pablomorales.dev/](https://beatgenius.pablomorales.dev/)

### E do vosso lado?
Para quem trabalha ativamente no ecossistema de inteligência artificial generativa: **como têm gerido os limites de timeout e a latência ao colocar agentes autónomos complexos em ambientes serverless?** 

Deixem as vossas soluções e visões de arquitetura nos comentários! 👇