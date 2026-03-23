// Add your code here. All actions will run unless you explicitly skip them.
// Quick tips!
// Auto-complete is on. Start typing to see ingredient options.
// Hover over any ingredient to see the data type and an example.
// F1 to list keyboard shortcuts.
// TypeScript v2.92

let text = ''

// Set target date (February 15, 2026)
const targetDate = moment("15/02/2026", "DD/MM/YYYY");

// Get current date
let now = Meta.currentUserTime

const duration = moment.duration(now.diff(targetDate))
const durationDays = Math.floor(duration.as('days'))

const pantang1_days = 44

// Calculate date 44 days before target date
const endDate = targetDate.add(pantang1_days, 'days');
// Format the countdown date
const lastDate = endDate.format("D MMM YYYY");

var pantang_1_text = `<b><u>Countdown pantang 44 hari:</u></b>\n
<code>${pantang1_days - durationDays} days left</code>\n
Last Date: ${lastDate}\n
`

if(pantang1_days == durationDays){
  pantang_1_text = `<b><u>Countdown pantang 44 hari:</u></b>\n
  <b>Today is the last day!</b>\n
  Last Date: ${lastDate}\n
  `
}

if(durationDays <= pantang1_days){
  text += pantang_1_text
}else{
  text = 'No pantang'
  Telegram.sendMessage.skip(text)
}

// Send message with the countdown date
Telegram.sendMessage.setText(text);
