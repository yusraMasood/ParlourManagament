// import store from '../StateManagement/store';
// import Toast from 'react-native-toast';

// const TAG = '__API__';
// export const showToast = msg => {
//   // console.error('ERROR', msg);
//   setTimeout(() => {
//     Toast.show(getMessage(msg));
//   }, 500);

//   presentToast(getMessage(msg));
// };
// export const showGlobalToast = msg => {};
// export const presentToast = message => {
//   console.log('=== in  presentToast ', message);
//   // EventRegister.emit(events.showToast, getMessage(message));
// };
// export const handleResponse = ({response, jsonResponse}) => {
//   switch (response.status) {
//     case 200:
//     case 201: {
//       if (
//         jsonResponse.hasOwnProperty('errors') ||
//         jsonResponse.hasOwnProperty('error')
//       ) {
//         const message = getMessage(jsonResponse);
//         return Promise.reject(message);
//       } else {
//         return Promise.resolve(jsonResponse);
//       }
//       break;
//     }
//     case 401: {
//       // EventRegister.emit(events.logout);
//       const message = getMessage(jsonResponse);
//       return Promise.reject(message);
//     }
//     case 403: {
//       // EventRegister.emit(events.logout);
//       const message = getMessage(jsonResponse);
//       return Promise.reject(message);
//     }
//     case 404: {
//       // EventRegister.emit(events.logout);
//       const message = getMessage(jsonResponse);
//       return Promise.reject(message);
//     }
//     default: {
//       const message = getMessage(jsonResponse);
//       return Promise.reject(message);
//     }
//   }
// };
// export const performNetworkRequest = async (url, configs) => {
//   log('performNetworkRequest', '_______');
//   log('url', url);
//   log('configs', configs);

//   url = encodeURI(url);

//   try {
//     const response = await fetch(url, configs);
//     log('response', response);
//     const jsonResponse = await response.json();
//     log('jsonResponse', jsonResponse);
//     return Promise.resolve({response, jsonResponse});
//   } catch (e) {
//     log('error', e);
//     return Promise.reject(e);
//   }
// };
// export const log = (label, data) => {
//   if (__DEV__) {
//     console.log(TAG + `__${label}__ :`, data);
//   }
// };
// export const message = 'Something went wrong';
// export const getMessage = json => {
//   switch (typeof json) {
//     case 'string': {
//       return json;
//     }
//     case 'object': {
//       if (Array.isArray(json)) {
//         var data = json[0];
//         return getMessage(data);
//       } else {
//         if (json.errors) {
//           const data = json.errors;
//           if (typeof data === 'object') {
//             const values = Object.values(data);
//             return getMessage(values);
//           } else {
//             return getMessage(data);
//           }
//         } else {
//           if (json.message) {
//             return getMessage(json.message);
//           } else if (json.error) {
//             return getMessage(json.error);
//           } else {
//             return message;
//           }
//         }
//       }
//     }
//     default: {
//       return message;
//     }
//   }
// };
// export const jsonToFormdata = json => {
//   var data = new FormData();
//   const entries = Object.entries(json);
//   entries.forEach(entry => {
//     data.append(entry[0], entry[1]);
//   });
//   return data;
// };
// export const getConfigs = (method, body, formData = false) => {
//   var headers = {
//     Accept: 'application/json',
//     'X-Requested-With': 'XMLHttpRequest',
//     'Content-Type': 'application/json',
//   };
//   if (formData == true) {
//     headers['Content-Type'] = 'multipart/form-data';
//   }
//   const data = store.getState();
//   if (data) {
//     // console.log("TOKEN", data);
//     if (data.user) {
//       if (data.user.token != null) {
//         if (data.user.token) {
//           // console.log("hskhlshsl");
//           headers['Authorization'] = 'Bearer ' + data.user.token;
//         }
//       }
//     }
//   }
//   var configs = {
//     method: method,
//     headers: headers,
//   };
//   if (body) {
//     if (method == 'POST' || method == 'PUT') {
//       if (formData == true) {
//         configs['body'] = jsonToFormdata(body);
//       } else {
//         configs['body'] = JSON.stringify(body);
//       }
//     }
//   }
//   return configs;
// };
// export const dataToQueryParameter = data => {
//   if (typeof data === 'object') {
//     if (!Array.isArray(data)) {
//       var params = '?';
//       const dataArray = Object.entries(data);
//       if (dataArray.length > 0) {
//         dataArray.forEach((entry, index) => {
//           var amp = index < dataArray.length - 1 ? '&' : '';
//           params = `${params}${entry[0]}=${entry[1]}${amp}`;
//         });
//         return params;
//       }
//     }
//   } else if (typeof data === 'string') {
//     return data;
//   }
//   return '';
// };
