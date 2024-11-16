import CardContent from "./CardContent"
import "./index.css"

function Card({course}){
    console.log('log from card component',course)
    const {image, title } = course

    return (
        <div className="card" >
            <img src={image} alt={title}/>
            <CardContent course={course} />
        </div>
    )
}

export default Card