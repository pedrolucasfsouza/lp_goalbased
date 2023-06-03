import {api} from "./axios";
import {SignInProps, SignUpProps} from "@/hooks/useUser";

export const login = async (payload: SignInProps) => {
    return await api.post(`/login`, payload).catch(({response}) => {
        return response
    })
}
export const register = async (payload: SignUpProps) => {
    return await api.post(`/signup`, payload).catch(({response}) => {
        return response
    })
}
export const registerQueue = async (payload: Partial<SignUpProps>) => {
    return await api.post(`/register_queues`, payload).catch(({response}) => {
        return response
    })
}
export const recoverAccount = async (payload: Partial<SignUpProps>) => {
    return await api.post(`/recover_account`, payload).catch(({response}) => {
        return response
    })
}
export const changePassword = async (payload: { email: string, password: string, recovery_token: string }) => {
    return await api.put(`/recover_account`, payload).catch(({response}) => {
        return response
    })
}