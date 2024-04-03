import { NavBar } from "./NavBar.jsx";
import { testData } from "./testItem.js"; 
export function HomePage(){

    return(
        <>
        <NavBar/>
        <p className="text-4xl"> Welcome to NU Market! </p>
        {grid()}
        </>
        
    
        
    );
}
function grid(){
   
    const graphics = Object.values(testData).map((item, index) => (
        <GridItem key={index} image={item.image} title={item.name} current_bid={item["current-bid"]} />
    ));
    return( <div className="grid grid-cols-2"> {graphics} </div>);
}
function GridItem({key, image, title, current_bid}){
    console.log(current_bid)

    return(
        <a href="/item-test">
        <div className="m-10 items-center text-center">
            
            <img className="mx-auto" src={image}/> 
            
      
            
            
            <div className="grid grid-cols-2 ">
            <h1 className="text-3xl text-center"> {title}</h1>

            <h1> {current_bid} </h1>



                
               
            </div>
            
           
        
        </div>
        </a>
    );

}