const fs = require('fs');
const path = require('path');
const probe = require('probe-image-size');
const robots = require('../database/robots.json');


class ImageAPI {
    loadImages(){
      const dirPath = path.join(__dirname, '../../../../static/images/source');
      const res = fs.readdirSync(dirPath);
      // return res
      return res.map(name => {
        const data = fs.readFileSync(path.join(dirPath, name));
        const imageData = probe.sync(data);
        return {
          ...imageData,
          data:data,
        };
      });
    
    }
}
  
const dataSources = () => {
    return {
      imageAPI: new ImageAPI(),
      robots
    };
};

module.exports = dataSources;