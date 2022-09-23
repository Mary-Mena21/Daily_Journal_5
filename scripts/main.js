import { fetchQuotes, fetchNotes, fetchMoods } from "./database.js";
import { displayQuotes } from "./QuotesDOM.js";
import { displayEntries } from "./EntriesDOM.js";

const QuoteContainer = document.getElementById("listComponent");
const EntriesContainer = document.getElementById("Entries");

const render = async () => {
    await fetchQuotes();
    await fetchNotes();
    await fetchMoods();

    QuoteContainer.innerHTML = displayQuotes();
    EntriesContainer.innerHTML = displayEntries();
};
render();

document.addEventListener("quote", (event) => {
    render();
});

document.addEventListener("note", (event) => {
    render();
});
