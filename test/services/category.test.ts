import assert from 'assert';
import app from '../../src/app';

describe('\'category\' service', () => {
  it('registered the service', () => {
    const service = app.service('category');

    assert.ok(service, 'Registered the service');
  });
});
