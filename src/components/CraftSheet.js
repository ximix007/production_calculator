import React from "react";

class ResourceCell extends React.Component{
    render(){
        let node = this.props.node;
        return <td> {node.resource.name} {node.count}</td>
    }
}

export class CraftCalcSheet extends React.Component{
    constructTable(nodes){
        let nextRowNodes = nodes.reduce((acum, cur) => acum.concat(cur.child), []);
        console.log(nextRowNodes);
        if (nextRowNodes.length === 0){
            return <tr>{nodes.map(x => <ResourceCell node = {x}/>)}</tr>
        }
        else{
            return <><tr>{nodes.map(x => <ResourceCell node = {x}/>)}</tr>{this.constructTable(nextRowNodes)}</>
        } 
    }

    render(){
        return <table>
            <tbody>
                {this.constructTable([this.props.rootNode])}
            </tbody>
        </table>
    }
}