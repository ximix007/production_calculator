import React from "react";
import Resource from "../../model/Craft/Resource.js"
import { resourceInput } from "./ResourceInput.style.js"

const ResourceView = (props) => {
    return <div>{props.resource.name}</div>
}

export class ResourceInput extends React.Component{
    constructor(){
        super();
        this.state = {
            resources: [],
            formResourceName: "",
        }
    }

    addResource(name){
        let resources = this.state.resources;
        resources.push(new Resource(name, {}))
        console.log(resources);
        this.setState({resources: resources})
    }

    handleChange(x){
        this.setState({formResourceName: x});
    }

    render(){
        let update = this.props.UpdateResources;
        if(update != undefined) update(this.state.resources);
        return <div style = {resourceInput}>
            <input type="text" value={this.state.formResourceName} onChange = {e => this.handleChange(e.target.value)}></input>
            <button onClick={() => this.addResource(this.state.formResourceName)}>add</button>
            <br/>
        {this.state.resources.map(x => <ResourceView resource = {x}></ResourceView>)}</div>;
    }
}