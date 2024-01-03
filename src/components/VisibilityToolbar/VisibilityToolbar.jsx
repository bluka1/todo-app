import PropTypes from 'prop-types';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { VISIBILITY_TYPES } from '../../utils/visibilityTypes';
import styles from './VisibilityToolbar.module.css';

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

const VisibilityToolbar = (props) => {
	return (
		<ToggleButtonGroup
			type='radio'
			name='visibilityOptions'
			defaultValue={ALL}
			className={styles['toggle-button-group']}
		>
			<ToggleButton
				value={ALL}
				size='sm'
				className={'toggle-button'}
				onClick={() => {}}
			>
				All
			</ToggleButton>
			<ToggleButton value={ACTIVE} size='sm' className={'toggle-button'}>
				Active
			</ToggleButton>
			<ToggleButton value={COMPLETED} size='sm' className={'toggle-button'}>
				Completed
			</ToggleButton>
		</ToggleButtonGroup>
	);
};

VisibilityToolbar.propTypes = {};

export default VisibilityToolbar;
