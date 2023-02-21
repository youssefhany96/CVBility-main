import Work from '../utils/Work'
import Education from '../utils/Education'
import Skills from '../utils/Skills'
import Projects from '../utils/Projects'
import Achievments from '../utils/Achievments'
import Languages from '../utils/Languages'
import Interests from '../utils/Interests'
import EducationInstructionModal from '../components/EducationInstructionModal'
import WorkInstructionModal from '../components/WorkInstructionModal'
import SkillsInstructionModal from '../components/SkillsInstructionModal'
import ProjectInstructionModal from '../components/ProjectInstructionModal'
import AchievementInstructionModal from '../components/AchievementInstructionModal'
import LanguageInstructionModal from '../components/LanguageInstructionModal'
import InterestInstructionModal from '../components/InterestInstructionModal'
import EducationSettingsModal from '../components/EducationSettingsModal'
import SkillsSettingsModal from '../components/SkillsSettingsModal'
import LanguageSettingsModal from '../components/LanguageSettingsModal'
import OrganisationSettingsModal from '../components/OrganisationSettingsModal'
import OrganisationInstructionModal from '../components/OrganisationInstructionModal'
import Organisation from '../utils/Organization'
import Volunteer from '../utils/Volunteer'
import VolunteerInstructionModal from '../components/Volunteer/VolunteerInstructionModal'
import VolunteerSettingsModal from '../components/Volunteer/VolunteerSettingsModal'

export const Senior3Col1 = [
    {
        'id': 'workExperience',
        'layout': 'Senior3',
        'display': 'show',
        'state': '',
        'instructionModal': [<WorkInstructionModal></WorkInstructionModal>],
        'name': 'WORK EXPERIENCE*',
        'content': [<Work></Work>
        ]
    },
    {
        'id': 'achievements',
        'layout': 'Senior3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<AchievementInstructionModal></AchievementInstructionModal>],
        'name': 'ACHIEVEMENTS',
        'content': [<Achievments></Achievments>

        ]
    },
]
export const Senior3Col2 = [
    {
        'id': 'skills',
        'layout': 'Senior3',
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
        'layout': 'Senior3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<ProjectInstructionModal></ProjectInstructionModal>],
        'name': 'PROJECT NAME',
        'content': [<Projects></Projects>

        ]
    },
    {
        'id': 'volunteer',
        'layout': 'Senior3',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<VolunteerInstructionModal></VolunteerInstructionModal>],
        'name': 'VOLUNTEER',
        'content': [<Volunteer></Volunteer>

        ]
    },
    {
        'id': 'education',
        'layout': 'Senior3',
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
        'id': 'organisation',
        'layout': 'Senior3',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<OrganisationInstructionModal></OrganisationInstructionModal>],
        'name': 'ORGANISATION',
        'content': [<Organisation></Organisation>

        ]
    },
    {
        'id': 'language',
        'layout': 'Senior3',
        'display': 'show',
        'settings': true,
        'settingsModal': [<LanguageSettingsModal></LanguageSettingsModal>],
        'state': 'deletable',
        'instructionModal': [<LanguageInstructionModal></LanguageInstructionModal>],
        'name': 'LANGUAGE',
        'content': [<Languages></Languages>

        ]
    },{
        'id': 'interests',
        'layout': 'Senior3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<InterestInstructionModal></InterestInstructionModal>],
        'name': 'INTERESTS',
        'content': [<Interests></Interests>

        ]
    },

]