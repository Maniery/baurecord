import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { viagens } from '../data/mockData';
import { RootStackParamList, Viagem } from '../types';
import { colors, radius, spacing } from '../theme';
import { formatDateRange } from '../utils/formatDate';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

/** Tela 1 – Catálogo de viagens. */
export default function HomeScreen({ navigation }: Props) {
  const renderItem = ({ item }: ListRenderItemInfo<Viagem>) => (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Abrir viagem ${item.titulo}`}
      // Passamos só o ID; a tela de destino busca o restante dos dados.
      onPress={() => navigation.navigate('Trip', { viagemId: item.id })}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <Image source={{ uri: item.capaUri }} style={styles.cover} />

      <View style={styles.cardBody}>
        <Text style={styles.title}>{item.titulo}</Text>
        <Text style={styles.destination}>
          📍 {item.destino}, {item.pais}
        </Text>
        <Text style={styles.date}>
          📅 {formatDateRange(item.dataInicio, item.dataFim)}
        </Text>
        <Text style={styles.count}>
          {item.fotos.length} {item.fotos.length === 1 ? 'foto' : 'fotos'}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={viagens}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => <View style={{ height: spacing.md }} />}
      ListEmptyComponent={
        <Text style={styles.empty}>Nenhuma viagem cadastrada ainda.</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: spacing.md },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    // Sombra (iOS) + elevation (Android)
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardPressed: { opacity: 0.85 },
  cover: { width: '100%', height: 180, backgroundColor: colors.border },
  cardBody: { padding: spacing.md, gap: spacing.xs },
  title: { fontSize: 20, fontWeight: '700', color: colors.text },
  destination: { fontSize: 14, color: colors.textMuted },
  date: { fontSize: 14, color: colors.textMuted },
  count: {
    marginTop: spacing.xs,
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  empty: { textAlign: 'center', color: colors.textMuted, marginTop: spacing.lg },
});
