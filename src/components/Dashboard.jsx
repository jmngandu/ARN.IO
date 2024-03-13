import React from "react";
import profileData from "./profileData";
import ProfileRead from "./ProfileRead";

export default function Dashboard(){
    const profileDataset = profileData.map(menu=>{
        return(
            <>
            <ProfileRead
            img={menu.img}
            text={menu.text}
            className="profilewrap"
            />
            </>
        )
    })
    return(
        <>
        <div className="dashboard">
        <div className="left-dashboard">
            <h2 className="dash-title">Happy reading Daisy</h2>
            <div className="dash-control">
                <div className="profile">
                    <div className="left-profile">
                        <img src="src/assets/images/login.jpg" className="profile-img"/>
                        <p>Thursday 8pm</p>
                    </div>
                    <div className="right-profile">
                        <h2>Daisy Dee</h2>
                        <input type="text"name="book" placeholder="Hardy Boys" className="input"/>
                        <a href="#">Continue reading</a>
                    </div>
                </div>
                <div className="profile-more">
                    <div className="input profile-input data-set">{profileDataset}</div>
                    <div className="input profile-input upload">
                        <img src="src/assets/images/book.jpg"/>
                        Upload files</div>
                    
                </div>

            </div>
        </div>











        <div className="centered">
            <input type="text" className="input search-book"name="search"placeholder="search book"/>
        <div className="centre-dashboard">
            <div className="book-page">
            <h2>CHAPTER 2</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur unde laudantium dignissimos consectetur provident deserunt quasi. Nisi, labore, nobis velit perspiciatis itaque odit, quaerat et earum ad cumque dignissimos.</p>
            </div>
            <div className="main-nav">
                <p>Previous</p>
                <p>page 10</p>
                <p>Next</p>
            </div>
            </div>
        </div>
        
        <div className="right-dashboard">
        <h2 className="dash-title">hardy boys</h2>
            <div className="right-control">
                <img src="src/assets/images/book.jpg"/>
                <p id="right-title">A mystery book about two
                    brothers and their friends
                    as they try to investigate
                    strange happenings on
                    skull mountain</p>
                <div className="progress">
                    <div className="percentage">
                        <img src="src/assets/images/progress.jpg"/>
                        <p>Progress</p>
                    </div>
                    <div className="streak">
                        <img src="src/assets/images/streak.jpg"/>
                        <p>Streak5 Days</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}