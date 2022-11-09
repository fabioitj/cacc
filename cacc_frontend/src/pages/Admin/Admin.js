import ContentPageAdmin from "../../components/Admin/ContentPageAdmin/ContentPageAdmin";
import NavBarAdmin from "../../components/Admin/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../components/Admin/SideBarAdmin/SideBarAdmin";
import RedirectTo from "../../components/ProtectedRouter";
import "./Admin.css"

const Admin = () => {
    return (
        <div className="Admin">
     
                <NavBarAdmin/>
                <SideBarAdmin/>
                <ContentPageAdmin/>
            
        </div>   
    )
}

export default Admin;