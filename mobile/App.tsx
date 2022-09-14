import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Button title='abacate'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface ButtonProps {
  title: string
}

function Button(pros: ButtonProps) {
  return(
  <TouchableOpacity>
    <Text>
      {pros.title}
    </Text>
  </TouchableOpacity>
  )
}