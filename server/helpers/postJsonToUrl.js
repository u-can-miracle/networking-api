import request from 'request'

export const postJsonToUrl = (url, json = {}) => new Promise((resolve, reject) => {
  const options = {
    method: 'POST',
    url,
    json
  }

  request(options, function (err, response, body) {
    if(err){
      reject(err)
    } else {
      resolve(body)
    }
  })
})
