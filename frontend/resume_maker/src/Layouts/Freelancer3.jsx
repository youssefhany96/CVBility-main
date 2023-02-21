import Work from '../utils/Work'
import Education from '../utils/Education'
import Skills from '../utils/Skills'
import Projects from '../utils/Projects'
import Achievments from '../utils/Achievments'
import Certificates from '../utils/Certificates'
import Organization from '../utils/Organization'
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
import OrganisationInstructionModal from '../components/OrganisationInstructionModal'
import OrganisationSettingsModal from '../components/OrganisationSettingsModal'
import CertificatesInstructionModal from '../components/CertificatesInstructionModal'
import Organisation from '../utils/Organization'

export const Freelancer3Col1 = [

   
    {
        'id': 'workExperience',
        'layout': 'Freelancer3',
        'display': 'show',
        'state': '',
        'instructionModal': [<WorkInstructionModal></WorkInstructionModal>],
        'name': 'WORK EXPERIENCE*',
        'content': [<Work></Work>
        ]
    },
    {
        'id': 'education',
        'layout': 'Freelancer3',
        'display': 'show',
        'settings': true,
        'settingsModal': [<EducationSettingsModal></EducationSettingsModal>],
        'state': 'deletable',
        'instructionModal': [<EducationInstructionModal></EducationInstructionModal>],
        'name': 'EDUCATION',
        'content': [<Education></Education>

        ]
    }

]

export const Freelancer3Col2 = [
    {
        'id': 'skills',
        'layout': 'Freelancer3',
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
        'id': 'achievements',
        'layout': 'Freelancer3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<AchievementInstructionModal></AchievementInstructionModal>],
        'name': 'ACHIEVEMENTS',
        'content': [<Achievments></Achievments>

        ]
    },
    {
        'id': 'personalProject',
        'layout': 'Freelancer3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<ProjectInstructionModal></ProjectInstructionModal>],
        'name': 'PROJECT NAME',
        'content': [<Projects></Projects>

        ]
    },
    {
        'id': 'certificates',
        'layout': 'Freelancer3',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<CertificatesInstructionModal></CertificatesInstructionModal>],
        'name': 'CERTIFICATES',
        'content': [<Certificates></Certificates>

        ]
    },{
        'id': 'organisation',
        'layout': 'Freelancer3',
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
        'layout': 'Freelancer3',
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
        'layout': 'Freelancer3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<InterestInstructionModal></InterestInstructionModal>],
        'name': 'INTERESTS',
        'content': [<Interests></Interests>

        ]
    }
]