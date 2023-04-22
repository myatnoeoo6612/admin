import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebra"
import "./new.scss"

const New = () => {
    return(
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png" alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="myat_noe_oo" />
                            </div> 
                            <div className="formInput">
                                <label>Name and surname</label>
                                <input type="text" placeholder="Myat Noe Oo" />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="email" placeholder="myatnoeoo772985799@gmail.com" />
                            </div>
                            <div className="formInput"> 
                                <label>Phone</label>
                                <input type="text" placeholder="+959772985799" />
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="password" />
                            </div> 
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="myat_noe_oo" />
                            </div>
                            <div className="formInput">
                                <label>Address</label>
                                <input type="text" placeholder="Yangon" />
                            </div>
                            <div className="formInput">
                                <label>Country</label>
                                <input type="text" placeholder="Myanmar" />
                            </div> 
                            <button>Send</button> 
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New