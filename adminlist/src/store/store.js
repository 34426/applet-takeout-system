import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const opendata = {
	goeasyid:localStorage.getItem("goeasyid")
};
const userInfo = {
	token:localStorage.getItem("openid")||'',
};

const state = {
  opendata,
  userInfo
}

export default new Vuex.Store({
	state,
	actions:{
		users(user){
//			console.log(user)
			user.commit('usersinfo')
		}
	},
	mutations:{
		usersinfo(state){
			state.userInfo = {
				token:localStorage.getItem("openid")||'',
			}

//			console.log(state.userInfo)
		},
    iddata(state){
        state.opendata = {
          goeasyid:localStorage.getItem("goeasyid")
        }
    // ,
    // iddata(state){
    //     state.opendata = {
    //       goeasyid:localStorage.getItem("goeasyid")
    //     }

    // // //			console.log(state.userInfo)
    		}


	}
})
