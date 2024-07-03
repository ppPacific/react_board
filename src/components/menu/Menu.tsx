import "./menu.scss";
import {Link} from "react-router-dom";
import {menu} from "../../data.ts";

const Menu=()=>{

    return (
        <div className={"menu"}>
            {menu.map((item)=> {
                return <div className={"item"} key={item.id}>
                    <span className={"title"}>{item.title}</span>
                    {item.listItems.map((listItem)=>{
                        return <Link to={"/"} className={"listItem"} key={'t'+listItem.id}>
                            <img src={listItem.icon} alt={""}/>
                            <span className={"listItemTitle"}>{listItem.title}</span>
                        </Link>
                    })}
                    {/*<Link to={"/"} className={"listItem"}>*/}
                    {/*    <img src={"/home.svg"} alt={""}/>*/}
                    {/*    <span className={"listItemTitle"}>Home</span>*/}
                    {/*</Link>*/}
                    {/*<Link to={"/"} className={"listItem"}>*/}
                    {/*    <img src={"/profile.svg"} alt={""}/>*/}
                    {/*    <span className={"listItemTitle"}>Profile</span>*/}
                    {/*</Link>*/}
                </div>
            })}


            <div className={"item"}>
                <span className={"title"}>TEST</span>
                <Link to={"/test"} className={"listItem"}>
                    <img src={"/home.svg"} alt={""}/>
                    <span className={"listItemTitle"}>Test</span>
                </Link>
                <Link to={"/"} className={"listItem"}>
                    <img src={"/profile.svg"} alt={""}/>
                    <span className={"listItemTitle"}>Profile</span>
                </Link>
            </div>
        </div>
    )
}

export default Menu;