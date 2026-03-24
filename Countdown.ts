// Auto-complete is on. Start typing to see ingredient options.
// Hover over any ingredient to see the data type and an example.
// F1 to list keyboard shortcuts.

let text = ''
// Get current date
let now = Meta.currentUserTime
// Set starting date (February 15, 2026)
const startingDate = moment("15/02/2026", "DD/MM/YYYY");

/*
============
  PANTANG 1
============
*/

const p1_days = 44

const p1_duration = moment.duration(now.diff(startingDate))
const p1_durationDays = Math.floor(p1_duration.as('days'))

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

if(p1_durationDays > p1_days){
  p1_text = 'No pantang'
  Telegram.sendMessage1.skip(p1_text)
}

Telegram.sendMessage1.setText(p1_text);

/*
============
  PANTANG 2
============
*/

const p2_months = 6
const p2_days = p2_months * 30

const p2_duration = moment.duration(now.diff(startingDate))
const p2_durationDays = Math.floor(p2_duration.as('days'))

// Calculate date 44 days before target date
const p2_endDate = startingDate.add(p2_days, 'days');
// Format the countdown date
const p2_lastDate = p2_endDate.format("D MMM YYYY");

var p2_text = `<b><u>Countdown pantang 6 bulan:</u></b>\n
<code>${p2_days - p2_durationDays} days left</code>\n
Last Date: ${p2_lastDate}\n
`
if(p2_days == p2_durationDays){
  p2_text = `<b><u>Countdown pantang 6 bulan:</u></b>\n
  <b>Today is the last day!</b>\n
  Last Date: ${p2_lastDate}\n
  `
}

if(p2_durationDays > p2_days){
  p2_text = 'No pantang'
  Telegram.sendMessage2.skip(p2_text)
}

Telegram.sendMessage2.setText(p2_text);


// ===============
