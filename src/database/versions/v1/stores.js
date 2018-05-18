/**
 * V1 DB Stores.
 */
export default {
  // application internal settings.
  secrets: 'name',
  // unencrypted preferences.
  preferences: 'name,value',
  // activity.
  activities: '[account+id],account,id,value.timestamp',
  // user.
  user: 'name,value'
}
