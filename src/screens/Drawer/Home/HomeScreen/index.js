import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import {icons} from '../../../../assets/images';
import MapView, {Marker} from 'react-native-maps';
import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  checkLocationPermissions,
  getCurrentLocation,
} from '../../../../utils/helperFunctions';
import CustomButton from '../../../../components/Buttons/CustomButton';

const HomeScreen = props => {
  const mapRef = useRef();

  const [initialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [userLocation, setUserLocation] = useState(null);

  const handleDonePress = () => {
    // props.route.params.handleRoute(searchedAddress);
    props.navigation.navigate('MapScreen');
  };
  const animateToRegion = location => {
    mapRef.current.animateToRegion(
      {
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      2000,
    );
  };
  const onMarkerDragEnd = async event => {
    const coordinate = {
      latitude: event?.nativeEvent?.coordinate?.latitude,
      longitude: event?.nativeEvent?.coordinate?.longitude,
    };
    try {
      setUserLocation({
        location: {
          latitude: parseFloat(coordinate?.latitude),
          longitude: parseFloat(coordinate?.longitude),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      });
      animateToRegion(coordinate);
    } catch (e) {
      // console.log(e);
      // showToast(e);
    }
  };
  const getUserLocation = async () => {
    try {
      const location = await getCurrentLocation();
      console.log('CURRENT LOCATION', location);

      setUserLocation({
        location: {
          latitude: parseFloat(location?.latitude),
          longitude: parseFloat(location?.longitude),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      });
      animateToRegion(location);
    } catch (error) {
      // showToast(error);
    }
  };
  const setupMethods = async () => {
    try {
      await checkLocationPermissions();
      getUserLocation();
    } catch (error) {
      console.log('location** error ', error);
    }
  };
  useEffect(() => {
    setupMethods();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <MapView
        ref={mapRef}
        initialRegion={initialRegion}
        style={[StyleSheet.absoluteFillObject]}>
        {userLocation && (
          <Marker
            coordinate={userLocation?.location}
            draggable={true}
            onDragEnd={onMarkerDragEnd}>
            <Image source={icons.locationIcon} style={styles.markerIconStyle} />
          </Marker>
        )}
      </MapView>
      <CustomButton style={styles.btn} text="Done" onPress={handleDonePress} />
    </View>
  );
};
export default HomeScreen;
