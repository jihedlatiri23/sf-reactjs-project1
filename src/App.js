import './App.css';
import course1 from "./assets/course1.png"
import course2 from "./assets/course2.png"
import course3 from "./assets/course3.png"
import course4 from "./assets/course4.png"
import course5 from "./assets/course5.png"
import course6 from "./assets/course6.png"
import course7 from "./assets/course7.png"
import course8 from "./assets/course8.png"
import course9 from "./assets/course9.png"
import course10 from "./assets/course10.png"
import Card from './Components/Card';

//formation esmha reactjs , 50 , 5 , 
//card 3
//copier coller 3 
//nekteb lcode mte3i nekbtou mara bark wnesta3mlou we ile nadih 
//2 formations appel lel component (2 fois) wn3adilou props (esm lformation (reactjs)(expressjs)(html/css))
//string = "reactjs"
//number= 190
//boolean= true/false (3morhom akthar mel 18 we ile )
// { esmlformation: "reactjs" , soumlformation: 190 , déstinePourAdult: true}
// [{ esmlformation:"reactjs", soumlformation: 190} , {esmlformation:"html/css"}] 

function App() {

  const courses = [
    {
      title: "Machine Learning A-Z",
      price: "$57",
      category: "DESIGN",
      rating: "5.0",
      students: "265.7K",
      image: course1
    },
    {
      title: "Web Development ",
      price: "$57",
      category: "DEVELOPMENT",
      rating: "4.9",
      students: "265.7K",
      image: course2
    },
    {
      title: "Learn Python ",
      price: "$57",
      category: "TECHNOLOGY",
      rating: "4.8",
      students: "265.7K",
      image: course3
    },
    {
      title: "Machine Learning A-Z",
      price: "$57",
      category: "DESIGN",
      rating: "5.0",
      students: "265.7K",
      image: course1
    },
    {
      title: "Web Development ",
      price: "$57",
      category: "DEVELOPMENT",
      rating: "4.9",
      students: "265.7K",
      image: course2
    },
    {
      title: "Learn Python ",
      price: "$57",
      category: "TECHNOLOGY",
      rating: "4.8",
      students: "265.7K",
      image: course3
    },
    {
      title: "Machine Learning A-Z",
      price: "$57",
      category: "DESIGN",
      rating: "5.0",
      students: "265.7K",
      image: course1
    },
    {
      title: "Web Development ",
      price: "$57",
      category: "DEVELOPMENT",
      rating: "4.9",
      students: "265.7K",
      image: course2
    },
    {
      title: "Learn Python ",
      price: "$57",
      category: "TECHNOLOGY",
      rating: "4.8",
      students: "265.7K",
      image: course3
    },
    {
      title: "Machine Learning A-Z",
      price: "$57",
      category: "DESIGN",
      rating: "5.0",
      students: "265.7K",
      image: course1
    },
  ]

  //bech tdour 3ala array , bech traja3 7aja mou3ayana  enou na3mlou
  //eli esmou Card

  const users = ['samir']
  users.map((username)=>{
    console.log(username,"2024")
  })

  return (
    <div className="App">
      <h1 id='heading'>Best Selling Courses</h1>
      <div className='course-container'>
          {
            courses.map((course)=>(
              <Card course={course}/> 
            ))
          }
      </div>
    </div>
  );
}

export default App;
