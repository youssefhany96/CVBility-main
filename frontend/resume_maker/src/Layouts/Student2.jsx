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

import CertificatesInstructionModal from '../components/CertificatesInstructionModal'
import Certificates from '../utils/Certificates'

import OrganisationSettingsModal from '../components/OrganisationSettingsModal'
import OrganisationInstructionModal from '../components/OrganisationInstructionModal'
import Organisation from '../utils/Organization'

export const Student2Col1 = [

    {
        'id': 'education',
        'layout': 'Student2',
        'display': 'show',
        'settings': true,
        'settingsModal': [<EducationSettingsModal></EducationSettingsModal>],
        'state': '',
        'instructionModal': [<EducationInstructionModal></EducationInstructionModal>],
        'name': 'EDUCATION*',
        'content': [<Education></Education>

        ]
    },
    {
        'id': 'workExperience',
        'layout': 'Student2',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<WorkInstructionModal></WorkInstructionModal>],
        'name': 'WORK EXPERIENCE',
        'content': [<Work></Work>
        ]
    },{
        'id': 'organisation',
        'layout': 'Student2',
        'display': 'show',
        'settings': false,
        'settingsModal': [<OrganisationSettingsModal></OrganisationSettingsModal>],
        'state': 'deletable',
        'instructionModal': [<OrganisationInstructionModal></OrganisationInstructionModal>],
        'name': 'ORGANISATION',
        'content': [<Organisation></Organisation>

        ]
    },


]

export const Student2Col2 = [
    {
        'id': 'skills',
        'layout': 'Student2',
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
        'layout': 'Student2',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<ProjectInstructionModal></ProjectInstructionModal>],
        'name': 'PROJECTS',
        'content': [<Projects></Projects>

        ]
    },
    {
        'id': 'certificates',
        'layout': 'Student2',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<CertificatesInstructionModal></CertificatesInstructionModal>],
        'name': 'CERTIFICATES',
        'content': [<Certificates></Certificates>

        ]
    },

    {
        'id': 'achievements',
        'layout': 'Student2',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<AchievementInstructionModal></AchievementInstructionModal>],
        'name': 'ACHIEVEMENTS',
        'content': [<Achievments></Achievments>

        ]
    },

    {
        'id': 'language',
        'layout': 'Student2',
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
        'layout': 'Student2',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<InterestInstructionModal></InterestInstructionModal>],
        'name': 'INTERESTS',
        'content': [<Interests></Interests>

        ]
    }
]