import Dexie from 'dexie';

export const db = new Dexie("fpt_info");
db.version(1).stores({
  book: '++ title, author , releasedate' // Primary key and indexed props
});