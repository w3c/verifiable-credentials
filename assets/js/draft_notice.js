const Ms_a_day = 1000 * 60 * 60 * 24;
const PROVISIONAL_LIMIT = 7;
/**
*   Get the number of days between two dates - not inclusive.
*
*   "between" does not include the start date, so days
*   between Thursday and Friday is one, Thursday to Saturday
*   is two, and so on. Between Friday and the following Friday is 7.
*
*   e.g. getDaysBetweenDates( 22-Jul-2011, 29-jul-2011) => 7.
*
*   If want inclusive dates (e.g. leave from 1/1/2011 to 30/1/2011),
*   use date prior to start date (i.e. 31/12/2010 to 30/1/2011).
*
*   Only calculates whole days.
*
* Credit to https://stackoverflow.com/users/7204614/ben-h, see [relevant stack overflow question](https://stackoverflow.com/questions/7763327/how-to-calculate-date-difference-in-javascript#7763335).
*
*   Assumes d0 <= d1
*
* @param d0 - older date value
* @param d1 - newer date value
*/
const getDaysBetweenDates = (d0, d1) => {
    // Copy dates so don't mess them up
    const x0 = new Date(d0);
    const x1 = new Date(d1);
    // Set to noon - avoid DST errors
    x0.setHours(12, 0, 0);
    x1.setHours(12, 0, 0);
    // Round to remove daylight saving errors
    return Math.round((x1.valueOf() - x0.valueOf()) / Ms_a_day);
};

function set_draft_notice() {
    const h_elements = document.getElementsByClassName("draft_notice_needed");
    if (h_elements.length !== 0) {
        const h = h_elements[0];
        // Check the time...
        const today  = new Date();
        const scripts = document.getElementsByTagName("script");
        console.log(scripts)
        for (let i = 0; i < scripts.length; i++) {
            const type = scripts[i].getAttribute('type');
            if (type === 'application/ld+json') {
                let schema = JSON.parse(scripts[i].textContent);
                if (schema.dateCreated !== undefined) {
                    if (getDaysBetweenDates(schema.dateCreated,today) < PROVISIONAL_LIMIT) {
                        h.insertAdjacentHTML('afterend', '<p class="draft_notice"><strong><em>– DRAFT Minutes –</em></strong></p>')
                    }
                }
            }
        }
    }
}
