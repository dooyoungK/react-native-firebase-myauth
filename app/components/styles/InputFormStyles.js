import { StyleSheet } from 'react-native'
import { Metrics, AppStyles } from '../../themes'

export default StyleSheet.create({
    ...AppStyles.screen,
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    height: Metrics.screenHeight * 0.2
  },
  error: {
    fontSize: 12,
    color: 'green',
    alignSelf: 'center'
}
});
