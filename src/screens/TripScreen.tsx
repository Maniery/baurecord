import React, { useLayoutEffect } from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { getViagemById } from '../data/mockData';
import { Foto, RootStackParamList } from '../types';
import { colors, radius, spacing } from '../theme';
import { formatDate, formatDateRange } from '../utils/formatDate';

type Props = StackScreenProps<RootStackParamList, 'Trip'>;

const NUM_COLUMNS = 2;

/** Tela 2 – Galeria de fotos da viagem selecionada. */
export default function TripScreen({ navigation, route }: Props) {
  const { viagemId } = route.params;
  const viagem = getViagemById(viagemId);
  const { width } = useWindowDimensions();

  // Largura de cada célula = (tela - margens - espaço entre colunas) / colunas
  const itemWidth =
    (width - spacing.md * 2 - spacing.sm * (NUM_COLUMNS - 1)) / NUM_COLUMNS;

  // Define o título do cabeçalho com o nome da viagem.
  useLayoutEffect(() => {
    if (viagem) navigation.setOptions({ title: viagem.titulo });
  }, [navigation, viagem]);

  if (!viagem) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFound}>Viagem não encontrada.</Text>
      </View>
    );
  }

  const renderItem = ({ item }: ListRenderItemInfo<Foto>) => (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Abrir foto ${item.titulo}`}
      onPress={() =>
        navigation.navigate('PhotoDetail', {
          viagemId: viagem.id,
          fotoId: item.id,
        })
      }
      style={({ pressed }) => [
        styles.item,
        { width: itemWidth },
        pressed && styles.itemPressed,
      ]}
    >
      <Image
        source={{ uri: item.uri }}
        style={[styles.photo, { width: itemWidth }]}
      />
      <View style={styles.itemBody}>
        <Text style={styles.photoTitle} numberOfLines={1}>
          {item.titulo}
        </Text>
        <Text style={styles.photoDate}>{formatDate(item.dataCaptura)}</Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={viagem.fotos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={NUM_COLUMNS}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.destination}>
            📍 {viagem.destino}, {viagem.pais}
          </Text>
          <Text style={styles.period}>
            📅 {formatDateRange(viagem.dataInicio, viagem.dataFim)}
          </Text>
          <Text style={styles.description}>{viagem.descricao}</Text>
        </View>
      }
      ListEmptyComponent={
        <Text style={styles.notFound}>Esta viagem ainda não tem fotos.</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  notFound: { color: colors.textMuted, textAlign: 'center' },
  list: { padding: spacing.md },
  row: { gap: spacing.sm, marginBottom: spacing.sm },
  header: { marginBottom: spacing.md, gap: spacing.xs },
  destination: { fontSize: 16, fontWeight: '600', color: colors.text },
  period: { fontSize: 14, color: colors.textMuted },
  description: { marginTop: spacing.xs, fontSize: 14, color: colors.text },
  item: {
    backgroundColor: colors.surface,
    borderRadius: radius.sm,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  itemPressed: { opacity: 0.85 },
  photo: { height: 120, backgroundColor: colors.border },
  itemBody: { padding: spacing.sm },
  photoTitle: { fontSize: 14, fontWeight: '600', color: colors.text },
  photoDate: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
});
