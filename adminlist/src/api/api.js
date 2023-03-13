import axios from 'axios';
import instance from './header.js'

var home = function(obje=1,urling){
	console.log("before")
    console.log(obje)
	console.log("after")
	return new Promise((resolve,reject)=>{
      instance.post((urling),obje)
      .then((res)=>{
        resolve(res)
      })
      .catch((err)=>{
        // console.log(err)
        reject(err)
      })
	})
}

var getdata = function(urling){
	return new Promise((resolve,reject)=>{
      instance.get((urling))
      .then((res)=>{
        // console.log(res)
        resolve(res)
      })
      .catch((err)=>{
        // console.log(err)
        reject(err)
      })
	})

}

export{home,getdata}
