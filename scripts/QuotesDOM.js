import { getQuotes, AddNewQuote } from "./database.js";

/* ------Quotes-------EventListener------Quotes -----------*/
export const displayQuotes = () => {
    const dataList = getQuotes();
    let dataList_container = ` `;
    for (const list of dataList) {
        dataList_container += `<fieldset> <section>`;
        dataList_container += `<p id="quoteText">${list.quote}</p>`;
        dataList_container += `</section></fieldset>`;
    }
    return dataList_container;
};

document.addEventListener("click", (e) => {
    if (e.target.id === "Quote") {
        const NewQuote = document.getElementById("quoteTextArea")?.value;
        const newQuote = {
            quote: NewQuote,
        };
        AddNewQuote(newQuote);
    }
});
