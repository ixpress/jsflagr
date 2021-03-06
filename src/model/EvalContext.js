/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice
 *
 * OpenAPI spec version: 1.0.10
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Flagr) {
      root.Flagr = {};
    }
    root.Flagr.EvalContext = factory(root.Flagr.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EvalContext model module.
   * @module model/EvalContext
   * @version 1.0.10
   */

  /**
   * Constructs a new <code>EvalContext</code>.
   * @alias module:model/EvalContext
   * @class
   * @param entityType {String} 
   */
  var exports = function(entityType) {
    var _this = this;


    _this['entityType'] = entityType;




  };

  /**
   * Constructs a <code>EvalContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EvalContext} obj Optional instance to populate.
   * @return {module:model/EvalContext} The populated <code>EvalContext</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entityID')) {
        obj['entityID'] = ApiClient.convertToType(data['entityID'], 'String');
      }
      if (data.hasOwnProperty('entityType')) {
        obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
      }
      if (data.hasOwnProperty('entityContext')) {
        obj['entityContext'] = ApiClient.convertToType(data['entityContext'], Object);
      }
      if (data.hasOwnProperty('enableDebug')) {
        obj['enableDebug'] = ApiClient.convertToType(data['enableDebug'], 'Boolean');
      }
      if (data.hasOwnProperty('flagID')) {
        obj['flagID'] = ApiClient.convertToType(data['flagID'], 'Number');
      }
      if (data.hasOwnProperty('flagKey')) {
        obj['flagKey'] = ApiClient.convertToType(data['flagKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * entityID is used to deterministically at random to evaluate the flag result. If it's empty, flagr will randomly generate one.
   * @member {String} entityID
   */
  exports.prototype['entityID'] = undefined;
  /**
   * @member {String} entityType
   */
  exports.prototype['entityType'] = undefined;
  /**
   * @member {Object} entityContext
   */
  exports.prototype['entityContext'] = undefined;
  /**
   * @member {Boolean} enableDebug
   */
  exports.prototype['enableDebug'] = undefined;
  /**
   * flagID
   * @member {Number} flagID
   */
  exports.prototype['flagID'] = undefined;
  /**
   * flagKey. flagID or flagKey will resolve to the same flag. Either works.
   * @member {String} flagKey
   */
  exports.prototype['flagKey'] = undefined;



  return exports;
}));


