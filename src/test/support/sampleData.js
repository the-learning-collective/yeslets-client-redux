import { Seq, Map } from 'immutable';

export const users = {
  alice: Map({
    id: 0,
    name: 'Alice',
    email: 'alice@example.com',
    password: 'examplepassword0',
    createdAt:'2011-09-17T00:00:00-04:00'
  }),
  bob: Map({
    id: 1,
    name: 'Bob',
    email: 'bob@example.com',
    password: 'examplepassword1',
    createdAt: '2011-09-17T01:00:00-04:00'
  })
};

export const signals = {
  alice: [
    Map({
      id: 0,
      userId: 0,
      action: 'Pairing',
      topic: 'Crypto',
      createdAt:'2011-09-18T00:00:00-04:00'
    }),
    Map({
      id: 1,
      userId: 0,
      action: 'Code Walk',
      topic: 'Redux Apps',
      createdAt:'2011-09-18T00:00:00-04:00'
    })
  ],
  bob: [
    Map({
      id: 2,
      userId: 1,
      action: 'Debug',
      topic: 'Scala',
      createdAt:'2011-09-18T00:00:00-04:00'
    }),
    Map({
      id: 3,
      userId: 3,
      action: 'Go To Lecture',
      topic: 'Mesh Networks',
      createdAt:'2011-09-18T00:01:00-04:00'
    })
  ]
};

export const yesletses = {
  alice: [
    Map({
      id: 0,
      signalId: 2,
      userId: 0,
      createdAt:'2011-09-19T00:00:00-04:00'
    })
  ],
  bob: [
    Map({
      id: 1,
      signalId: 0,
      userId: 1,
      createdAt:'2011-09-19T00:01:00-04:00'
    })
  ]
};
