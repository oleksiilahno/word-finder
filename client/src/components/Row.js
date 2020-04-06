import React from 'react';
import Cell from './Cell';

const Row = (props) => {
	const row = props.row;

	return (
		<tr>
			{row.map((cell, i) => (
				<Cell key={i}>{cell}</Cell>
			))}
		</tr>
	);
};

export default Row;
