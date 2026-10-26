# 🧳 Baú de Recordações

Aplicativo móvel de **banco de imagens de viagens**, desenvolvido em **React Native** com **TypeScript**. O usuário navega por um catálogo de viagens, abre a galeria de fotos de cada uma e vê os detalhes completos de cada foto (descrição, local, data e tags).

Os dados são **mockados** (estáticos), então o app funciona sem back-end.

## 📱 Telas

| Home (Catálogo de viagens) | Viagem (Galeria de fotos) | Detalhes da foto |
|:---:|:---:|:---:|
| ![Home](docs/screenshots/home.png) | ![Viagem](docs/screenshots/trip.png) | ![Detalhes](docs/screenshots/photo-detail.png) |

### 1. Home – Catálogo de viagens
Lista as viagens com imagem de capa, título, destino, período e quantidade de fotos. Ao tocar em uma viagem, o app navega para a galeria passando o `viagemId` como parâmetro de rota.

### 2. Viagem – Galeria de fotos
Exibe as fotos da viagem selecionada em uma grade de duas colunas, cada uma com miniatura, legenda curta e data. O título do cabeçalho é atualizado dinamicamente com o nome da viagem. Ao tocar em uma foto, o app abre a tela de detalhes.

### 3. Detalhes da foto
Mostra a foto em destaque, a descrição completa, o local exato, a data da captura e as tags. Possui um botão para voltar à galeria.

## 🛠️ Tecnologias

- [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/) (SDK 58)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/) (`@react-navigation/native` e `@react-navigation/stack`)
- `react-native-screens`, `react-native-safe-area-context` e `react-native-gesture-handler`

## 📂 Estrutura do projeto

```
baurecord/
├── App.tsx                      # Ponto de entrada
├── docs/screenshots/            # Capturas de tela usadas neste README
└── src/
    ├── types.ts                 # Interfaces Foto e Viagem + RootStackParamList
    ├── theme.ts                 # Cores, espaçamentos e raios de borda
    ├── data/
    │   └── mockData.ts          # Dados mockados e funções de busca por ID
    ├── navigation/
    │   └── AppNavigator.tsx     # Configuração do Stack Navigator
    ├── screens/
    │   ├── HomeScreen.tsx
    │   ├── TripScreen.tsx
    │   └── PhotoDetailScreen.tsx
    └── utils/
        └── formatDate.ts        # Formatação de datas (AAAA-MM-DD → DD/MM/AAAA)
```

## 🧩 Modelo de dados

```ts
interface Foto {
  id: string;
  viagemId: string;
  titulo: string;
  descricao: string;
  local: string;
  dataCaptura: string; // ISO (AAAA-MM-DD)
  tags: string[];
  uri: string;
}

interface Viagem {
  id: string;
  titulo: string;
  destino: string;
  pais: string;
  descricao: string;
  capaUri: string;
  dataInicio: string;  // ISO (AAAA-MM-DD)
  dataFim: string;     // ISO (AAAA-MM-DD)
  fotos: Foto[];
}
```

A navegação é tipada com `RootStackParamList`, que define os parâmetros de cada rota (`Home`, `Trip` e `PhotoDetail`). Apenas **IDs** trafegam entre as telas, valores serializáveis, como recomenda a [documentação do React Navigation](https://reactnavigation.org/docs/params/).

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) LTS (recomenda-se instalar via [nvm](https://github.com/nvm-sh/nvm))
- App **Expo Go** instalado no celular (Android ou iOS)
- Celular e computador na **mesma rede Wi-Fi**

### Passos

```bash
# 1. Clonar o repositório
git clone https://github.com/Maniery/baurecord.git
cd baurecord

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento
npx expo start
```

Escaneie o QR code exibido no terminal com o Expo Go (Android) ou com a câmera (iOS).

> Se a conexão pela rede local falhar, use `npx expo start --tunnel`.

### Verificação de tipos

```bash
npx tsc --noEmit
```

## ℹ️ Observações

- As imagens dos mocks vêm do serviço [picsum.photos](https://picsum.photos/) e **precisam de conexão com a internet**. Elas são ilustrativas e não correspondem aos títulos das fotos.
- Em uma versão futura, os dados mockados podem ser substituídos por uma API ou por armazenamento local.

## 👤 Autor

Desenvolvido por [Maniery](https://github.com/Maniery)
