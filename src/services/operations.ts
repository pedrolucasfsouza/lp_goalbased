import {api} from "@/services/axios";

export const listOperations = async (params: { start_date?: string, end_date?: string, operation_type?: string, page?: number }) => {
    return await api.get(`/operations`, {
        params: params
    }).catch(({response}) => {
        return response
    })
}