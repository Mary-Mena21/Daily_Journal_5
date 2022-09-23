import { displayMoods } from "./Mood.js";
import { displayNotes } from "./Notes.js";

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
        <fieldset class="entry__mood" id="entryMood">
        <label for="entryMood">Mood of the day</label>
        <select class ="inputStyle" name="entryMood" id="mood">
        ${displayMoods()}
        </select></fieldset> 
        <section class="entry__button">
        <button id="submit" type="button">Record Journal Entry</button>
        </section>
        </fieldset>
        ${displayNotes()}   
        <section class= "content" id ="content" value=""></section><!--  -->
        <hr/>
        <section class="entry__button">
        <button id = "Quote" type="button">Record Quote</button>
        </section>       
        <fieldset class="entry__learn">
        <label   for="entryDate">Quote Entry</label>
        <input id= "quoteTextArea" type="text" class="inputStyle" placeholder="Coding Quote" value=""/>
        `;
    return Entries;
};
