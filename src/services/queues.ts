import {api} from "@/services/axios";
import {PayloadPaginatedProps} from "@/types";

export const listQueueRegisters = async (params: PayloadPaginatedProps & { registered?: boolean, invited?: boolean }) => {
    return await api.get(`/register_queues`, {
        params: params
    }).catch(({response}) => {
        return response
    })
}