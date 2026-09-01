import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  FlatList, 
  StatusBar 
} from 'react-native';

export default function App() {
  // Estado inicial com dados simulados da frota
  const [despesas, setDespesas] = useState([
    { id: '1', tipo: 'Combustível', valor: 'R$ 220,00', data: '01/09/2026', km: '215 km' },
    { id: '2', tipo: 'Manutenção (Óleo)', valor: 'R$ 180,00', data: '28/08/2026', km: '1.200 km' },
    { id: '3', tipo: 'Lava-jato', valor: 'R$ 50,00', data: '20/08/2026', km: '890 km' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.cardItem}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.tipo}</Text>
        <Text style={styles.cardValor}>{item.valor}</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.cardSubtext}>Data: {item.data}</Text>
        <Text style={styles.cardSubtext}>Odômetro: {item.km}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gestão de Frota & Viagens</Text>
        <Text style={styles.headerSubtitle}>Painel de Controle de Despesas</Text>
      </View>

      {/* Cards de Resumo */}
      <View style={styles.metricsContainer}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Total Mês</Text>
          <Text style={styles.metricValue}>R$ 450,00</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Rodagem Média</Text>
          <Text style={styles.metricValue}>200 km/dia</Text>
        </View>
      </View>

      {/* Lista de Histórico */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Últimos Registros</Text>
        <FlatList
          data={despesas}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Botão de Novo Registro */}
      <TouchableOpacity 
        style={styles.fabButton}
        onPress={() => alert('Em breve: Formulário de novo lançamento!')}
      >
        <Text style={styles.fabButtonText}>+ Registrar Despesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    padding: 20,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  metricLabel: {
    fontSize: 12,
    color: '#94a3b8',
    textTransform: 'uppercase',
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginTop: 6,
  },
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f1f5f9',
    marginBottom: 12,
  },
  cardItem: {
    backgroundColor: '#1e293b',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8fafc',
  },
  cardValor: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4ade80',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },
  cardSubtext: {
    fontSize: 12,
    color: '#94a3b8',
  },
  fabButton: {
    backgroundColor: '#2563eb',
    margin: 16,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  fabButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});