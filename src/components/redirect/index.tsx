import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Redirect = () => {
    const [time, setTime] = useState(5)
    const navigate = useNavigate()

    const handleSetTime = () => {
        setTime(t => t - 1)
    }

    useEffect(() => {
        if (time == 0) {
            navigate('/')
        }

        const timer = setTimeout(() => {
            handleSetTime()
        }, 1000);
        
        return () => clearTimeout(timer)
    }, [time])

    return (
        <div>
            <h1>Redirect in {time}</h1>
        </div>
    )
}