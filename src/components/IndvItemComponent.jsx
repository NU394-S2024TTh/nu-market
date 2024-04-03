import { NavBar } from "./NavBar";
import TestItem from "./testItem";
export function IndvItemComponent(){
    var item = TestItem();
    
  // json file with - 
  // key -> values as {picture: // link 
//                      title = string, description, bri}
    // first need to parse image 
    return(
        <>
        <NavBar/>
        <div className="m-10 items-center text-center">
            <h1 className="text-3xl text-center"> {item.name}</h1>
            <img className="mx-auto" src={item.image}/> 
            <p> {item.description}</p>
            
            
            <div className="grid grid-cols-2">
                <div>
                    <p> Current Bid: </p>
                    <p> {item["current-bid"]} </p>
                    <p> Starting  Bid: </p>
                    <p> {item["starting-bid"]} </p>
                </div>
                <div>
                    <p className="text-italic">  bidding ends </p>
                    <p> {item.deadline}</p> 
                </div>
                
               
            </div>
            <div className="grid">
                .
                <button> Place Bid </button>
                
                <button> Save for later </button>
            </div >
            
           
        
        </div>
        </>
    );
}