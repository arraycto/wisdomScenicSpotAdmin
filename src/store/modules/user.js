import API from '@/assets/http/apiUrl'
import Request from '@/assets/http'

const user = {
  state: {
    token: '',
    name: '',
    roles: ''
  },
  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data
    },
    SET_USER_INFO: (state, data) => {
      state.name = data.name || ''
      state.roles = data.roles || []
    }
  },
  actions: {
    Login({ commit }, params) {// 登录，返回promise对象
      return new Promise((resolve, reject) => {
        Request.httpRequest({// 发起HTTP请求
          method: 'post',
          url: API.Login,
          params: params,
          success: data => {
            console.log(data)
            localStorage.setItem('ADMIN_TOKEN', data.token)// 本地储存token
            commit('SET_USER_INFO', data.userInfo)// commit提交用户信息，使state储存用户信息
            resolve(data)
          },
          error: err => {
            reject(err)
          }
        })
      })
    },

    LoginByVin({ dispatch, commit }, params) {
      return dispatch('Login', params)
    },

    ResetToken({ commit }) {
      return new Promise(resolve => {
        console.log(1111)
        commit('SET_TOKEN', '')
        commit('SET_USER_INFO', {})
        localStorage.removeItem('ADMIN_TOKEN')
        resolve()
      })
    },

    // ??
    LogOut({ dispatch, commit }) {
      return dispatch('ResetToken')
    }
  }
}

export default user

