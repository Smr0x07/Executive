import React from 'react';
import { TrendingUp } from 'lucide-react';
import MetricCard from '../UI/MetricCard';

const MetricsSection = ({ metrics, title = "Key Metric Movement" }) => (
    <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            {title}
        </h2>
        <div className="grid grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
                <MetricCard key={index} metric={metric} />
            ))}
        </div>
    </section>
);

export default MetricsSection;