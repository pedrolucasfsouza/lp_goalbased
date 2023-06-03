import {api} from "@/services/axios";

export const listUsers = async (params: { page?: number }) => {
    return await api.get(`/users`, {
        params: params
    }).catch(({response}) => {
        return response
    })
}
export const updateToggleBlockUser = async (params: { user_id: number, active: string }) => {
    return await api.put(`/users`, {}, {
        params: params
    }).catch(({response}) => {
        return response
    })
}