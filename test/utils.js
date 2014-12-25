var assert = require('assert');

var utils = require('../lib/utils');

describe('genRandomId return', function(){
  describe('a string', function(){
    it('!= undefined', function(){
      var randomId = utils.genRandomId();
      assert.notEqual(randomId, undefined);
    });
    it('with only letters and numbers');
  });
});
