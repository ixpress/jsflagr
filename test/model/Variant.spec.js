/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flagr);
  }
}(this, function(expect, Flagr) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Flagr.Variant();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Variant', function() {
    it('should create an instance of Variant', function() {
      // uncomment below and update the code to test Variant
      //var instane = new Flagr.Variant();
      //expect(instance).to.be.a(Flagr.Variant);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Flagr.Variant();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new Flagr.Variant();
      //expect(instance).to.be();
    });

    it('should have the property attachment (base name: "attachment")', function() {
      // uncomment below and update the code to test the property attachment
      //var instane = new Flagr.Variant();
      //expect(instance).to.be();
    });

  });

}));
