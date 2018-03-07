import { StyleSheet } from 'react-native'
import { Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  errorContainer: {
   marginTop: 10
  },
  error: {
    width: '100%',
    fontSize: 12,
    color: 'red'
  },
  label: {
    width: Metrics.screenWidth * 0.3,
    marginRight: 5
  },
  input: {
    width: Metrics.screenWidth * 0.6,
    height: 40,
    fontSize: 14

  }
})

