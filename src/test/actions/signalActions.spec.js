import chai from 'chai';
const should = chai.should();

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import { shouldHaveObjectEquality } from '../support/matchers';
import { signals } from '../support/sampleData';
const { alice: aSigs } = signals;

import * as actions from '../../app/actions/signalActions';

describe('signalActions', () => {

  describe('#addSignal', () => {

    it('returns an action that adds a signal', () => {

      const { type, payload } = actions.addSignal(aSigs[0]);

      type.should.equal(actions.ADD_SIGNAL);
      payload.should.equal(aSigs[0]);
    });
  });
});
