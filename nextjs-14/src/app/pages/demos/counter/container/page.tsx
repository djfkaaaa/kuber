import { decrease, increase } from "@/lib/features/counter/counterReducer"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"


const CounterContainer = () => {

    const count = useSelector((state:any) => (state.counterReducer.count))
    const dispatch = useDispatch()
    const handlePlus = useCallback(()=>dispatch(increase()),[dispatch])
    const handleMinus = useCallback(()=>dispatch(decrease()),[dispatch])

    return(
        <>

        

        </>
    )
} 
export default CounterContainer