## Como iniciar

Para o bom funcionamento do projeto, é necessário ter o Node.js na versão 20 instalado em sua máquina. Caso não tenha,
você pode baixá-lo [aqui](https://nodejs.org/en/).

Além disso, é necessário ter o gerenciador de pacotes Yarn instalado em sua máquina. Caso não tenha, você pode
baixá-lo [aqui](https://yarnpkg.com/).

---

Primeiramente, baixe as dependências necessárias do projeto

```bash
yarn
#or
yarn install
```

Após o download das dependências, você precisa definir suas variáveis de ambiente. Para isso, crie um arquivo `.env` na
raiz do projeto e adicione as seguintes variáveis:

```env
API_URL=http://<host>:<port>
```

Por fim, inicie o projeto

```bash
yarn dev
```

---

Esse projeto foi desenvolvido para auxiliar a paróquia de Santo Afonso Maria de Ligório, localizada no bairro de Capim
Macio, Natal/RN. O projeto foi desenvolvido com o intuito de facilitar a organização de eventos e celebrações.