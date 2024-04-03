import { NavBar } from "./NavBar.jsx";
import TestItem from "./testItem.js";
export function HomePage(){
    var testItem = TestItem();
    return(
        <>
        <NavBar/>
        <p className="text-4xl"> Welcome to NU Market! </p>
        {gridItem({image:testItem.image, title:testItem.name, current_bid:testItem["current-bid"]})}
        </>
        
    
        
    );
}
function grid({image, title, current_bid}){
    var testItems  =  TestItem()
    var graphics = []
    for(let i =  0; i < 12; i++){
       graphics.push(<gridItem image={image} title={title} current_bid = {current_bid}/>)


    }
    return( <div className="flex flex-wrap justify-center"> {graphics} </div>);
}
function gridItem({image, title, current_bid}){

    return(
        <a href="/item-test">
        <div className="m-10 items-center text-center">
            
            <img className="mx-auto" src={image}/> 
            
      
            
            
            <div className="grid grid-rows-2 ">
            <h1 className="text-3xl text-center"> {title}</h1>

                    <p> {current_bid} </p>



                
               
            </div>
            
           
        
        </div>
        </a>
    );

}