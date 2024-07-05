
import "./Home.scss";
import TopBox from "../../components/TopBox/TopBox.tsx";
import ChartBox from "../../components/chartBox/ChartBox.tsx";
import {chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser} from "../../data.ts";
const Home =()=>{

    return(
        <div className={"home"}>
            <div className={"box box1"}>
                <TopBox/>
            </div>
            <div className={"box box2"}><ChartBox {...chartBoxUser}/></div>
            <div className={"box box3"}><ChartBox {...chartBoxProduct}/></div>
            <div className={"box box4"}><ChartBox {...chartBoxRevenue}/></div>
            <div className={"box box5"}><ChartBox {...chartBoxConversion}/></div>
            <div className={"box box6"}>6</div>
            <div className={"box box7"}>box7</div>
            <div className={"box box8"}>box8</div>
            <div className={"box box9"}>box9</div>
        </div>
    )
}

export default Home;