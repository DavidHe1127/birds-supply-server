
## New Parrot Request Result Notifications

  ### Notifications Persistence
    * Use firestore to store notifications
    * Server app takes care of syncing notifications to firestore
    * Client side app needs to be set up and gain access to read notifications from firestore
    * Data structure
    ```js
    db.collection('USERS')
      .doc('USER_A')
      .collection('NEW_PARROT_REQUEST_RESULT_NOTIFICATIONS')
      .doc('REQUEST_ID_ABC')
      .set({
        status: 'APPROVED',
        reason: 'This request does not exist in our system',
        actionedOn: Date.now()
      });
    ```
  ### Push Registration Token Persistence
    * Save it to firestore
    ```js
      db.collection('USERS')
        .doc('USER_B')
        .set({
          registration_tokens: ['jsjkJBLKJSDKijdsfijsdBJKLSDIELWLJKD']
        });
    ```


  ### Send and Receive Notifications
    * Plug admin sdk into graphql server
    * Admin sdk is used to push notifications to registered client devices/browsers
    * Follow setup for Web clients to receive notifications coming from server
