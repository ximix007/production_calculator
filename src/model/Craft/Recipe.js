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
        return this.properties[propertyName];
    }

    RequiredResource(resultCount){
        let result = [];
        this.required.forEach(element => {
            result.push({resource: element.resource, count: element.count * resultCount});
        });
        return result;
    }
}

export default Recipe