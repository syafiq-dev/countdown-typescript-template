// Add your code here. All actions will run unless you explicitly skip them.
// Quick tips!
// Auto-complete is on. Start typing to see ingredient options.
// Hover over any ingredient to see the data type and an example.
// F1 to list keyboard shortcuts.
// TypeScript v2.92

let text = ''

// Get current date
let now = Meta.currentUserTime


/*
============
  PANTANG 1
============
*/

// Set target date (February 15, 2026)
const startingDate = moment("15/02/2026", "DD/MM/YYYY");

const p1_duration = moment.duration(now.diff(startingDate))
const p1_durationDays = Math.floor(p1_duration.as('days'))

const p1_days = 44


// Calculate date 44 days before target date
const p1_endDate = startingDate.add(p1_days, 'days');
// Format the countdown date
const p1_lastDate = p1_endDate.format("D MMM YYYY");

var p1_text = `<b><u>Countdown pantang 44 hari:</u></b>\n
<code>${p1_days - p1_durationDays} days left</code>\n
Last Date: ${p1_lastDate}\n
`
if(p1_days == p1_durationDays){
  p1_text = `<b><u>Countdown pantang 44 hari:</u></b>\n
  <b>Today is the last day!</b>\n
  Last Date: ${p1_lastDate}\n
  `
}

if(p1_durationDays <= p1_days){
  text += p1_text
}else{
  text = 'No pantang'
  Telegram.sendMessage1.skip(text)
}

Telegram.sendMessage1.setText(text);

/*
============
  PANTANG 2
============
*/

const p2_months = 6



Telegram.sendMessage2.skip('in progress')
