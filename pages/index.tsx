import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import type { NextPage } from 'next'
import GET_IMAGES from '../queries/getImages';
import { CanvasMapContainer } from '../containers'
import apolloClient from '../apollo-client';
import { setImageList } from '../store/modules/images';

const Index: NextPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getImages = async () => {
      const result = await apolloClient.query({ query: GET_IMAGES });
      if (result?.data) {
        const { images } = result.data;
        dispatch(setImageList(images));
      }    
    };
    getImages();
  }, []);

  return (
    <CanvasMapContainer />
  )
}

export default Index
