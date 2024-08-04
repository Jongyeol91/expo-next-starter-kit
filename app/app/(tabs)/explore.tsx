import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview'

export default function Home() {
  return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <WebView source={{ uri: 'http://localhost:3000' }} />
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
})
