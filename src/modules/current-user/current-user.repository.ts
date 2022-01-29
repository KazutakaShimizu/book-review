import api from '../../lib/api'

interface SignupParams {
  name: string
  email: string
  password: string
}

interface SigninParams {
  email: string
  password: string
}

export const currentUserRepository = {
  async signup(params: SignupParams): Promise<string> {
    const { data } = await api.post('users', params)
    return data.token
  },
  async signin(params: SigninParams): Promise<string> {
    const { data } = await api.post('signin', params)
    return data.token
  },
}
