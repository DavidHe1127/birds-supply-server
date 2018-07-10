
## New Parrot Request Result Notifications

  ### Notifications Persistence
    * Use firestore to store notifications
    * Server app takes care of syncing notifications to firestore
    * Client side app needs to be set up and gain access to read notifications from firestore
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

  ### Send and Receive Notifications
    * Plug admin sdk into graphql server
    * Admin sdk is used to push notifications to registered client devices/browsers
    * Follow setup for Web clients to receive notifications coming from server
