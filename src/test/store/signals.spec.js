import chai from 'chai';
const should = chai.should();
const { expect } = chai;

import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import { List, Map } from 'immutable';

import { signals as sigs } from '../support/sampleData';
const { alice: aSigs } = sigs;

import { addSignal } from '../../app/actions/signalActions';
import store from '../../app/store';

describe('store dispatching signal actions', () => {

  describe('dispatching signal actions', () => {

    it('dispatches #addSignal', () => {

      store.dispatch(addSignal(aSigs[0]));
      store.getState().get('signals').should.equal(List.of(aSigs[0]));

    });
  });
});
