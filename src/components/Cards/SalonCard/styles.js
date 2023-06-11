import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: vh * 2,
    padding: vw * 2,
    borderRadius: vw * 3,
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    height: vw * 25,
    width: vw * 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw * 3,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: vw * 3,
    resizeMode: 'contain',
  },
  contentContainer: {flex: 1, paddingHorizontal: vw * 3},
  titleStyle: {color: colors.white, fontSize: vh * 1.8},
  descriptionStyle: {
    color: colors.white,
    fontSize: vh * 1.6,
    marginTop: vh * 1,
  },
  ratingContainer: {
    paddingHorizontal: vw * 2,
    paddingVertical: vh * 0.5,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: vw * 2,
    flexDirection: 'row',
  },
  starIconStyle: {height: vw * 2.5, width: vw * 2.5, resizeMode: 'contain'},
  ratingTextStyle: {color: colors.white, fontSize: vh * 1.2},
});
export default styles;
