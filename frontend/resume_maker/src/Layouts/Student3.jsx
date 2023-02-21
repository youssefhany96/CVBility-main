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
import TeachingSettingsModal from '../components/TeachingSettingsModal'
import TeachingInstructionModal from '../components/TeachingInstructionModal'
import Awards from '../utils/Award'
import AwardsSettingsModal from '../components/AwardsSettingsModal'
import AwardsInstructionModal from '../components/AwardsInstructionModal'
import TechnicalInstructionModal from '../components/TechnicalInstructionModal'
import Technical from '../utils/Technical'
import CertificatesInstructionModal from '../components/CertificatesInstructionModal'
import Certificates from '../utils/Certificates'
import ReferencesInstructionModal from '../components/ReferencesInstructionModal'
import References from '../utils/References'
import OrganisationSettingsModal from '../components/OrganisationSettingsModal'
import OrganisationInstructionModal from '../components/OrganisationInstructionModal'
import Organisation from '../utils/Organization'
import ConferenceSettingsModal from '../components/ConferenceSettingsModal'
import ConferenceInstructionModal from '../components/ConferenceInstructionModal'
import Conference from '../utils/Conference'
import Volunteer from '../utils/Volunteer'
import VolunteerInstructionModal from '../components/Volunteer/VolunteerInstructionModal'
import VolunteerSettingsModal from '../components/Volunteer/VolunteerSettingsModal'
import Publication from '../utils/Publications'
import PublicationSettingsModal from '../components/Publication/PublicationSettingsModal'
import PublicationInstructionModal from '../components/Publication/PublicationInstructionModal'
import CausesSettingsModal from '../components/Causes/CausesSettingsModal'
import CausesInstructionModal from '../components/Causes/CausesInstructionModal'
import Causes from '../utils/Causes'
import Teaching from '../utils/Teaching'
import SoftSkillsSettingsModal from '../components/SoftSkills/SoftSkillsSettingsModal'
import SoftSkillsInstructionModal from '../components/SoftSkills/SoftSkillsInstructionModal'
import SoftSkills from '../utils/SoftSkills'
export const Student3Col1 = [

    {
        'id': 'education',
        'layout': 'Student3',
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
        'id': 'personalProject',
        'layout': 'Student3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<ProjectInstructionModal></ProjectInstructionModal>],
        'name': 'PROJECT NAME',
        'content': [<Projects></Projects>

        ]
    },
    {
        'id': 'workExperience',
        'layout': 'Student3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<WorkInstructionModal></WorkInstructionModal>],
        'name': 'WORK EXPERIENCE',
        'content': [<Work></Work>
        ]
    },



]

export const Student3Col2 = [
    
    {
        'id': 'skills',
        'layout': 'Student3',
        'state': '',
        'settings': true,
        'settingsModal': [<SkillsSettingsModal></SkillsSettingsModal>],
        'display': 'show',
        'instructionModal': [<SkillsInstructionModal></SkillsInstructionModal>],
        'name': 'SKILLS*',
        'content': [<Skills></Skills>

        ]
    },{
        'id': 'achievements',
        'layout': 'Student3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<AchievementInstructionModal></AchievementInstructionModal>],
        'name': 'ACHIEVEMENTS',
        'content': [<Achievments></Achievments>

        ]
    },
    {
        'id': 'organisation',
        'layout': 'Student3',
        'display': 'show',
        'settings': false,
        'settingsModal': [<OrganisationSettingsModal></OrganisationSettingsModal>],
        'state': 'deletable',
        'instructionModal': [<OrganisationInstructionModal></OrganisationInstructionModal>],
        'name': 'ORGANISATION',
        'content': [<Organisation></Organisation>

        ]
    },
    {
        'id': 'certificates',
        'layout': 'Student3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<CertificatesInstructionModal></CertificatesInstructionModal>],
        'name': 'CERTIFICATES',
        'content': [<Certificates></Certificates>

        ]
    },




    {
        'id': 'language',
        'layout': 'Student3',
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
        'layout': 'Student3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<InterestInstructionModal></InterestInstructionModal>],
        'name': 'INTERESTS',
        'content': [<Interests></Interests>

        ]
    }
]