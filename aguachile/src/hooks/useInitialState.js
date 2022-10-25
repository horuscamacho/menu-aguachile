import { useState } from "react";

const initialState = {
    route: "",
}
const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const changeRoute = (payload) => {
        setState({
            ...state,
            route: payload
        })
    }

    return {
        state,
        changeRoute
    }
}

export default useInitialState;