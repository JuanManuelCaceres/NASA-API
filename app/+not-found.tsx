import { Link, Stack } from 'expo-router';
import { StyleSheet , View} from 'react-native';

import { ThemedText } from '../app-example/components/ThemedText';
import { ThemedView } from '../app-example/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/index" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
