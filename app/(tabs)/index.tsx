import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        <Text style={styles.title}>
          Halo Selamat Datang
        </Text>

        <Text style={styles.text}>
          Hanna Tassia Telaumbanua
        </Text>

        <Text style={styles.subtext}>
          2405102127
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    width: 280,

    // shadow biar keliatan modern
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  image: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  text: {
    fontSize: 18,
    fontWeight: '600',
  },

  subtext: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
});