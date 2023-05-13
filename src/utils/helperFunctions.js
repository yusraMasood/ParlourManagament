import moment from 'moment';
import {Dimensions, LayoutAnimation, Platform, UIManager} from 'react-native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
const googleBaseUrl =
  'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=';
const geoBase = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
const geoBaseLatLng =
  'https://maps.googleapis.com/maps/api/geocode/json?place_id=';
const geo_Base = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
const googleApiKey = 'AIzaSyB2hxNhJCBwaHoQ2eggJmLR4pfDYAN93cY';
const geocodeUrl =
  'http://dev61.onlinetestingserver.com/forward-geo-code?address=';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.006339428281933124;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const avatarUrl = 'https://ui-avatars.com/api/?name=';
export const validateEmail = email => {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateAlphabets = text => {
  const re = /^[A-Za-z]+$/;
  return re.test(String(text));
};

export const validateNumbers = text => {
  const re = /^\d+$/;
  return re.test(String(text));
};

export const validatePhoneNumber = text => {
  const re = /\+1\s\d{3}[-]\d{3}[-]\d{4}/ig;
  return re.test(String(text));
};

export function layoutAnimation(item) {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.linear), item;
}
export const userAvatar = name => {
  return `${avatarUrl}${name}&background=random&rounded={true}`;
};
export const formatDate = (date, format) => {
  return moment(date, "YYYY-MM-DD'T'HH:mm:ss.SSSSSS'Z'").utc().format(format);
};
export const creditCardMask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const expiryDateMask = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

export const usPhoneNumberMask = ['+', '1', " ", /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

export const checkCameraPermissions = async () => {
  try {
    const permission =
      Platform.OS == 'android'
        ? PERMISSIONS.ANDROID.CAMERA
        : PERMISSIONS.IOS.CAMERA;

    await checkPermission(permission);
  } catch (error) {
    // show toast
  }
};

export const checkLocationPermissions = async () => {
  try {
    if (Platform.OS == 'android') {
      await promptForLocation();
    }
    const permission =
      Platform.OS == 'android'
        ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

    await checkPermission(permission);
  } catch (error) {
    throw new Error(error);
  }
};

const promptForLocation = async () => {
  try {
    await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    });
  } catch (error) {
    console.log('errorrrr ', error);
    // show toast
  }
};

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      success => {
        console.log('success', success);
        let Coords = {
          latitude: success.coords.latitude,
          longitude: success.coords.longitude,
        };

        return resolve(Coords);
      },
      error => {
        return reject(error);
      },
      Platform.select({
        ios: {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0,
        },
        android: {},
      }),
    );
  });
};

export const checkPermission = async permission => {
  const result = await check(permission);
  switch (result) {
    case RESULTS.UNAVAILABLE:
      throw new Error(RESULTS.UNAVAILABLE);
    case RESULTS.DENIED:
      try {
        const request_result = await getPermission(permission);
        return request_result;
      } catch (error) {
        throw new Error(error);
      }
    case RESULTS.GRANTED:
      return RESULTS.GRANTED;
    case RESULTS.BLOCKED:
      throw new Error(RESULTS.BLOCKED);
  }
};

const getPermission = async permission => {
  const result = await request(permission);
  switch (result) {
    case RESULTS.UNAVAILABLE:
      throw new Error(RESULTS.UNAVAILABLE);

    case RESULTS.DENIED:
      throw new Error(RESULTS.DENIED);

    case RESULTS.GRANTED:
      return RESULTS.GRANTED;

    case RESULTS.BLOCKED:
      throw new Error(RESULTS.BLOCKED);
  }
};

export const getAddressByLatLong = coordinate => {
  let latlng = coordinate.latitude + ',' + coordinate.longitude;

  let url = `${geo_Base}${latlng}&sensor=false&key=${googleApiKey}`;

  return async () => {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      // console.log("getAddressByLatLong : ", jsonResponse);
      return Promise.resolve(jsonResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  };
};

export const getLatlngByAddress = id => {
  let url = `${geoBaseLatLng}${id}&key=${googleApiKey}`;
  return async () => {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      // console.log("getLatLongByAddress: ", jsonResponse);
      return Promise.resolve(jsonResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  };
};

export const addressPrediction = word => {
  let url =
    googleBaseUrl +
    word +
    '&key=' +
    googleApiKey +
    '&sessiontoken=' +
    getSessionToken();
  return async () => {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      console.log('addressPrediction : ', jsonResponse);
      return Promise.resolve(jsonResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  };
};
const getSessionToken = () => {
  let sessionKey = Math.floor(Math.random() * 10).toString();
  // console.log('sessionKey ',sessionKey)
  return sessionKey;
};
