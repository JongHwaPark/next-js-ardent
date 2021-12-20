import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import type { NextPage } from 'next'
import GET_IMAGES from '../queries/getImages';
import { CanvasMapContainer } from '../containers'
import apolloClient from '../services/dataCollector/apolloClient';
import { setImageList } from '../store/modules/images';
import { ApolloProvider } from "@apollo/client";

import DataCollector from '../services/dataCollector/index';

const Index: NextPage = (props) => {
  const dispatch = useDispatch();

  

  useEffect(() => {
    const getImages = async () => {
      const client = apolloClient;
      const result = await client.query({ query: GET_IMAGES });
      if (result?.data) {
        const { images } = result.data;
        dispatch(setImageList(images));
      }    
    };
    getImages();
    
    // DataCollector.init();
  }, []);

  return (
      <CanvasMapContainer />
  )
}

export default Index
