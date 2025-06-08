import { State } from "../types"

export const saveBorderState = (state: State) => {
    try {
        localStorage.setItem("boardState", JSON.stringify(state))
    }
    catch(e){
        console.error("Erro ao salvar no localStorage:", e)
    }
}
