import Sidebar from "../../components/sidebar/Sidebra"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"
import "./single.scss"

const Single = () => {
    return(
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="singleitem">
                            <img 
                                src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/332722720_111508305176519_964103897470684076_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QsMSksdahaUAX92Ot-e&_nc_ht=scontent-sin6-4.xx&oh=00_AfBzUDDVygqUa0sUgv48uHXSrSROlCQUJal6h_qFTo7cew&oe=6447D801" 
                                alt="" 
                                className="itemImg" 
                            />
                            <div className="singledetails">
                                <h1 className="singleitemtitle">Thiri Lai Wai</h1>
                                <div className="adj">
                                     <div className="detailItem">
                                         <span className="itemKey">Email:</span>
                                         <span className="itemValue">thirilaiwai1485@gmail.com</span>    
                                     </div>
                                     <div className="detailItem">
                                         <span className="itemKey">Phone:</span>
                                         <span className="itemValue">+82 10-3068-0795</span>    
                                     </div>
                                     <div className="detailItem">
                                         <span className="itemKey">Address:</span>
                                         <span className="itemValue">Siheung, Inchon</span>    
                                     </div>
                                     <div className="detailItem">
                                         <span className="itemKey">Country:</span>
                                         <span className="itemValue">South Korea</span>    
                                     </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                         <Chart aspect={4/1} title="User Spending ( Last 6 Months )"/>
                    </div>
                </div>
                <div className="singlebottom">
                    <h1 className="title">Last Tansactions</h1>
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default Single