import { useParams, Outlet } from "react-router-dom"
export const CardPage = () => {

    const params = useParams()
        const { id } = params
        
        return(
            <div>
                <h1>Task - { id ? id : "Not found" } </h1>
                <Outlet />
            </div>
        )
}