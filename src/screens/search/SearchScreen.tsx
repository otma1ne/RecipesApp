import {Text, View} from 'react-native';
import theme from '../../theme';

export default function SearchScreen() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={{...theme.text14Medium}}>Search Screen</Text>
    </View>
  );
}
