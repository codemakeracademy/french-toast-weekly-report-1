import {createEffect, createStore} from "effector";
import {api} from "../modules/api/api.service";


export const updateCurrentUser = createEffect(async ({user}) => {
    return await api.get(`team-members/${user.sub}`)
})

export const currentUser = createStore({})
    .on(updateCurrentUser.done, (state => state))

