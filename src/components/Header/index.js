import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import Svg, {Circle, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const SvgCircle = ({color, longHeader, children}) => {
  const vh = Dimensions.get('window').height * 0.01;
  const vw = Dimensions.get('window').width * 0.01;

  return (
    <View style={{flex: 1}}>
      {longHeader ? (
        <Svg
          width={`${vw * 115.7}`}
          height={`${vh * 55.8}`}
          viewBox={`${vw * 0} ${vh * 0} ${vw * 115.7} ${vh * 55.8}`}>
          <Defs>
            <LinearGradient
              id="linear-gradient"
              x1="0.688"
              y1="-0.979"
              x2="0.606"
              y2="1.56"
              gradientUnits="objectBoundingBox">
              <Stop offset="0" stopColor="#CA0420" />
              <Stop offset="1" stopColor="#650210" />
            </LinearGradient>
          </Defs>

          <Path
            d={`M${vw * 87.8},${vh * 32.7}a${vw * 13.2},${vw * 17.2},${
              vw * 0
            },${vw * 0},${vw * 0},${vh * 8}-${vw * 14.2} V${vh * 0} H${
              vw * 0
            } V${vh * 40} a${vw * 12.2},${vw * 12.2},${vw * 0},${vw * 0},1 ${
              vw * 12.2
            }-${vw * 12.2}Z`}
            fill={color ? color : 'url(#linear-gradient)'}
          />
          <Circle
            id="Ellipse_126"
            data-name="Ellipse 126"
            cx={`${vw * 55.55}`}
            cy={`${vh * -9.4}`}
            r={`${vh * 18.6}`}
            transform="translate(162 34)"
            fill="#fff"
            opacity="0.1"
          />
          <Circle
            id="Ellipse_127"
            data-name="Ellipse 127"
            cx={`${vw * 26}`}
            cy={`${vh * -9.35}`}
            r={`${vh * 19}`}
            transform="translate(226 29)"
            fill="#fff"
            opacity="0.1"
          />
        </Svg>
      ) : (
        <Svg
          width={`${vw * 100}`}
          height={`${vh * 27}`}
          viewBox={`${vw * 0} ${vh * 0} ${vw * 100} ${vh * 27}`}>
          <Defs>
            <LinearGradient
              id="linear-gradient"
              x1="0.688"
              y1="-0.979"
              x2="0.606"
              y2="1.56"
              gradientUnits="objectBoundingBox">
              <Stop offset="0" stopColor="#CA0420" />
              <Stop offset="1" stopColor="#650210" />
            </LinearGradient>
          </Defs>

          <Path
            d={`M${vw * 88.8},${vh * 21}a${vw * 10},${vh * 7.2},${vw * 4},${
              vw * 0
            },${vw * 0},${vw * 12.2}-${vw * 14.6} V${vh * 0} H${vw * 0} V${
              vh * 27
            } a${vw * 10},${vw * 11.4},${vw * 6},${vh * 0},1 ${vw * 10.2}-${
              vw * 12.2
            }Z`}
            fill={color ? color : 'url(#linear-gradient)'}
          />
          <Circle
            id="Ellipse_126"
            data-name="Ellipse 126"
            cx={`${vw * 55.2}`}
            cy={`${vh * -7.4}`}
            r={`${vh * 15}`}
            transform="translate(162 34)"
            fill="#fff"
            opacity="0.1"
          />
          <Circle
            id="Ellipse_127"
            data-name="Ellipse 127"
            cx={`${vw * 27.6}`}
            cy={`${vh * -12.5}`}
            r={`${vh * 20}`}
            transform="translate(226 29)"
            fill="#fff"
            opacity="0.1"
          />
        </Svg>
      )}
      {children}
    </View>
  );
};
export default SvgCircle;
