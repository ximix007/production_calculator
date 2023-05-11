import React from "react";
import { resourceCellStyle } from "./CraftSheet.style";

export const ResourceCell = (props) => {
    let node = props.node;
    return <td colSpan = {node.maxChildOnLayer()} style = {resourceCellStyle}> {node.resource.name} {node.count}</td>
} 
        
