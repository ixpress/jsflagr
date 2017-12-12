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


import ApiClient from '../ApiClient';





/**
* The EvalContext model module.
* @module model/EvalContext
* @version 1.0.0
*/
export default class EvalContext {
    /**
    * Constructs a new <code>EvalContext</code>.
    * @alias module:model/EvalContext
    * @class
    * @param entityID {String} 
    * @param entityType {String} 
    * @param flagID {Number} 
    */

    constructor(entityID, entityType, flagID) {
        

        
        

        this['entityID'] = entityID;this['entityType'] = entityType;this['flagID'] = flagID;

        
    }

    /**
    * Constructs a <code>EvalContext</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EvalContext} obj Optional instance to populate.
    * @return {module:model/EvalContext} The populated <code>EvalContext</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvalContext();

            
            
            

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
        }
        return obj;
    }

    /**
    * @member {String} entityID
    */
    entityID = undefined;
    /**
    * @member {String} entityType
    */
    entityType = undefined;
    /**
    * @member {Object} entityContext
    */
    entityContext = undefined;
    /**
    * @member {Boolean} enableDebug
    */
    enableDebug = undefined;
    /**
    * @member {Number} flagID
    */
    flagID = undefined;








}

