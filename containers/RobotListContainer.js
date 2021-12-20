import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useSubscription } from '@apollo/react-hooks';
import queries from '../services/dataCollector/queries';
import { RobotList } from '../components/organisms';

const RobotListContainer = () => {
  const { active } = useSelector((store) => ({
    active: store.common.ui.openRobotList
  }));

  const [robots, setRobots] = useState([]);

  const { loading, error, data } = useSubscription(queries['robots']);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);
  // setRobots(data.robots);


  return (
    <RobotList
      robots={data.robots}
      active={active}
    />
  )
}


export default RobotListContainer;