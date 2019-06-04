// Why are we building DOM components in JavaScript in the first place?
/*
    Because developers are LAZY! I don't want to write the exact same html over and over and over again.
    I want to be able to create a template of html, and simply plug in a student that I'd want to add to my report.

    Let's create a report of students to be put on the DOM!
*/

// Function that generates HTML for a SINGLE student (only creates a "Leah"!)
/*
    It's ONE purpose is to return an HTML component about Leah
*/
const createLeahComponent = function () {
    return `
    <div class="student">
    <h1>Leah Hoefling</h1>
    <section>Day cohort 26</section>
    <aside>
        Loves plants and is <em>very</em> fashionable.
    </aside>
    </div>
    `
}

// Now I want to put this student that I created inside of the createLeahComponent function to the DOM!
// Store a reference to an existing HTML element, so we have somewhere to put Leah:
const studentContainer = document.querySelector("#container")

// Update its contents with the return value of the function:
studentContainer.innerHTML += createLeahComponent();


// Now let's make this D-Y-N-A-M-I-C 😎
/*
    Below I have an array of students, and I want to create HTML for ALL of them. But I don't want to write 12 more functions that all do the EXACT. SAME. THING. I have to keep it D-R-Y!
    I need to refactor my createStudentComponent function so it can create a different student every time I call it (right now it only creates the ONE, SAME student).
*/

// An array of students
const studentArray = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// Our refactored function:
/*
    Our array of student objects all have similar properties on them: name, info, subject, and score.
    We can create arguments in our function that correspond with our student objects, since that's what we want to print to the DOM.
*/
// const createStudentComponent = function (name, subject, info) {
//     return `
//     <div class="student">
//     <h1>${name}</h1>
//     <section>${subject}</section>
//     <aside>
//         ${info}
//     </aside>
//     </div>
//     `
// }


// Adding students to the DOM using our refactored function:
// studentContainer.innerHTML += createStudentComponent("Kristen", "Science", "She has a really cute puppo");
// studentContainer.innerHTML += createStudentComponent("Madi", "Math", "Math sucks");


// function that takes a single object as the argument:
const createStudentComponent = function (studentObject) {
    return `
    <div class="student">
    <h1>${studentObject.name}</h1>
    <section>${studentObject.subject}</section>
    <aside>
        ${studentObject.info}
    </aside>
    </div>
    `
}

/*
    Now that I have a function that dynamically creates students based on the arguments being passed...
    How can I make it print every student's info in the studentsArray?
*/


// We can loop over the studentArray and print EACH one to the DOM!
/*
    We can use i to get access to every index in the studentArray.
*/
for(let i = 0; i < studentArray.length; i++){
    studentContainer.innerHTML += createStudentComponent(studentArray[i]);
}
