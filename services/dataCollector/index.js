import queryList from './queries';
import ApolloClient from './apolloClient';

class DataCollector {

  init() {
    try {
      this.getRobots();
    } catch (err) {
      console.log(err);
    }
  }

  getRobots(callback){
    console.log('getRobots');
    const query = queryList['robots'];
    ApolloClient.subscribe({ query }).subscribe(({ data }) => {
      console.log(data);
      // setRobots();
      if (callback) callback(data);
    }, err => {
      console.log(err);
    });
  }

  injectStore(store) {
    this.store = store;
    console.log('injectStore', store)
    console.log(this);
  };
}

export default new DataCollector();
