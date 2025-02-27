import { FC } from 'react';
import { Link } from 'react-router-dom';
import { tableHead } from '../constants';

import { Badge, Card, Table } from '../../../components/DataDisplay';

import { selectType } from '../../../../utils';
import { CallDataProps } from '../types';

const CallData: FC<CallDataProps> = ({ records }): JSX.Element => {
	const formatedTableHead = [...tableHead];
	formatedTableHead[4] = {
		...formatedTableHead[4],
		Cell: ({ value }: any) => {
			return <Badge text={value} type={selectType(value)} />;
		},
	};
	formatedTableHead[0] = {
		...formatedTableHead[0],
		Cell: ({ value, row }: any) => {
			const { original } = row;
			return <Link to={`/agent/${original.agentIdentifier}`}>{value}</Link>;
		},
	};
	return (
		<Card className="dashboard__allCalls">
			<h2>Call Frequency</h2>
			<Table tableHead={formatedTableHead} tableData={records ? records : []} />
		</Card>
	);
};

export default CallData;
