/* -----------------------------Import--------------------------     */
import { getMoods, getNotes, AddNewQuote, getQuotes } from "./database.js";
/* -----------------------Entries----------------------------------     */

/* -----------------------Entries----Date--------------    --------------*/
const displayEntries = () => {
    const entryDate = `
            <label for="entryDate">Date</label>
            <input class ="inputStyle" type="date" name="entryDate" class="entryForm__date" />`;

    document.getElementById("entryDate").innerHTML = entryDate;

    /* ------------------------Entries----Concept-------------------------------*/

    const entryConcept = `
    <label for="entryConcept">Concept Covered</label>
    <input class ="inputStyle" type="text" name="entryConcept" class="entryForm__concept" />`;
    document.getElementById("entryConcept").innerHTML = entryConcept;

    /* ---------------------Entries----Learn-----------------------------*/

    const entryLearn = `
    <label for="entryLearn">Journal Entry Learn</label>
    <textarea class ="inputStyle" type="text" name="entryLearn" rows="10" >
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
            notes_tables += `<li> */*/* ${note[entry]} </li>`;
        }
        notes_tables += `</ul> </fieldset>`;
    }
    document.getElementById("content").innerHTML = notes_tables;
};

displayEntries();

/* -------------------------------------------------------------------- */

/* --------------Quotes-------EventListener------Quotes ----------------*/
const displayQuotes = () => {
    const dataList = getQuotes();
    let dataList_container = ` `;
    for (const list of dataList) {
        dataList_container += `<fieldset> ${"***"} <section>`;
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
