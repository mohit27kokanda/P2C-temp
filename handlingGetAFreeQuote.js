document.getElementById("getAFreeQuoteForm").onsubmit = e => {
    e.preventDefault();

    const form = {"businesssupport":[],"itsupport":[]};

    for(key of Object.keys(e.target)){
        if(e.target[key].name === "businesssupport"){
            if(e.target[key].checked){
                form[e.target[key].name].push(e.target[key].value);
            }
            
        }
        else if(e.target[key].name === "itsupport"){
            if(e.target[key].checked){
                form[e.target[key].name].push(e.target[key].value);
            }
        }
        else{
            form[e.target[key].name] = e.target[key].value;
        }
    }

    const url = "https://p2c-backend-api.herokuapp.com/api/quote/";

    fetch(url, {
        method: "POST",
        body: JSON.stringify(form),

        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok){
            alert("Applicaiton sent successfully.");
        }
    })
    .catch(error => {
        alert("Applicaiton not sent.");
    })

    // window.location.reload();
    

}