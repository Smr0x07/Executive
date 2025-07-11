import React from 'react';
import { User } from 'lucide-react';
import ActionItemCard from '../UI/ActionItemCard';

const ActionItems = ({ actionItems }) => (
    <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            My Action Items
        </h2>
        <div className="grid gap-4">
            {actionItems.map((item, index) => (
                <ActionItemCard key={index} item={item} />
            ))}
        </div>
    </section>
);

export default ActionItems;