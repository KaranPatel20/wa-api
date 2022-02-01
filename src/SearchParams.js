import React from "react";
import { useEffect, useState } from "react";
import { render } from "react-dom";

const SearchParams = () => {
    const [number, updateNumber] = useState("");
    const [message, updateMessage] = useState("");
    var finalMessage = " ";
    var finalNumber = " ";

    async function sendMessage() {
    finalNumber = number;
    var url = `https://api.whatsapp.com/send?phone=91${finalNumber}&text=${finalMessage}`;
 
        const res = fetch(
            url,
            {method: 'POST', mode: 'no-cors', redirect: 'follow', headers: {
                'Content-Type': 'url/api'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },}
        );

    
           
        //const json = await res.json();
        window.location.href = url;
        //console.log(url);
        console.log(res);

        
        }
// replace input
    function text2URL(){
        var str = message;
 
        // Trim the given string
        str = str.trim();
   
        // Replace All space (unicode is \\s) to %20
        str = str.replaceAll(" ", "%20");
   
        // Display the result
        finalMessage = str;
        console.log(finalMessage);
  
    }
    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
            }}> 
                <label htmlFor="number">
                    Mobile Number
                    <input
                        type="number"
                        id="number"
                        value={number}
                        placeholder="number"
                        onChange={(e) => updateNumber(e.target.value)}
                        onBlur={(e) => updateNumber(e.target.value)}
                    />
                                    {console.log(number)}

                </label>
                <label htmlFor="number">
                    Enter Message
                    <textarea
                        type="text"
                        rows="5"
                        cols="41"
                        id="message"
                        value={message}
                        placeholder="Type your message"
                        onChange={(e) => updateMessage(e.target.value)}
                        onBlur={(e) => text2URL()}
                    />
                                    {console.log(message)}

                </label>
                

                <button >Submit</button>
            </form>
        </div>
        
    )
    
};


export default SearchParams;
