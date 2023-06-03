import {api} from "@/services/axios";

export const listInvites = async (params: { reserved?: string, available?: boolean, partner?: string, page?: number }) => {
    return await api.get(`/invite`, {
        params: params
    }).catch(({response}) => {
        return response
    })
}
export const registerInvites = async (payload: { quantity: number, partner: string }) => {
    return await api.post(`/invite`, payload).catch(({response}) => {
        return response
    })
}