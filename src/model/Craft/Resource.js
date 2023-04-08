class Resource {
    constructor (name, properties){
        this.name = name;
        this.properties = properties;
    }

    GetProperty(propertyName){
        return properties[propertyName];
    }

    GetName(){
        return this.name;
    }
}

export default Resource;