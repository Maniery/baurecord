/**
 * Formata uma data ISO (AAAA-MM-DD) como DD/MM/AAAA.
 * Feito manualmente (sem Date/Intl) para evitar problemas de fuso horário
 * e diferenças de suporte a Intl entre plataformas.
 */
export function formatDate(iso: string): string {
  const [ano, mes, dia] = iso.split('-');
  return `${dia}/${mes}/${ano}`;
}

/** Ex.: "10/01/2024 – 20/01/2024" */
export function formatDateRange(inicio: string, fim: string): string {
  return `${formatDate(inicio)} – ${formatDate(fim)}`;
}
