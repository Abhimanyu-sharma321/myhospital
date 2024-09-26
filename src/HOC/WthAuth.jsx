import Register from "../Components/Register/Register"
import { ErrorPage } from "../Pages/Error/ErrorPage"

function WithAuthHoc(Component) {

    function WithHocProps(props) {

            // let IsAuthenticate = localStorage.getItem("token")

            // console.log(IsAuthenticate, "authenticate>>>>>>>>>>>>>")

            // if (!IsAuthenticate) {

            //     return < Register />
            // }
            // else {
            //     return <Component {...{ IsAuthenticate }} />

            // }


        }


    return WithHocProps;

}


export default WithAuthHoc;