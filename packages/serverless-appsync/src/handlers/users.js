export function create(event, context, callback) {
  console.log('##### create', event, context);

  // create entry in users table

  callback(null, event);
}
