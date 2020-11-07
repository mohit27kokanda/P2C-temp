// handling career form data
document.getElementById("career_form").onsubmit = e => {
    e.preventDefault();
    const form = new FormData();

    for (key of Object.keys(e.target)){
            if(e.target[key].name !== "submit"){
                
                if(e.target[key].value === ""){
                    alert("Provide "+e.target[key].name);
                    return;
                }

                if(e.target[key].name === "cv"){
                    form.append([e.target[key].name], e.target[key].files[0]);
                }
                else{

                    form.append([e.target[key].name],e.target[key].value);
                }

            }       
    }

    const url = "https://p2c-backend-api.herokuapp.com/api/jobapplication/";

    fetch(url, {
        method: "POST",
        body: form,

        // headers: {
        //     'Content-Type': 'multipart/form-data'
        // }
    })
    .then(response => {
        if(response.ok){
            alert("Applicaiton sent successfully.");
            window.location.reload();
        }
    })
    .catch(error => {
        alert("Applicaiton not sent.");
    })

    
};
