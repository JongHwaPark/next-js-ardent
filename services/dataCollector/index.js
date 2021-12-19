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
    const apolloClient = ApolloClient.getClient();
    const query = queryList['robots'];
    apolloClient.subscribe({ query }).subscribe(({ data }) => {
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
