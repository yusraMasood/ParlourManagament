import {useDispatch, useSelector} from 'react-redux';
import {Toast} from '../../Api/APIHelpers';
import {
  GetCategories,
  GetCategoryDetail,
  GetHomeData,
  GetPhotographers,
  GetPopularPhotographers,
  GetServiceProviderById,
  GetServiceProviders,
  selectPhotographerCategories,
  setPhotographerCategories,
} from '../../state/categories';
import {toggleGlobalLoader, toggleInlineLoader} from '../../state/general';

const useCategories = () => {
  const dispatch = useDispatch();
  const photographerCategories = useSelector(selectPhotographerCategories);

  const getHomeData = async data => {
    try {
      const response = await dispatch(GetHomeData(data)).unwrap();
      return response;
    } catch (error) {
      Toast.error(error);
      // throw new Error(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await dispatch(GetCategories()).unwrap();
      dispatch(setPhotographerCategories(response));
      return response;
    } catch (error) {
      Toast.error(error);
      // throw new Error(error);
    }
  };

  const getPhotogrphersByCategory = async data => {
    dispatch(toggleInlineLoader(true));
    try {
      const response = await dispatch(GetPhotographers(data)).unwrap();
      dispatch(toggleInlineLoader(false));
      return response;
    } catch (error) {
      dispatch(toggleInlineLoader(false));
      Toast.error(error);
      // throw new Error(error);
    }
  };

  const getCategoryDetail = async (id, data) => {
    dispatch(toggleGlobalLoader(true));
    try {
      var idParams = {
        ID: id,
        params: data,
      };
      const response = await dispatch(GetCategoryDetail(idParams)).unwrap();
      dispatch(toggleGlobalLoader(false));
      return response;
    } catch (error) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(error);
      // throw new Error(error);
    }
  };

  const getPopularPhotographers = async () => {
    try {
      const response = await dispatch(GetPopularPhotographers()).unwrap();
      return response;
    } catch (error) {
      Toast.error(error);
      // throw new Error(error);
    }
  };

  const getServiceProviders = async () => {
    try {
      const response = await dispatch(GetServiceProviders()).unwrap();
      return response;
    } catch (error) {
      Toast.error(error);
      // throw new Error(error);
    }
  };

  const getServiceProviderById = async id => {
    dispatch(toggleGlobalLoader(true));
    try {
      const response = await dispatch(GetServiceProviderById(id)).unwrap();
      dispatch(toggleGlobalLoader(false));
      return response;
    } catch (error) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(error);
      // throw new Error(error);
    }
  };

  return {
    photographerCategories,
    getCategories,
    getCategoryDetail,
    getPopularPhotographers,
    getServiceProviders,
    getServiceProviderById,
    getPhotogrphersByCategory,
    getHomeData,
  };
};

export default useCategories;
