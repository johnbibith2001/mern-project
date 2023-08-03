import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./loginpage/Home"
import Signin from "./loginpage/Signin"
import Signup from "./loginpage/Signup"
import Submission from "./loginpage/Submission"
import Submit from "./loginpage/Submit"
const App=()=>{
    return(
        <div>
             <BrowserRouter>
             <Home/>
            <Routes>
                <Route path="/signin" element={<Signin/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/submission" element={<Submission/>}></Route>
                <Route path="/submit" element={<Submit/>}></Route>
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}
export default App