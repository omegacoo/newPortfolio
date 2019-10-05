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
            if(!$(e.target).hasClass('js-content-window') && !$(e.target).hasClass('js-buttons')){
                STATE.screen = 'landing';
                renderMainElement();
            };
        }
    });
}

function buildCurrentElement(source){           // Creating HTML based on STATE.screen
    if(STATE.screen === "landing"){
        return `
        <button class="js-buttons js-content-window" id="bio">Bio</button>
        <button class="js-buttons js-content-window" id="projects">Projects</button>
        <button class="js-buttons js-content-window" id="contact">Contact</button>
        `
    }if(STATE.screen === "bio"){
        return `
        <div class="js-content js-content-window">
            <span id="close-button">x</span>
            <h3 class="js-content-window">Bio</h3><br>
            <p class="js-content-window">&emsp;I am an extremely passionate programmer. I have a BA in Philosophy and have always enjoyed the logical aspects of coding.</p><br>
            <p class="js-content-window">&emsp;I have been in the Army for 17 years and am a Company Commander. I have great personal discipline, integrity, and the ability to work with people from all walks of life, without conflict.</p><br>
            <p class="js-content-window">&emsp;It is my dream to become a web developer, to make your company a better place, and help it develop a better product.</p><br>
            <p class="js-content-window">&emsp;On my own time I try to keep up to date with current trends in the web development field as well as learn other languages and best practices.</p>
        </div>
        `
    }if(STATE.screen === "projects"){
        return `
        <div class="js-content js-content-window">
        <span id="close-button">x</span>
            <h3 class="js-content-window">Projects</h3>
            <section role="first project">
                <h4 class="js-content-window">Quiz App</h4>
                <img  class="js-content-window" src="res/quiz-app.png">
                <section class="used-techs">
                    <img class="js-project-techs" src="res/html.png" alt="html">
                    <img class="js-project-techs" src="res/css.png" alt="css">
                    <img class="js-project-techs" src="res/js.png" alt="javascript">
                    <img class="js-project-techs" src="res/jquery.png" alt="jquery">
                </section>
                <div class="js-content-window js-projects-window">
                    Repo: <a target="_blank" class="js-content-window" href="https://github.com/omegacoo/quiz-app">code</a>
                    Live: <a target="_blank" class="js-content-window" href="https://omegacoo.github.io/quiz-app">app</a>
                </div>
                <p class="js-content-window">&emsp;An app that walks the player through several quotes by famous philosophers, testing their knowledge. Scalability is simple and all done in one place.</p>
            </section>
        </div>
        `
    }if(STATE.screen === "contact"){
        return `
        <div class="js-content js-content-window">
        <span id="close-button">x</span>
            <section class="heading js-content-window" role="heading">
                <h3 class="js-content-window">Contact</h3>
                <p class="js-content-window">Reach out to me in any of the following ways:</p>
            </section>
            <section role="links" class="links js-content-window">
                <p class="js-content-window">Email: <a target="_blank" class="js-content-window" href="bsumser@yahoo.com">bsumser@yahoo.com</a></p>
                <p class="js-content-window">GitHub: <a target="_blank" class="js-content-window" href="https://github.com/omegacoo">Omegacoo</a></p>
                <p class="js-content-window">LinkedIn: <a target="_blank" class="js-content-window" href="https://www.linkedin.com/in/benjamin-sumser-863a3a182/">Ben Sumser</a></p>
            </section>
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