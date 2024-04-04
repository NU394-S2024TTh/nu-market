import React, { useState } from 'react'; // Step 1
import { NavBar } from "./NavBar";
import { testData } from "./testItem";

export function IndvItemComponent() {
    // Step 2: Initialize item state
    const [item, setItem] = useState(testData["1"]);
    
    // Step 3: Event handler for placing a bid
    const handleBid = () => {
        const userBid = prompt("Enter your bid:"); // Simple prompt for demonstration
        
        // You'd likely want more robust validation and conversion
        const bid = parseFloat(userBid);
        if (bid && bid > item["current-bid"]) { // Basic validation
            setItem({...item, "current-bid": bid}); // Update state with new bid
        } else {
            alert("Please enter a valid bid higher than the current bid.");
        }
    };

    return (
        <>
            <NavBar />
            <div className="m-10 items-center text-center">
                <h1 className="text-3xl text-center">{item.name}</h1>
                <img className="mx-auto" src={item.image} alt={item.name} />
                <p>{item.description}</p>
                
                <div className="grid grid-cols-2">
                    <div>
                        <p> Current Bid: </p>
                        <p>{item["current-bid"]}</p>
                        <p> Starting Bid: </p>
                        <p>{item["starting-bid"]}</p>
                    </div>
                    <div>
                        <p className="text-italic">bidding ends</p>
                        <p>{item.deadline}</p>
                    </div>
                </div>
                <div className="grid">
                    <button onClick={handleBid}>Place Bid</button>
                    <button>Save for later</button>
                </div>
            </div>
        </>
    );
}