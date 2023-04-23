import React from "react";
import { craftSheetStyle } from "./CraftSheet.style";
import { ResourceCell } from "./ResourceCell";

export class CraftSheet extends React.Component{
    constructTable(nodes){
        let nextRowNodes = nodes.reduce((acum, cur) => acum.concat(cur.child), []);
        if (nextRowNodes.length === 0){
            return <tr>{nodes.map(x => <ResourceCell node = {x}/>)}</tr>
        }
        else{
            return <><tr>{nodes.map(x => <ResourceCell node = {x}/>)}</tr>{this.constructTable(nextRowNodes)}</>
        } 
    }

    render(){
        return <table style = {craftSheetStyle}>
            <tbody>
                {this.constructTable([this.props.rootNode.filledNullNodes()])}
            </tbody>
        </table>
    }
}