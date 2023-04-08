import "./Resource"

class Recipe {
    constructor(result, required, properties){
        this.result = result;
        this.required = required;
        this.properties = properties;
    }

    GetRequired(){
        return this.required;
    }

    GetProperty(propertyName){
        return properties[propertyName];
    }

    RequiredResource(resultCount){
        let result = Object();
        require.forEach(element => {
            result.defineProperty(element.resource, element.count * resultCount);
        });
    }
}

export default Recipe