import assert from 'assert';
import promiseDoUntil from '../lib';

describe('promise-do-until', function () {
  it('should "do" 5 times', function (done) {
    let count = 0;
    promiseDoUntil(() => {
      count++;
    }, () => {
      return count === 5;
    }).then(() => {
      assert(count === 5, 'did not log 5 "do" loops');
      done();
    });
  });

  it('should "do" once but not loop', function (done) {
    let count = 0;
    promiseDoUntil(() => {
      count++;
    }, () => {
      return count > 0;
    }).then(() => {
      assert(count === 1, 'did not "do" only once');
      done();
    });
  });
});
