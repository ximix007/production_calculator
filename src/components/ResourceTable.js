import React from 'react'

const ResourceTable = () =>
{
    let startRow = <Row><Cell>start</Cell></Row>;
    let table = (<table><tbody>{startRow}</tbody></table>);
    return (table);
}

const Row = (props) =>
{
    return (<tr>{props.children}</tr>);
}

const Cell = (props) =>
{
    return (<td>{props.children}</td>)
}

export default ResourceTable;