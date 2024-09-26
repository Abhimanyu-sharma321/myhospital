import Login from "../Components/Login/Login"

const useCustomNavigation = (path) => {


    const Navigation = (path) => {
        console.log(path, "pathhhhhhhhhhhhhhhhhhhhh")


        if (path === "/login") {
             <Login />
        }


    }

    return { Navigation }


}
export default useCustomNavigation