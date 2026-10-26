/**
 * Modelos de dados e tipagem de navegação do "Baú de Recordações".
 */

/** Uma foto registrada durante uma viagem. */
export interface Foto {
  id: string;
  /** ID da viagem à qual a foto pertence. */
  viagemId: string;
  /** Legenda curta exibida na galeria. */
  titulo: string;
  /** Descrição completa exibida na tela de detalhes. */
  descricao: string;
  /** Local exato onde a foto foi tirada. */
  local: string;
  /** Data da captura no formato ISO (AAAA-MM-DD). */
  dataCaptura: string;
  tags: string[];
  /** URL da imagem. */
  uri: string;
}

/** Uma viagem, com suas fotos. */
export interface Viagem {
  id: string;
  titulo: string;
  destino: string;
  pais: string;
  descricao: string;
  capaUri: string;
  /** Datas no formato ISO (AAAA-MM-DD). */
  dataInicio: string;
  dataFim: string;
  fotos: Foto[];
}

/**
 * Rotas do Stack Navigator e seus parâmetros.
 * Passamos apenas IDs (valores serializáveis), como recomenda a
 * documentação do React Navigation: https://reactnavigation.org/docs/params/
 */
export type RootStackParamList = {
  Home: undefined;
  Trip: { viagemId: string };
  PhotoDetail: { viagemId: string; fotoId: string };
};
