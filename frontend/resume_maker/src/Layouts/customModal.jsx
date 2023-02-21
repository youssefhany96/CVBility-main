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
import InterestsSettingModal from '../components/InterestsSettingModal'
export const col1 = [
]

export const col2 = [
]

export const RightGrid = [
    {
        'id': 'skills',
        'display': 'show',
        'settings': true,
        'state': 'deletable',
        'instructionModal': [<SkillsInstructionModal></SkillsInstructionModal>],
        'settingsModal': [<SkillsSettingsModal></SkillsSettingsModal>],
        'name': 'SKILLS',
        'content': [<Skills></Skills>

        ]
    },
    {
        'id': 'workExperience',
        'layout': 'Custom',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<WorkInstructionModal></WorkInstructionModal>],
        'name': 'WORK EXPERIENCE',
        'content': [<Work></Work>
        ]
    },
    {
        'id': 'teaching',
        'layout': 'Custom',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<TeachingInstructionModal></TeachingInstructionModal>],
        'name': 'TEACHING',
        'content': [<Teaching></Teaching>

        ]
    },
    {
        'id': 'organisation',
        'layout': 'Custom',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<OrganisationInstructionModal></OrganisationInstructionModal>],
        'name': 'ORGANISATION',
        'content': [<Organisation></Organisation>

        ]
    },
    
    {
        'id': 'technical',
        'layout': 'Custom',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<TechnicalInstructionModal></TechnicalInstructionModal>],
        'name': 'TECHNICAL',
        'content': [<Technical></Technical>

        ]
    },
    {
        'id': 'conference',
        'layout': 'Custom',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<ConferenceInstructionModal></ConferenceInstructionModal>],
        'name': 'CONF. & CF.',
        'content': [<Conference></Conference>

        ]
    },
    {
        'id': 'language',
        'layout': 'Custom',
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
        'id': 'softskills',
        'layout': 'Custom',
        'state': 'deletable',
        'settings': true,
        'settingsModal': [<SoftSkillsSettingsModal></SoftSkillsSettingsModal>],
        'display': 'show',
        'instructionModal': [<SoftSkillsInstructionModal></SoftSkillsInstructionModal>],
        'name': 'SOFTSKILLS',
        'content': [<SoftSkills></SoftSkills>

        ]
    },
    {
        'id': 'causes',
        'layout': 'Custom',
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
        'id': 'awards',
        'layout': 'Custom',
        'state': 'deletable',
        'display': 'show',
        'settings': false,
        'instructionModal': [<AwardsInstructionModal></AwardsInstructionModal>],
        'name': 'AWARDS',
        'content': [<Awards></Awards>

        ]
    },
    {
        'id': 'volunteer',
        'layout': 'Custom',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<VolunteerInstructionModal></VolunteerInstructionModal>],
        'name': 'VOLUNTEER',
        'content': [<Volunteer></Volunteer>

        ]
    },
    {
        'id': 'certificates',
        'layout': 'Custom',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<CertificatesInstructionModal></CertificatesInstructionModal>],
        'name': 'CERTIFICATES',
        'content': [<Certificates></Certificates>

        ]
    },
    {
        'id': 'references',
        'display': 'show',
        'layout': 'Custom',
        'state': 'deletable',
        'instructionModal': [<ReferencesInstructionModal></ReferencesInstructionModal>],
        'name': 'REFERENCES',
        'content': [<References></References>

        ]
    },
    {
        'id': 'personalProject',
        'layout': 'Custom',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<ProjectInstructionModal></ProjectInstructionModal>],
        'name': 'PROJECT NAME',
        'content': [<Projects></Projects>

        ]
    },
    {
        'id': 'publication',
        'layout': 'Custom',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<PublicationInstructionModal></PublicationInstructionModal>],
        'name': 'PUBLICATION',
        'content': [<Publication></Publication>

        ]
    },
    {
        'id': 'education',
        'layout': 'Custom',
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
        'id': 'interests',
        'layout': 'Custom',
        'display': 'show',
        'settings': true,
        'state': 'deletable',
        'settingsModal': [<InterestsSettingModal></InterestsSettingModal>],
        'instructionModal': [<InterestInstructionModal></InterestInstructionModal>],
        'name': 'INTERESTS',
        'content': [<Interests></Interests>

        ]
    },
    {
        'id': 'achievements',
        'layout': 'Custom',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<AchievementInstructionModal></AchievementInstructionModal>],
        'name': 'ACHIEVEMENTS',
        'content': [<Achievments></Achievments>

        ]
    },
]