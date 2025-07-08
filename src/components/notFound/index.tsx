import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const [time, setTime] = useState(5)
    const navigate = useNavigate()

    useEffect(() => {
        if (time === 0) {
            navigate("/board")
            return
        }

        const timeout = setTimeout(() => {
            setTime(time - 1)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [time, navigate])

    return (
        <div className="text-center py-10">
            <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
            <p className="text-lg text-gray-600">Redirecionando em {time} segundo{time !== 1 ? 's' : ''}...</p>
        </div>
    )
}
