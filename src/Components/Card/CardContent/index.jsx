import "./index.css"
export default function CardContent({course}){
    const {category , price , title , rating , students} = course
    
    function getBackgroundColorBasedOnCategory(category){
        if (category === "DESIGN"){
            return "category-design"
        }
        else if (category === "DEVELOPMENT"){
            return "category-development"
        }
        else if (category === "TECHNOLOGY"){
            return "category-technology"
        }
    }

    return (
        <div className="card-content">
                <div className="card-header">
                  <p className={`course-category ${getBackgroundColorBasedOnCategory(category)}`} >{category}</p>
                  <p className="course-price">{price}</p>
                </div>
                <h2 className="course-title">{title}</h2>
                <div className="divider"/>
                <p className="course-details">
                    <span className="course-rating"> ★ {rating}</span>
                    | <span className="course-students">{students}</span> students
                </p>
            </div>
    )
}

