/* -----------------------------Import--------------------------     */
import { getNotes, getMoods, AddNewNote } from "./database.js";
/* -----------------------Entries----------------------     */
export const displayEntries = () => {
    const Entries = `
        <fieldset class="entry__date" id="entryDate">
        <label for="entryDate">Date</label>
        <input id="date" class="inputStyle" type="date" name="entryDate" class="entryForm__date" />
        </fieldset>
        <fieldset class="entry__concepts" id="entryConcept">
        <label for="entryConcept">Concept Covered</label>
        <input id="concept" class ="inputStyle" type="text" name="entryConcept" class="entryForm__concept" />
        </fieldset>
        <fieldset class="entry__learn" id="entryLearn">
        <label for="entryLearn">Journal Entry Learn</label>
        <textarea  id="learn" class ="inputStyle" type="text" name="entryLearn" >
        </textarea>
        </fieldset>
        <section class="entry__button">
        <button id="submit" type="button">Record Journal Entry</button>
        </section>
        <section class= "content" id ="content" value=""></section><!--  -->
        <hr/>
        <section class="entry__button">
        <button id = "Quote" type="button">Record Quote</button>
        </section>       
        <fieldset class="entry__learn">
        <label   for="entryDate">Quote Entry</label>
        <input id= "quoteTextArea" type="text" class="inputStyle" placeholder="Coding Quote" value=""/>
        </fieldset>`;
    /* -----------------------Entries-----Mood---------------------------*/

    const moodOptions = getMoods();
    let Options = ` `;
    Options += `<fieldset class="entry__mood" id="entryMood">
        <label for="entryMood">Mood of the day</label>
        <select class ="inputStyle" name="entryMood" id="mood"> `;
    for (let mood of moodOptions) {
        Options += `
            <option value="${mood}">${mood}</option>`;
    }
    Options += `</select></fieldset>`;
    //document.getElementById("mood").innerHTML = Options;

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
    return Entries;
};


/* --------------------------TEST EVENTLISTENER------------------------- */
document.addEventListener("click", (e) => {
    //e.preventDefault();
    if (e.target.id === "submit") {
        console.log(addEventListener("click", e));
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
        AddNewNote(NewNote);
    }
});

document.addEventListener("note", (event) => {
    displayEntries();
});
