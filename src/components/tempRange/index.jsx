import "./style.scss";

export default function TempRange({min, max}){
    return (
        <div className={"temperature-range"}>
            <p>{min}&deg;</p><p>/</p><p>{max}&deg;</p>
        </div>
    )
}