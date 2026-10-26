import { Foto, Viagem } from '../types';

/** Gera uma URL de imagem estável a partir de uma "seed" (picsum.photos). */
const img = (seed: string, w = 900, h = 675): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const viagens: Viagem[] = [
  {
    id: 'v1',
    titulo: 'Verão em Lisboa',
    destino: 'Lisboa',
    pais: 'Portugal',
    descricao:
      'Dez dias explorando bondes, miradouros, pastéis de nata e o pôr do sol no Tejo.',
    capaUri: img('lisboa-capa'),
    dataInicio: '2024-01-10',
    dataFim: '2024-01-20',
    fotos: [
      {
        id: 'f1',
        viagemId: 'v1',
        titulo: 'Bonde 28 em Alfama',
        descricao:
          'O clássico bonde amarelo subindo as ladeiras de Alfama logo cedo, antes da chegada da multidão de turistas.',
        local: 'Rua das Escolas Gerais, Alfama',
        dataCaptura: '2024-01-11',
        tags: ['bonde', 'alfama', 'cidade'],
        uri: img('lisboa-bonde'),
      },
      {
        id: 'f2',
        viagemId: 'v1',
        titulo: 'Pôr do sol no Tejo',
        descricao:
          'O céu tingido de laranja visto do Miradouro de Santa Luzia, com o rio Tejo ao fundo.',
        local: 'Miradouro de Santa Luzia',
        dataCaptura: '2024-01-12',
        tags: ['pôr do sol', 'miradouro', 'rio'],
        uri: img('lisboa-tejo'),
      },
      {
        id: 'f3',
        viagemId: 'v1',
        titulo: 'Pastéis de Belém',
        descricao:
          'Pastéis de nata ainda quentes, com canela e açúcar, na confeitaria mais tradicional da cidade.',
        local: 'Rua de Belém, 84–92',
        dataCaptura: '2024-01-14',
        tags: ['gastronomia', 'doces', 'belém'],
        uri: img('lisboa-pasteis'),
      },
      {
        id: 'f4',
        viagemId: 'v1',
        titulo: 'Torre de Belém',
        descricao:
          'A icônica torre manuelina às margens do Tejo, patrimônio da UNESCO.',
        local: 'Av. Brasília, Belém',
        dataCaptura: '2024-01-14',
        tags: ['monumento', 'história', 'belém'],
        uri: img('lisboa-torre'),
      },
    ],
  },
  {
    id: 'v2',
    titulo: 'Trilhas na Patagônia',
    destino: 'El Chaltén',
    pais: 'Argentina',
    descricao:
      'Caminhadas ao redor do Fitz Roy, lagoas glaciais e noites geladas em refúgios.',
    capaUri: img('patagonia-capa'),
    dataInicio: '2023-11-02',
    dataFim: '2023-11-12',
    fotos: [
      {
        id: 'f5',
        viagemId: 'v2',
        titulo: 'Amanhecer no Fitz Roy',
        descricao:
          'Os primeiros raios de sol acendem o granito do Fitz Roy, após uma madrugada de caminhada em silêncio.',
        local: 'Laguna de los Tres',
        dataCaptura: '2023-11-04',
        tags: ['montanha', 'amanhecer', 'trilha'],
        uri: img('patagonia-fitzroy'),
      },
      {
        id: 'f6',
        viagemId: 'v2',
        titulo: 'Laguna Capri',
        descricao:
          'Pausa para o almoço na margem da Laguna Capri, com vista perfeita para as agulhas de granito.',
        local: 'Laguna Capri',
        dataCaptura: '2023-11-05',
        tags: ['lagoa', 'natureza', 'trilha'],
        uri: img('patagonia-capri'),
      },
      {
        id: 'f7',
        viagemId: 'v2',
        titulo: 'Bosque de lengas',
        descricao:
          'Trilha entre árvores de lenga, com folhagem em tons de dourado e ferrugem.',
        local: 'Sendero al Chaltén',
        dataCaptura: '2023-11-07',
        tags: ['floresta', 'outono', 'trilha'],
        uri: img('patagonia-lengas'),
      },
    ],
  },
  {
    id: 'v3',
    titulo: 'Tóquio em Flor',
    destino: 'Tóquio',
    pais: 'Japão',
    descricao:
      'A temporada das cerejeiras, ruas iluminadas, templos antigos e muito ramen.',
    capaUri: img('toquio-capa'),
    dataInicio: '2024-03-28',
    dataFim: '2024-04-08',
    fotos: [
      {
        id: 'f8',
        viagemId: 'v3',
        titulo: 'Cerejeiras em Ueno',
        descricao:
          'Um túnel de flores rosadas no parque Ueno, cheio de famílias fazendo hanami.',
        local: 'Parque Ueno, Taito',
        dataCaptura: '2024-03-30',
        tags: ['sakura', 'parque', 'primavera'],
        uri: img('toquio-sakura'),
      },
      {
        id: 'f9',
        viagemId: 'v3',
        titulo: 'Cruzamento de Shibuya',
        descricao:
          'O cruzamento mais movimentado do mundo visto do alto, com centenas de pessoas atravessando ao mesmo tempo.',
        local: 'Shibuya Crossing',
        dataCaptura: '2024-04-01',
        tags: ['cidade', 'noite', 'urbano'],
        uri: img('toquio-shibuya'),
      },
      {
        id: 'f10',
        viagemId: 'v3',
        titulo: 'Templo Senso-ji',
        descricao:
          'O portão Kaminarimon e a rua Nakamise logo ao amanhecer, ainda silenciosa.',
        local: 'Asakusa, Taito',
        dataCaptura: '2024-04-03',
        tags: ['templo', 'história', 'cultura'],
        uri: img('toquio-sensoji'),
      },
      {
        id: 'f11',
        viagemId: 'v3',
        titulo: 'Ramen em Shinjuku',
        descricao:
          'Uma tigela fumegante de tonkotsu num balcão apertado de apenas oito lugares.',
        local: 'Omoide Yokocho, Shinjuku',
        dataCaptura: '2024-04-04',
        tags: ['gastronomia', 'ramen', 'noite'],
        uri: img('toquio-ramen'),
      },
    ],
  },
];

/** Busca uma viagem pelo ID. */
export function getViagemById(id: string): Viagem | undefined {
  return viagens.find((v) => v.id === id);
}

/** Busca uma foto pelo ID dentro de uma viagem. */
export function getFotoById(viagemId: string, fotoId: string): Foto | undefined {
  return getViagemById(viagemId)?.fotos.find((f) => f.id === fotoId);
}
