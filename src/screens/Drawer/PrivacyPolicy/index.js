import React,{useEffect,useState} from 'react'
import { View, Text } from 'react-native'
// import { styles } from 'react-native-material-ripple/styles'
import styles from './styles'
import OutfitMedium from '../../../components/Texts/OutfitMedium'
import OutfitRegular from '../../../components/Texts/OutfitRegular'
import ScreenWrapper from '../../../components/wrappers/ScreenWrapper'
// import { GetPrivacyPolicy } from '../../../StateManagement/HomeSlice'
// import { useDispatch } from 'react-redux'
import ContentContainer from '../../../components/wrappers/ContentContainer'


const PrivacyPolicy = () => {
//   const dispatch = useDispatch()
//   const [responseData,setResponseData] =useState(null)

//     useEffect(() => {
//         // dispatch(GetHome());
//         dispatch(GetPrivacyPolicy()).then((res)=>{
//             // console.log("res from privacy", res?.payload);
//             setResponseData(res?.payload)
//         })
//       }, []);
    
    return (
        <ScreenWrapper style={styles.container}>
            <ContentContainer>
            {/* <OutfitMedium style={styles.privacyTitle}>Privacy Policy</OutfitMedium> */}
            <OutfitRegular style={styles.paraText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </OutfitRegular>
            </ContentContainer>
        </ScreenWrapper>
    )
}
export default PrivacyPolicy