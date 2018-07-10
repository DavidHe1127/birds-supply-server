
### New Parrot Request Result Notifications

* Use firestore to store notifications
* Data structure

```js
db.collection('NEW_PARROT_REQUEST_RESULT_NOTIFICATIONS')
  .doc('COGNITO_USER_ID')
  .collection('notifications')
  .doc('NEW_PARROT_REQUEST_ID_IN_MONGODB')
  .set({
    status: 'APPROVED',
    reason: 'This request does not exist in our system',
    actionedOn: Date.now()
  });
```
