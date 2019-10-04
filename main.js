const STATE = {                                 // Which screen should be current displayed
    screen: 'landing'
};

function bioClick(){                            // Binding function to bio button
    $('main').on('click', '#bio', function(){
        STATE.screen = "bio";
        renderMainElement();
    })
}

function projectsClick(){                       // Binding function to projects button
    $('main').on('click', '#projects', function(){
        STATE.screen = "projects";
        renderMainElement();
    })
}

function contactClick(){                        // Binding function to contact button
    $('main').on('click', '#contact', function(){
        STATE.screen = "contact";
        renderMainElement();
    })
}

function backToLanding(){
    $('*').on('click', function(e){
        if(STATE.screen !== 'landing'){
            if(!$(e.target).hasClass('js-content') && !$(e.target).hasClass('js-buttons')){
                STATE.screen = 'landing';
                renderMainElement();
            };
        }
    });
}

function buildCurrentElement(source){           // Creating HTML based on STATE.screen
    if(STATE.screen === "landing"){
        return `
        <button class="js-buttons" id="bio">Bio</button>
        <button class="js-buttons" id="projects">Projects</button>
        <button class="js-buttons" id="contact">Contact</button>
        `
    }if(STATE.screen === "bio"){
        return `
        <div class="js-content">
            <h3>About Me</h3>
            <p></p>
        </div>
        `
    }if(STATE.screen === "projects"){
        return `
        <div class="js-content">
            
        </div>
        `
    }if(STATE.screen === "contact"){
        return `
        <div class="js-content">
            
        </div>
        `
    }
}

function renderMainElement(){                   // Inserting HTML into the DOM
    const currentScreen = buildCurrentElement();

    $('main').html(currentScreen);
}

function App(){                                 // App entrypoint
    renderMainElement();
    bioClick();
    projectsClick();
    contactClick();
    backToLanding();
}

$(App);