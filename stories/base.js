/*
 * Ear We Go! – content
 *
 * Each module lives in its own file (m1.js, m2.js, m3.js) and holds a list of sessions.
 * After changing any text or key word, run:  node tools/validate.mjs  and  node tools/generate-audio.mjs
 *
 * Question types:
 *   mc  – multiple choice. Exactly 3 options; the FIRST option in "o" is the correct one (the app shuffles them).
 *   tf  – true / false statement. "a" is true or false.
 *   gap – fill in the gap. "q" contains ___ once and "accept" lists all accepted answers (lower case).
 * "why" is the short explanation shown after checking.
 *
 * Text rules (the audio is generated sentence by sentence):
 *   – no abbreviations with dots (write "Mr Hill", not "Mr. Hill") and no decimal numbers ("4.50")
 *   – no quotation marks inside the spoken lines
 */
window.EWG_MODULES = [];

/* Splits a line into sentences. Used by the app AND by the audio generator, so both always agree. */
window.EWG_split = function (text) {
  return text.replace(/([.!?])\s+/g, '$1\n').split('\n').filter(Boolean);
};
