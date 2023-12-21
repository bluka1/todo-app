import PropTypes from 'prop-types';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { VISIBILITY_TYPES } from '../../utils/visibilityTypes';

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

const VisibilityToolbar = (props) => {
	return (
		<ToggleButtonGroup type='radio' name='visibilityOptions' defaultValue={ALL}>
			<ToggleButton value={ALL} size='sm' className='btn'>
				All
			</ToggleButton>
			<ToggleButton value={ACTIVE} size='sm' className='btn'>
				Active
			</ToggleButton>
			<ToggleButton value={COMPLETED} size='sm' className='btn'>
				Completed
			</ToggleButton>
		</ToggleButtonGroup>
	);
};

VisibilityToolbar.propTypes = {};

export default VisibilityToolbar;
