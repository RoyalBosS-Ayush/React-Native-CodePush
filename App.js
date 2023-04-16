import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import CodePush from 'react-native-code-push';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#fab" }}>ThiS</Text>

    </SafeAreaView>
  );
};

const CodePushOptions = { checkFrequence: CodePush.CheckFrequency.ON_APP_START }
export default CodePush(CodePushOptions)(App);
