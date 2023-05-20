import React from 'react';

const TableRow = (props) => {
    let {item} = props;

    return (
            <tr>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>
                    <img src={item.image} alt={item.name} />
                </td>
                <td>{item.symbol}</td>
                <td>{item.current_price}</td>
                <td>{item.total_volume}</td>
            </tr>
        )
}

export default TableRow;