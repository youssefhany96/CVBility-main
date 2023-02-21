import Work from '../utils/Work'
import Education from '../utils/Education'
import Skills from '../utils/Skills'
import Projects from '../utils/Projects'
import Achievments from '../utils/Achievments'
import Interests from '../utils/Interests'
import EducationInstructionModal from '../components/EducationInstructionModal'
import WorkInstructionModal from '../components/WorkInstructionModal'
import SkillsInstructionModal from '../components/SkillsInstructionModal'
import ProjectInstructionModal from '../components/ProjectInstructionModal'
import AchievementInstructionModal from '../components/AchievementInstructionModal'
import InterestInstructionModal from '../components/InterestInstructionModal'

import EducationSettingsModal from '../components/EducationSettingsModal'
import SkillsSettingsModal from '../components/SkillsSettingsModal'
import Awards from '../utils/Award'
import AwardsSettingsModal from '../components/AwardsSettingsModal'
import AwardsInstructionModal from '../components/AwardsInstructionModal'
import OrganisationSettingsModal from '../components/OrganisationSettingsModal'
import OrganisationInstructionModal from '../components/OrganisationInstructionModal'
import Organisation from '../utils/Organization'
import ConferenceSettingsModal from '../components/ConferenceSettingsModal'
import ConferenceInstructionModal from '../components/ConferenceInstructionModal'
import Conference from '../utils/Conference'
import Volunteer from '../utils/Volunteer'
import VolunteerInstructionModal from '../components/Volunteer/VolunteerInstructionModal'
import VolunteerSettingsModal from '../components/Volunteer/VolunteerSettingsModal'
import CausesSettingsModal from '../components/Causes/CausesSettingsModal'
import CausesInstructionModal from '../components/Causes/CausesInstructionModal'
import Causes from '../utils/Causes'
export const Senior2Col1 = [
    {
        'id': 'workExperience',
        'layout': 'Senior2',
        'display': 'show',
        'state': '',
        'instructionModal': [<WorkInstructionModal></WorkInstructionModal>],
        'name': 'WORK EXPERIENCE*',
        'content': [<Work></Work>
        ]
    },{
        'id': 'volunteer',
        'layout': 'Senior2',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<VolunteerInstructionModal></VolunteerInstructionModal>],
        'name': 'VOLUNTEER',
        'content': [<Volunteer></Volunteer>

        ]
    }, {
        'id': 'awards',
        'layout': 'Senior2',
        'state': 'deletable',
        'display': 'show',
        'settings': false,
        'instructionModal': [<AwardsInstructionModal></AwardsInstructionModal>],
        'name': 'AWARDS',
        'content': [<Awards></Awards>

        ]
    },


]
export const Senior2Col2 = [
    {
        'id': 'skills',
        'layout': 'Senior2',
        'state': '',
        'settings': true,
        'settingsModal': [<SkillsSettingsModal></SkillsSettingsModal>],
        'display': 'show',
        'instructionModal': [<SkillsInstructionModal></SkillsInstructionModal>],
        'name': 'SKILLS*',
        'content': [<Skills></Skills>

        ]
    },
    {
        'id': 'personalProject',
        'layout': 'Senior2',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<ProjectInstructionModal></ProjectInstructionModal>],
        'name': 'PROJECT NAME',
        'content': [<Projects></Projects>

        ]
    },
    {
        'id': 'education',
        'layout': 'Senior2',
        'display': 'show',
        'settings': true,
        'settingsModal': [<EducationSettingsModal></EducationSettingsModal>],
        'state': 'deletable',
        'instructionModal': [<EducationInstructionModal></EducationInstructionModal>],
        'name': 'EDUCATION',
        'content': [<Education></Education>

        ]
    },
    {
        'id': 'achievements',
        'layout': 'Senior2',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<AchievementInstructionModal></AchievementInstructionModal>],
        'name': 'ACHIEVEMENTS',
        'content': [<Achievments></Achievments>

        ]
    },
    {
        'id': 'conference',
        'layout': 'Senior2',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<ConferenceInstructionModal></ConferenceInstructionModal>],
        'name': 'CONF. & CF.',
        'content': [<Conference></Conference>

        ]
    },
    {
        'id': 'organisation',
        'layout': 'Senior2',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<OrganisationInstructionModal></OrganisationInstructionModal>],
        'name': 'ORGANISATION',
        'content': [<Organisation></Organisation>

        ]
    },
    {
        'id': 'causes',
        'layout': 'Senior2',
        'state': 'deletable',
        'settings': true,
        'settingsModal': [<CausesSettingsModal></CausesSettingsModal>],
        'display': 'show',
        'instructionModal': [<CausesInstructionModal></CausesInstructionModal>],
        'name': 'CAUSES',
        'content': [<Causes></Causes>

        ]
    },
    {
        'id': 'interests',
        'layout': 'Senior2',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<InterestInstructionModal></InterestInstructionModal>],
        'name': 'INTERESTS',
        'content': [<Interests></Interests>

        ]
    },
]