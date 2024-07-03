import "./topBox.scss";
import {topDealUsers} from "../../data.ts";

const TopBox=()=>{

    return (
        <div className={"topBox"}>
            <h1>Top</h1>
            {topDealUsers.map((user)=>{
                return (
                    <div className={"listItem"} key={user.id}>
                        <div className={"user"}></div>
                        <span className={"amount"}>${user.amount}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TopBox;