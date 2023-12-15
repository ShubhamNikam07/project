import { createContext } from "react"

export const userContext = createContext({
    defaultName : "Create User",
    defaultVal:"Its Free",
    statusIs:false
})