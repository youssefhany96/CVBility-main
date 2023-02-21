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
export const Freelancer1Col1 = [{
    'id': 'workExperience',
    'layout': 'Freelancer1',
    'display': 'show',
    'state': '',
    'instructionModal': [<WorkInstructionModal></WorkInstructionModal>],
    'name': 'WORK EXPERIENCE*',
    'content': [<Work></Work>
    ]
},{
    'id': 'education',
    'layout': 'Freelancer1',
    'display': 'show',
    'settings': true,
    'settingsModal': [<EducationSettingsModal></EducationSettingsModal>],
    'state': 'deletable',
    'instructionModal': [<EducationInstructionModal></EducationInstructionModal>],
    'name': 'EDUCATION',
    'content': [<Education></Education>

    ]
},]
export const Freelancer1Col2 = [
    {
        'id': 'skills',
        'layout': 'Freelancer1',
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
        'layout': 'Freelancer1',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<ProjectInstructionModal></ProjectInstructionModal>],
        'name': 'PROJECT NAME',
        'content': [<Projects></Projects>

        ]
    },
    {
        'id': 'achievements',
        'layout': 'Freelancer1',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<AchievementInstructionModal></AchievementInstructionModal>],
        'name': 'ACHIEVEMENTS',
        'content': [<Achievments></Achievments>

        ]
    },
    {
        'id': 'language',
        'layout': 'Freelancer1',
        'display': 'show',
        'settings': true,
        'settingsModal': [<LanguageSettingsModal></LanguageSettingsModal>],
        'state': 'deletable',
        'instructionModal': [<LanguageInstructionModal></LanguageInstructionModal>],
        'name': 'LANGUAGE',
        'content': [<Languages></Languages>

        ]
    },
    {
        'id': 'interests',
        'layout': 'Freelancer1',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<InterestInstructionModal></InterestInstructionModal>],
        'name': 'INTERESTS',
        'content': [<Interests></Interests>

        ]
    },
]