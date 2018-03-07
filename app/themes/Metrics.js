import { Dimensions, Platform, PixelRatio } from 'react-native'

const { width, height, scale } = Dimensions.get('window')

const metrics = {
  screenScale: scale,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export default metrics
