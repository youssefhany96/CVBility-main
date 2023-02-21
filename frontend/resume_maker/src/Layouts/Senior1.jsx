import Work from '../utils/Work'
import Education from '../utils/Education'
import Skills from '../utils/Skills'
import Certificates from '../utils/Certificates'
import Organization from '../utils/Organization'
import Languages from '../utils/Languages'
import Interests from '../utils/Interests'
import EducationInstructionModal from '../components/EducationInstructionModal'
import WorkInstructionModal from '../components/WorkInstructionModal'
import SkillsInstructionModal from '../components/SkillsInstructionModal'
import LanguageInstructionModal from '../components/LanguageInstructionModal'
import InterestInstructionModal from '../components/InterestInstructionModal'

import EducationSettingsModal from '../components/EducationSettingsModal'
import SkillsSettingsModal from '../components/SkillsSettingsModal'
import LanguageSettingsModal from '../components/LanguageSettingsModal'
import OrganisationInstructionModal from '../components/OrganisationInstructionModal'
import OrganisationSettingsModal from '../components/OrganisationSettingsModal'
import CertificatesInstructionModal from '../components/CertificatesInstructionModal'
import Volunteer from '../utils/Volunteer'
import VolunteerInstructionModal from '../components/Volunteer/VolunteerInstructionModal'
import AwardsInstructionModal from '../components/AwardsInstructionModal'
import AwardsSettingsModal from '../components/AwardsSettingsModal'
import Awards from '../utils/Award'
import Causes from '../utils/Causes'
import CausesInstructionModal from '../components/Causes/CausesInstructionModal'
import CausesSettingsModal from '../components/Causes/CausesSettingsModal'
import InterestsSettingModal from '../components/InterestsSettingModal'
import Organisation from '../utils/Organization'

export const Senior1Col1 = [

   
    {
        'id': 'workExperience',
        'layout': 'Senior1',
        'display': 'show',
        'state': '',
        'instructionModal': [<WorkInstructionModal></WorkInstructionModal>],
        'name': 'WORK EXPERIENCE*',
        'content': [<Work></Work>
        ]
    },
    {
        'id': 'certificates',
        'layout': 'Senior1',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<CertificatesInstructionModal></CertificatesInstructionModal>],
        'name': 'LANGUAGE',
        'content': [<Certificates></Certificates>

        ]
    },
    {
        'id': 'education',
        'layout': 'Senior1',
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

export const Senior1Col2 = [
    {
        'id': 'skills',
        'layout': 'Senior1',
        'state': '',
        'settings': true,
        'settingsModal': [<SkillsSettingsModal></SkillsSettingsModal>],
        'display': 'show',
        'instructionModal': [<SkillsInstructionModal></SkillsInstructionModal>],
        'name': 'SKILLS*',
        'content': [<Skills></Skills>

        ]
    }, {
        'id': 'volunteer',
        'layout': 'Senior1',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<VolunteerInstructionModal></VolunteerInstructionModal>],
        'name': 'VOLUNTEER',
        'content': [<Volunteer></Volunteer>

        ]
    },{
        'id': 'organisation',
        'layout': 'Senior1',
        'display': 'show',
        'settings': false,
        'state': 'deletable',
        'instructionModal': [<OrganisationInstructionModal></OrganisationInstructionModal>],
        'name': 'ORGANISATION',
        'content': [<Organisation></Organisation>

        ]
    },{
        'id': 'awards',
        'layout': 'Senior1',
        'state': 'deletable',
        'display': 'show',
        'settings': false,
        'instructionModal': [<AwardsInstructionModal></AwardsInstructionModal>],
        'name': 'AWARDS',
        'content': [<Awards></Awards>

        ]
    },
    {
        'id': 'language',
        'layout': 'Senior1',
        'display': 'show',
        'settings': true,
        'settingsModal': [<LanguageSettingsModal></LanguageSettingsModal>],
        'state': 'deletable',
        'instructionModal': [<LanguageInstructionModal></LanguageInstructionModal>],
        'name': 'LANGUAGE',
        'content': [<Languages></Languages>

        ]
    },{
        'id': 'causes',
        'layout': 'Senior1',
        'display': 'show',
        'settingsModal': [<CausesSettingsModal></CausesSettingsModal>],
        'settings': true,
        'state': 'deletable',
        'instructionModal': [<CausesInstructionModal></CausesInstructionModal>],
        'name': 'CAUSES',
        'content': [<Causes></Causes>

        ]
    },

    {
        'id': 'interests',
        'layout': 'Senior1',
        'display': 'show',
        'state': 'deletable',
        'settings': true,
        'settingsModal': [<InterestsSettingModal></InterestsSettingModal>],
        'instructionModal': [<InterestInstructionModal></InterestInstructionModal>],
        'name': 'INTERESTS',
        'content': [<Interests></Interests>

        ]
    }
]