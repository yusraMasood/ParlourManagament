import {useDispatch, useSelector} from 'react-redux';
import {GetGeneralData} from '../../state/miscellaneous';

const useGeneralData = () => {
  const {aboutUs} = useSelector(state => state.miscellaneous);
  const dispatch = useDispatch();
  const getGeneralData = async () => {
    try {
      const response = await dispatch(GetGeneralData()).unwrap();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };
  return {
    aboutUs,
    getGeneralData,
  };
};
export default useGeneralData;
