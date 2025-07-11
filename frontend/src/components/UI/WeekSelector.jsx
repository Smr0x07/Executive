import React from 'react';
import { Calendar } from 'lucide-react';
import CustomDropdown from './CustomDropdown';

const WeekSelector = ({ weeks, selectedWeek, onWeekChange }) => {
    const weekOptions = weeks.map(week => ({
        value: week.value,
        label: week.label
    }));

    return (
        <CustomDropdown
            options={weekOptions}
            value={selectedWeek.value}
            onChange={(value) => onWeekChange(weeks.find(w => w.value === value))}
            placeholder="Select week"
            icon={Calendar}
            className="min-w-64"
        />
    );
};

export default WeekSelector;