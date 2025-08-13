# Ordo Realitas

Hub para mesas de RPG **Ordem Paranormal RPG**, com suporte para:
- Login por token de sala
- Área do mestre (admin)
- Área de jogo com mapas, fichas e informações de combate

---

## 🚀 Tecnologias
- React
- React Router
- Firebase (Firestore + Storage)
- Yarn

---

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/ordo-realitas.git
cd ordo-realitas
```

2. **Instale as dependências**
```bash
yarn install
```

3. 🔥**Configurando Firebase**
Acesse Firebase Console.

Clique em Adicionar Projeto e dê um nome (ex: ordo-realitas).
Ative Firestore Database e Storage no painel.
Vá em Configurações do Projeto > Suas Apps > Web e copie o objeto firebaseConfig.
No projeto, crie um arquivo src/firebase.js e cole a configuração:
```bash
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJECT_ID.appspot.com",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

4. ▶️**Executando o projeto**
```bash
yarn start
```
O projeto deverá ser aberta em http://localhost:3000.

**Observações**
- O projeto não exige autenticação de usuário, mas use Firestore Rules para proteger os dados por token de sala.
- Como é para uso pessoal, a versão gratuita do Firebase é suficiente.
