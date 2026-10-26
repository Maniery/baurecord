import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { getFotoById, getViagemById } from '../data/mockData';
import { RootStackParamList } from '../types';
import { colors, radius, spacing } from '../theme';
import { formatDate } from '../utils/formatDate';

type Props = StackScreenProps<RootStackParamList, 'PhotoDetail'>;

/** Tela 3 – Foto em destaque com informações detalhadas. */
export default function PhotoDetailScreen({ navigation, route }: Props) {
  const { viagemId, fotoId } = route.params;
  const foto = getFotoById(viagemId, fotoId);
  const viagem = getViagemById(viagemId);

  if (!foto) {
    return (
      <View style={styles.centered}>
        <Text style={styles.muted}>Foto não encontrada.</Text>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto em destaque */}
      <Image source={{ uri: foto.uri }} style={styles.photo} resizeMode="cover" />

      <View style={styles.body}>
        <Text style={styles.title}>{foto.titulo}</Text>
        {viagem && <Text style={styles.trip}>Viagem: {viagem.titulo}</Text>}

        <Text style={styles.description}>{foto.descricao}</Text>

        {/* Metadados */}
        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>📍 Local</Text>
            <Text style={styles.infoValue}>{foto.local}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>📅 Capturada em</Text>
            <Text style={styles.infoValue}>{formatDate(foto.dataCaptura)}</Text>
          </View>
        </View>

        {/* Tags */}
        <Text style={styles.sectionTitle}>Tags</Text>
        <View style={styles.tags}>
          {foto.tags.map((tag) => (
            <View key={tag} style={styles.chip}>
              <Text style={styles.chipText}>#{tag}</Text>
            </View>
          ))}
        </View>

        {/* Retorna à galeria anterior */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Voltar para a galeria"
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>← Voltar à galeria</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: spacing.lg },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.md,
  },
  muted: { color: colors.textMuted },
  photo: { width: '100%', aspectRatio: 4 / 3, backgroundColor: colors.border },
  body: { padding: spacing.md, gap: spacing.sm },
  title: { fontSize: 24, fontWeight: '700', color: colors.text },
  trip: { fontSize: 13, color: colors.primary, fontWeight: '600' },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
    marginTop: spacing.xs,
  },
  infoBox: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  infoRow: { gap: 2 },
  infoLabel: { fontSize: 12, color: colors.textMuted, fontWeight: '600' },
  infoValue: { fontSize: 15, color: colors.text },
  sectionTitle: {
    marginTop: spacing.sm,
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  chip: {
    backgroundColor: colors.chip,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radius.pill,
  },
  chipText: { color: colors.primaryDark, fontSize: 13, fontWeight: '600' },
  button: {
    marginTop: spacing.md,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  buttonPressed: { backgroundColor: colors.primaryDark },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});
