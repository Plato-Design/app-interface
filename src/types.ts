/* 
https://github.com/fabien0102/ts-to-zod


*/
export interface TestCallV1 {
    /**
     *  @format email
     */
    email: string,
    /**
     * @default false
     */
    confirmed: boolean
}
export interface TestCallV2 {
    /**
     *  @format email
     */
    email: string,
    /**
     * @default false
     */
    confirmed: boolean
    name?: string
}

export type ClientApiV1 =
    | TestCallV1
export type ClientApiV2 =
    | TestCallV2

const migrateToLatest = (apiCall: ClientApi): ClientApiV2 => {
    switch (apiCall.version) {
        case 0: {
            throw new Error("can't migrate too old")
        }
        case 1: {
            return { ...apiCall.call, name: undefined }
        }
        case 2: return apiCall.call
        default: {
            const _never: never = apiCall
            throw new Error("Shouldn't occur")
        }
    }
}

export type ClientApi =
    | { version: 0, call: null }
    | { version: 1, call: ClientApiV1 }
    | { version: 2, call: ClientApiV2 }