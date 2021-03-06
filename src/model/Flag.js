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
    define(['ApiClient', 'model/Segment', 'model/Variant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Segment'), require('./Variant'));
  } else {
    // Browser globals (root is window)
    if (!root.Flagr) {
      root.Flagr = {};
    }
    root.Flagr.Flag = factory(root.Flagr.ApiClient, root.Flagr.Segment, root.Flagr.Variant);
  }
}(this, function(ApiClient, Segment, Variant) {
  'use strict';




  /**
   * The Flag model module.
   * @module model/Flag
   * @version 1.0.10
   */

  /**
   * Constructs a new <code>Flag</code>.
   * @alias module:model/Flag
   * @class
   * @param description {String} 
   * @param enabled {Boolean} 
   * @param dataRecordsEnabled {Boolean} enabled data records will get data logging in the metrics pipeline, for example, kafka.
   */
  var exports = function(description, enabled, dataRecordsEnabled) {
    var _this = this;



    _this['description'] = description;
    _this['enabled'] = enabled;


    _this['dataRecordsEnabled'] = dataRecordsEnabled;
  };

  /**
   * Constructs a <code>Flag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Flag} obj Optional instance to populate.
   * @return {module:model/Flag} The populated <code>Flag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('segments')) {
        obj['segments'] = ApiClient.convertToType(data['segments'], [Segment]);
      }
      if (data.hasOwnProperty('variants')) {
        obj['variants'] = ApiClient.convertToType(data['variants'], [Variant]);
      }
      if (data.hasOwnProperty('dataRecordsEnabled')) {
        obj['dataRecordsEnabled'] = ApiClient.convertToType(data['dataRecordsEnabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * unique key representation of the flag
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * @member {Array.<module:model/Segment>} segments
   */
  exports.prototype['segments'] = undefined;
  /**
   * @member {Array.<module:model/Variant>} variants
   */
  exports.prototype['variants'] = undefined;
  /**
   * enabled data records will get data logging in the metrics pipeline, for example, kafka.
   * @member {Boolean} dataRecordsEnabled
   */
  exports.prototype['dataRecordsEnabled'] = undefined;



  return exports;
}));


