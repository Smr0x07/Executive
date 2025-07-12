import React, { useState } from 'react';
import { Users, CheckCircle, Calendar, ChevronDown, ChevronUp, Target } from 'lucide-react';
import GlassCard from '../UI/GlassCard';
import CustomDropdown from '../UI/CustomDropdown';

const TeamDecisionCard = ({ decision, index, enableMeetingScheduling = true, showPriorityBadges = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScheduleMeeting = () => {
    if (enableMeetingScheduling) {
      window.open('https://calendar.app.google/hfNAa4s1LwJBR4Mj9', '_blank');
    }
  };

  return (
    <GlassCard
      className={`transition-all duration-300 cursor-pointer hover:bg-white/15 ${isExpanded ? 'bg-white/10' : 'bg-white/5'
        }`}
    >
      {/* Card Header - Always Visible */}
      <div
        className="flex items-start justify-between p-5"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start space-x-4 flex-1">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-semibold text-white text-base mb-2 text-left leading-tight">
              {decision.title}
            </h4>
            <div className="flex items-center space-x-3 text-left">
              {showPriorityBadges && (
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${decision.priority === 'High' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                    decision.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                      'bg-green-500/20 text-green-300 border border-green-500/30'
                  }`}>
                  {decision.priority} Priority
                </span>
              )}
              <span className="text-sm text-white/60">{decision.meetingDate}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 flex-shrink-0">
          <span className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${decision.status === 'Completed' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
              decision.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                decision.status === 'Planning' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                  'bg-gray-500/20 text-gray-300 border-gray-500/30'
            }`}>
            {decision.status}
          </span>
          {isExpanded ?
            <ChevronUp className="w-5 h-5 text-white/70" /> :
            <ChevronDown className="w-5 h-5 text-white/70" />
          }
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-5 pb-5 border-t border-white/10">
          <div className="pt-5 space-y-5">
            {/* Description */}
            <div className="text-left">
              <h5 className="text-sm font-semibold text-white/90 mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2 text-blue-400" />
                Description
              </h5>
              <p className="text-sm text-white/70 leading-relaxed pl-6">{decision.description}</p>
            </div>

            {/* People Involved */}
            <div className="text-left">
              <h5 className="text-sm font-semibold text-white/90 mb-3 flex items-center">
                <Users className="w-4 h-4 mr-2 text-purple-400" />
                People Involved
              </h5>
              <div className="flex flex-wrap gap-2 pl-6">
                {decision.people.map((person, personIndex) => (
                  <span
                    key={personIndex}
                    className="px-3 py-1.5 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-lg text-xs text-white/90 font-medium"
                  >
                    {person}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-3 pl-6">
              {enableMeetingScheduling && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleScheduleMeeting();
                  }}
                  className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm font-medium transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Follow-up</span>
                </button>
              )}

              <button
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2.5 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 rounded-lg text-white/80 text-sm font-medium transition-all"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}
    </GlassCard>
  );
};

const TeamDecisionsSection = ({
  selectedSubTeam,
  onSubTeamChange,
  teamDecisions,
  title = "Key Decisions Made Within Team",
  enableMeetingScheduling = true,
  showPriorityBadges = true,
  availableSubTeams = []
}) => {
  // Use provided sub-teams or fallback to default
  const allSubTeams = availableSubTeams.length > 0 ? availableSubTeams : [
    // Default fallback sub-teams
    { value: 'growth', label: 'Growth Team', team: 'sales' },
    { value: 'sdr', label: 'SDR Team', team: 'sales' },
    { value: 'ae', label: 'AE Team', team: 'sales' },
    // { value: 'network', label: 'Network Team', team: 'sales' },
    // { value: 'partnership', label: 'Partnership Team', team: 'sales' },
    // { value: 'product', label: 'Product Team', team: 'tech' },
    // { value: 'ml', label: 'ML Team', team: 'tech' },
    // { value: 'frontend', label: 'Frontend Team', team: 'tech' },
    // { value: 'backend', label: 'Backend Team', team: 'tech' }
  ];

  const selectedOption = allSubTeams.find(option => option.value === selectedSubTeam);
  const currentTeam = selectedOption?.team || 'sales';

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-6 flex items-center text-left">
        <Users className="w-5 h-5 mr-3" />
        {title}
      </h2>

      {/* Single Sub-team Selection */}
      <div className="mb-6 max-w-xs">
        <CustomDropdown
          options={allSubTeams}
          value={selectedSubTeam}
          onChange={onSubTeamChange}
          placeholder="Select team"
          icon={Target}
        />
      </div>

      {/* Enhanced Decision Cards */}
      <div className="space-y-4">
        {teamDecisions[currentTeam]?.[selectedSubTeam]?.map((decision, index) => (
          <TeamDecisionCard
            key={index}
            decision={decision}
            index={index}
            enableMeetingScheduling={enableMeetingScheduling}
            showPriorityBadges={showPriorityBadges}
          />
        ))}

        {(!teamDecisions[currentTeam]?.[selectedSubTeam] || teamDecisions[currentTeam]?.[selectedSubTeam]?.length === 0) && (
          <GlassCard className="p-8 text-center">
            <p className="text-white/60">No decisions found for this team.</p>
          </GlassCard>
        )}
      </div>
    </section>
  );
};

export default TeamDecisionsSection;