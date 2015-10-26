import chai from 'chai';
const should = chai.should();

import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import { List, Map, toJS } from 'immutable';

import { signals as sigs } from '../support/sampleData';
const { alice: aSigs } = sigs;

import { addSignal } from '../../app/actions/signalActions';
import store from '../../app/store';

describe('store managing signals', () => {

  describe('dispatching #addSignal', () => {

    it('adds a signal to the store', () => {

      store.dispatch(addSignal(aSigs[0]));
      console.log(store.getState().toJS());
      store.getState().get('signals')
        .should.equal(List.of(aSigs[0]));

    });
  });
});
