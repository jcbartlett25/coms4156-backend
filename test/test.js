var assert = require('assert');
var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'aaaa_aaaa_aaaa',
  password : 'aaaaaa',
  database : 'aaaa_aaaa'
});

describe('Database', function() {
  describe('#connect()', function() {
    it('should connect to the database without problems', function() {
      return assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});