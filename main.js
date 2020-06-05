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

function buildCurrentElement(){           // Creating HTML based on STATE.screen
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
            <p class="js-content-window">&emsp;On my own time I try to keep up to date with current trends in the web development field as well as learn other languages and best practices.</p><br>
            <p class="js-content-window">&emsp;I want nothing more than to work on a great team, where I can help to promote your company's product as well as learn from and work with your already amazing developers!</p>
        </div>
        `
    }if(STATE.screen === "projects"){
        return `
        <div class="js-content js-content-window">
        <span id="close-button">x</span>
            <h3 class="js-content-window">Projects</h3>
            
            <section role="first project">
                <h4 class="js-content-window">Pantry Buddy</h4>
                <img  class="js-content-window" src="res/recipes.png">
                <section class="used-techs">
                    <img class="js-project-techs" src="res/html.png" alt="html">
                    <img class="js-project-techs" src="res/css.png" alt="css">
                    <img class="js-project-techs" src="res/js.png" alt="javascript">
                    <img class="js-project-techs" src="res/node.png" alt="node">
                    <img class="js-project-techs" src="res/react.png" alt="react">
                    <img class="js-project-techs" src="res/postgresql.png" alt="postgresql">
                </section>
                <div class="js-content-window js-projects-window">
                    Front-end Repo: <a target="_blank" class="js-content-window" href="https://github.com/omegacoo/Recipe_me">code</a> |
                    Back-end Repo: <a target="_blank" class="js-content-window" href="https://github.com/omegacoo/recipe_me_server">code</a> |
                    Live: <a target="_blank" class="js-content-window" href="https://pantry-buddy.com">app</a>
                </div>
                <p class="js-content-window">&emsp;An app which allows the user to select ingredients they have on hand and returns a list of recipes which they can currently make.</p>
                <p class="js-content-window">&emsp;I made this app because of all those people out there who are budgeting their meals, like myself. I can't count the number of times I've not been able to think of something for dinner, but I've had plenty of random things in my pantry. This app should help fix that problem!</p>
            </section>
            <div class="divider"></div>
            
            <section role="second project">
                <h4 class="js-content-window">Indie Corner</h4>
                <img  class="js-content-window" src="res/indie-corner.png">
                <section class="used-techs">
                    <img class="js-project-techs" src="res/html.png" alt="html">
                    <img class="js-project-techs" src="res/css.png" alt="css">
                    <img class="js-project-techs" src="res/js.png" alt="javascript">
                    <img class="js-project-techs" src="res/node.png" alt="node">
                    <img class="js-project-techs" src="res/react.png" alt="react">
                    <img class="js-project-techs" src="res/postgresql.png" alt="postgresql">
                </section>
                <div class="js-content-window js-projects-window">
                    Front-end Repo: <a target="_blank" class="js-content-window" href="https://github.com/omegacoo/indie_corner_client">code</a> |
                    Back-end Repo: <a target="_blank" class="js-content-window" href="https://github.com/omegacoo/indie_corner_server">code</a> |
                    Live: <a target="_blank" class="js-content-window" href="https://indie-corner-client.now.sh/">app</a>
                </div>
                <p class="js-content-window">&emsp;A simple forum for everything Indie Gaming related!</p>
                <p class="js-content-window">&emsp;I love indie games. I think it is the place where the largest amount of innovation occurs. This is because they aren't throwing millions of dollars behind a 'maybe', but for this same reason, getting publicity is difficult. They need all the help they can get to promote their products, hopefully this will help them out!</p>
            </section>
            <div class="divider"></div>
            
            <section role="third project">
                <h4 class="js-content-window">Represent Me!</h4>
                <img  class="js-content-window" src="res/rep_card.png">
                <section class="used-techs">
                    <img class="js-project-techs" src="res/html.png" alt="html">
                    <img class="js-project-techs" src="res/css.png" alt="css">
                    <img class="js-project-techs" src="res/js.png" alt="javascript">
                    <img class="js-project-techs" src="res/jquery.png" alt="jquery">
                </section>
                <div class="js-content-window js-projects-window">
                    Repo: <a target="_blank" class="js-content-window" href="https://github.com/omegacoo/repme">code</a> |
                    Live: <a target="_blank" class="js-content-window" href="https://omegacoo.github.io/repme">app</a>
                </div>
                <p class="js-content-window">&emsp;An app which enables the PEOPLE to find and communicate with all their elected officials!</p>
                <p class="js-content-window">&emsp;During each election cycle, a recurring issue that I have run into has been, who IS this candidate? I don't believe in voting party lines, so how do I educate myself on the candidates when I can't find any information about them?</p>
                <p class="js-content-window">&emsp;Utilizing Google's Civic API this app hopes to help the voter get a better picture of just who each of their options really are, so we don't have to vote blind!</p>
            </section>
            <div class="divider"></div>
            
            <section role="fourth project">
                <h4 class="js-content-window">Quiz App</h4>
                <img  class="js-content-window" src="res/quiz-app.png">
                <section class="used-techs">
                    <img class="js-project-techs" src="res/html.png" alt="html">
                    <img class="js-project-techs" src="res/css.png" alt="css">
                    <img class="js-project-techs" src="res/js.png" alt="javascript">
                    <img class="js-project-techs" src="res/jquery.png" alt="jquery">
                </section>
                <div class="js-content-window js-projects-window">
                    Repo: <a target="_blank" class="js-content-window" href="https://github.com/omegacoo/quiz-app">code</a> |
                    Live: <a target="_blank" class="js-content-window" href="https://omegacoo.github.io/quiz-app">app</a>
                </div>
                <p class="js-content-window">&emsp;An app that walks the player through several quotes by famous philosophers, testing their knowledge. Scalability is simple and all done in one place.</p>
                <p class="js-content-window">&emsp;A fun little project to practice state management and screen switching for a basic quiz on my favorite topic, philosophy!</p>
            </section>
            <div class="divider"></div>
        </div>
        `
    }if(STATE.screen === "contact"){
        return `
        <div class="js-content js-content-window">
        <span id="close-button">x</span>
            <section class="heading js-content-window" role="heading">
                <h3 class="js-content-window">Contact</h3>
                <p id="contact-header" class="js-content-window">Reach out to me in any of the following ways:</p>
            </section>
            <section role="links" class="links js-content-window">
                <p class="js-content-window">Email: <a target="_blank" class="js-content-window" href="mailto: bsumser@yahoo.com">bsumser@yahoo.com</a></p>
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