
document.getElementById("contact-form").onsubmit = e =>{
    e.preventDefault();
    const form = {};

    for(key of Object.keys(e.target)){
        if(e.target[key].name !== "submit"){
            form[e.target[key].name] = e.target[key].value;
        }       
    };

    const url = "https://p2c-backend-api.herokuapp.com/api/contactus/";
    

    fetch(url, {
        method: "POST",
        body: JSON.stringify(form),

        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok){
            alert("Form submitted successfully");    
            window.location.reload();
        }
    })
    .catch(err => {
        alert("Form not submitted");
    });
};