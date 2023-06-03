import {api} from "@/services/axios";

export const listActives = async (params: { search?: string }) => {
    return await api.get(`/performance`, {
        params: params
    }).catch(({response}) => {
        return response
    })
}