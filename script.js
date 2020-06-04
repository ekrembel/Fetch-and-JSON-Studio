// TODO: add code here
window.addEventListener("load", function() {
    let i = 0;
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const astronaut1 = document.getElementById("cont1");
            const astronaut2 = document.getElementById("cont2");
            const astronaut3 = document.getElementById("cont3");
            const astronaut4 = document.getElementById("cont4");
            const astronaut5 = document.getElementById("cont5");
            const astronaut6 = document.getElementById("cont6");
            const astronaut7 = document.getElementById("cont7");
            let astronauts = [astronaut1, astronaut2, astronaut3, astronaut4, astronaut5, astronaut6, astronaut7];
            document.getElementById("button").addEventListener("click", function() {
                if (json[i].active === true) {
                    astronauts[i].innerHTML = `Astronaut ${i + 1}` + `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li style="color: green">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>    
                    `;                    
                }
                else {
                    astronauts[i].innerHTML = `Astronaut ${i + 1}` + `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>    
                    `;
                }
                i = i + 1;
                if (i > astronauts.length - 1) {
                    alert("Here the last one comes");
                    event.preventDefault();
                }
            })
        });
    });
});