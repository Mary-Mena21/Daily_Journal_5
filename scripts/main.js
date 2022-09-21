/* -----------------------------Import--------------------------     */
import {
    getNotes,
    getQuotes,
    getMoods,
    AddNewQuote,
    AddNewNote,
} from "./database.js";
/* -----------------------Entries----------------------------------     */

/* TEST */
/* -----------------------Entries----Date--------------    --------------*/
const displayEntries = () => {
    const entryDate = `
            <label for="entryDate">Date</label>
            <input id="date" class ="inputStyle" type="date" name="entryDate" class="entryForm__date" />`;

    document.getElementById("entryDate").innerHTML = entryDate;

    /* ------------------Entries----Concept------------------------------*/

    const entryConcept = `
    <label for="entryConcept">Concept Covered</label>
    <input id="concept" class ="inputStyle" type="text" name="entryConcept" class="entryForm__concept" />`;
    document.getElementById("entryConcept").innerHTML = entryConcept;

    /* ---------------------Entries----Learn-----------------------------*/

    const entryLearn = `
    <label for="entryLearn">Journal Entry Learn</label>
    <textarea  id="learn" class ="inputStyle" type="text" name="entryLearn" >
    </textarea>`;
    document.getElementById("entryLearn").innerHTML = entryLearn;

    /* -----------------------Entries-----Mood---------------------------*/

    const moodOptions = getMoods();
    let Options = ` `;
    for (let mood of moodOptions) {
        Options += `
        <option value="${mood}">${mood}</option>`;
    }
    document.getElementById("mood").innerHTML = Options;

    /* -----Record-Entries------EventListener-----Record-Entries-------- */
    const notes = getNotes();
    let notes_tables = ` `;
    for (const note of notes) {
        notes_tables += `<fieldset><ul>`;
        for (const entry in note) {
            notes_tables += `<li> ${note[entry]} </li>`;
        }
        notes_tables += `</ul> </fieldset>`;
    }
    document.getElementById("content").innerHTML = notes_tables;
};
displayEntries();

/* --------------------------TEST EVENTLISTENER------------------------- */
document.addEventListener("click", (e) => {
    //e.preventDefault();
    if (e.target.id === "submit") {
        console.log(addEventListener("click", (e)))
        const NewDate = document.getElementById("date")?.value;
        const newConcept = document.getElementById("concept")?.value;
        const newEntry = document.getElementById("learn")?.value;
        const newMood = document.getElementById("mood")?.value;
        //let NewDate = new Date(Date.now()).toLocaleDateString();

        const NewNote = {
            date: NewDate,
            concept: newConcept,
            entry: newEntry,
            mood: newMood,
        };
        //console.log(NewNote);
        AddNewNote(NewNote);
    }
});

document.addEventListener("note", (event) => {
    displayEntries();
});
// /* -------------------------------------------------------------------- */

/* --------------Quotes-------EventListener------Quotes ----------------*/
const displayQuotes = () => {
    const dataList = getQuotes();
    let dataList_container = ` `;
    for (const list of dataList) {
        dataList_container += `<fieldset> <section>`;
        for (const item in list) {
            dataList_container += `<p id= "quoteText">${list[item]}</p>`;
        }
        dataList_container += `</section></fieldset>`;
    }
    document.getElementById("listComponent").innerHTML = dataList_container;
};
displayQuotes();

document.addEventListener("click", (e) => {
    if (e.target.id === "Quote") {
        const NewQuote = document.getElementById("quoteTextArea")?.value;
        const newQuote = {
            quote: NewQuote,
        };
        AddNewQuote(newQuote);
    }
});

document.addEventListener("quote", (event) => {
    displayQuotes();
});
/* -------------------------------------------------------------------- */
