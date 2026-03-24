// Add your code here. All actions will run unless you explicitly skip them.
// Quick tips!
// Auto-complete is on. Start typing to see ingredient options.
// Hover over any ingredient to see the data type and an example.
// F1 to list keyboard shortcuts.
// TypeScript v2.92

let text = ''

// Set target date (February 15, 2026)
const p1_targetDate = moment("15/02/2026", "DD/MM/YYYY");

// Get current date
let now = Meta.currentUserTime

const duration = moment.duration(now.diff(p1_targetDate))
const durationDays = Math.floor(duration.as('days'))

const p1_days = 44
const p2_months = 6

// Calculate date 44 days before target date
const p1_endDate = p1_targetDate.add(p1_days, 'days');
// Format the countdown date
const p1_lastDate = p1_endDate.format("D MMM YYYY");

var pantang_1_text = `<b><u>Countdown pantang 44 hari:</u></b>\n
<code>${p1_days - durationDays} days left</code>\n
Last Date: ${p1_lastDate}\n
`

if(p1_days == durationDays){
  pantang_1_text = `<b><u>Countdown pantang 44 hari:</u></b>\n
  <b>Today is the last day!</b>\n
  Last Date: ${p1_lastDate}\n
  `
}

if(durationDays <= p1_days){
  text += pantang_1_text
}else{
  text = 'No pantang'
  Telegram.sendMessage1.skip(text)
}

// Send message with the countdown date
Telegram.sendMessage1.setText(text);

Telegram.sendMessage2.skip('in progress')
