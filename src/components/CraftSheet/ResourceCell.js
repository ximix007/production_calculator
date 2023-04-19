import React from "react";
import { resourceCellStyle } from "./CraftSheet.style";

export class ResourceCell extends React.Component{
    render(){
        let node = this.props.node;
        return <td style = {resourceCellStyle}> {node.resource.name} {node.count}</td>
    }
}