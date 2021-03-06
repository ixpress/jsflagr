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
    root.Flagr.PutSegmentReorderRequest = factory(root.Flagr.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PutSegmentReorderRequest model module.
   * @module model/PutSegmentReorderRequest
   * @version 1.0.10
   */

  /**
   * Constructs a new <code>PutSegmentReorderRequest</code>.
   * @alias module:model/PutSegmentReorderRequest
   * @class
   * @param segmentIDs {Array.<Number>} 
   */
  var exports = function(segmentIDs) {
    var _this = this;

    _this['segmentIDs'] = segmentIDs;
  };

  /**
   * Constructs a <code>PutSegmentReorderRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutSegmentReorderRequest} obj Optional instance to populate.
   * @return {module:model/PutSegmentReorderRequest} The populated <code>PutSegmentReorderRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('segmentIDs')) {
        obj['segmentIDs'] = ApiClient.convertToType(data['segmentIDs'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Number>} segmentIDs
   */
  exports.prototype['segmentIDs'] = undefined;



  return exports;
}));


