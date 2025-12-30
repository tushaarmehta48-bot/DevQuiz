import { useContext } from "react";
import { QuizContext } from "./QuizContext.jsx";

export const useAuth = () => useContext(QuizContext);
export default useAuth;
