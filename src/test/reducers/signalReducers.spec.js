import chai from 'chai';
const should = chai.should();
const { expect } = chai;

import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import { List, Map } from 'immutable';

import { signals as sigs } from '../support/sampleData';
const { alice: aSigs } = sigs;

import { signals } from '../../app/reducers/signals';
import { ADD_SIGNAL } from '../../app/actions/signalActions';

describe('signal reducers', () => {

  describe('handling ADD_SIGNAL', () => {

    describe('to an empty List', () => {

      it('returns a list with one signal', () => {

        signals(List(), {
          type: ADD_SIGNAL,
          signal: aSigs[0]
        }).should.equal(List.of(aSigs[0]));

      });
    });

    describe('to a list with one element', () => {

      it('returns a list with two elements', () => {

        signals(List.of(aSigs[0]), {
          type: ADD_SIGNAL,
          signal: aSigs[1]
        }).should.equal(List.of(aSigs[0], aSigs[1]));

      });
    });
  });
});
