import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import Work from "../utils/Work";
import Education from "../utils/Education";
import Teaching from "../utils/Teaching";
import Skills from "../utils/Skills";
import Projects from "../utils/Projects";
import Achievments from "../utils/Achievments";
import Languages from "../utils/Languages";
import Interests from "../utils/Interests";
import ComponentListContext from "./ComponentListContext";

import { LanguageComponents } from "../utils/Languages";
import { SkillComponent } from "../utils/Skills";
import { EducationComponent } from "../utils/Education";
import { WorkComponent } from "../utils/Work";
import { ProjectsComponent } from "../utils/Projects";
import { AchievementsComponent } from "../utils/Achievments";
import { InterestsComponent } from "../utils/Interests";

import EducationInstructionModal from "../components/EducationInstructionModal";
import WorkInstructionModal from "../components/WorkInstructionModal";
import SkillsInstructionModal from "../components/SkillsInstructionModal";
import ProjectInstructionModal from "../components/ProjectInstructionModal";
import AchievementInstructionModal from "../components/AchievementInstructionModal";
import LanguageInstructionModal from "../components/LanguageInstructionModal";
import InterestInstructionModal from "../components/InterestInstructionModal";

import EducationSettingsModal from "../components/EducationSettingsModal";
import SkillsSettingsModal from "../components/SkillsSettingsModal";
import LanguageSettingsModal from "../components/LanguageSettingsModal";
import InterestsSettingModal from "../components/InterestsSettingModal";

import React, { useContext, useEffect, useState } from "react";
import { TeachingComponent } from "../utils/Teaching";
import TeachingInstructionModal from "../components/TeachingInstructionModal";
import TeachingSettingsModal from "../components/TeachingSettingsModal";
import Awards, { AwardsComponent } from "../utils/Award";
import AwardsSettingsModal from "../components/AwardsSettingsModal";
import AwardsInstructionModal from "../components/TeachingInstructionModal";
import Certificates, { CertificatesComponent } from "../utils/Certificates";
import CertificatesInstructionModal from "../components/CertificatesInstructionModal";
import Technical, { TechnicalComponent } from "../utils/Technical";
import TechnicalInstructionModal from "../components/TechnicalInstructionModal";
import { ReferencesComponent } from "../utils/References";
import Organisation, { OrganisationComponent } from "../utils/Organization";
import { ConferenceComponent } from "../utils/Conference";
import { PublicationComponent } from "../utils/Publications";
import { VolunteerComponent } from "../utils/Volunteer";
import Causes, { CausesComponent } from "../utils/Causes";
import CausesInstructionModal from "../components/Causes/CausesInstructionModal";
import CausesSettingsModal from "../components/Causes/CausesSettingsModal";
import SoftSkills, { SoftSkillsComponent } from "../utils/SoftSkills";
import SoftSkillsInstructionModal from "../components/SoftSkills/SoftSkillsInstructionModal";
import SoftSkillsSettingsModal from "../components/SoftSkills/SoftSkillsSettingsModal";
import { col1, col2, RightGrid } from "../Layouts/customModal";
import { Student1Col1, Student1Col2 } from "../Layouts/Student1";
import TemplateContext from "./TemplateContext";
import OrganisationInstructionModal from "../components/OrganisationInstructionModal";
import OrganisationSettingsModal from "../components/OrganisationSettingsModal";

export default function ComponentList(props) {
  const { DocData } = useContext(TemplateContext);
  const [data, setdata] = useState(DocData?.content?.metaData);
  const [ToolBar, setToolBar] = useState(false);
  const [LinkButton, setLinkButton] = useState(false);
  const [USFormat, setUSFormat] = useState(true);
  const [Title, setTitle] = useState(true);
  const [Picture, setPicture] = useState(true);
  const [Summary, setSummary] = useState(true);
  const [Icon, setIcon] = useState(true);
  const [Instruction, setInstruction] = useState(false);
  const [SettingsModal, setSettingsModal] = useState(false);
  const [CoursesPerRowVolunteer, setCoursesPerRowVolunteer] = useState(1);
  const [CoursesPerRowTeaching, setCoursesPerRowTeaching] = useState(1);
  const [CoursesPerRowPublication, setCoursesPerRowPublication] = useState(1);
  const [CoursesPerRowProjects, setCoursesPerRowProjects] = useState(1);
  const [CoursesPerRowOrganisation, setCoursesPerRowOrganisation] = useState(1);
  const [CoursesPerRowEducation, setCoursesPerRowEducation] = useState(1);
  const [CoursesPerRowConf, setCoursesPerRowConf] = useState(1);
  const [CoursesPerRowAwards, setCoursesPerRowAwards] = useState(1);
  const [CoursesPerRowCertification, setCoursesPerRowCertification] =
    useState(1);
  const [CoursesPerRowAchievments, setCoursesPerRowAchievments] = useState(1);
  const [TitleSetting, setTitleSetting] = useState(true);
  const [showSummarySettings, setshowSummarySettings] = useState(false);
  const [ShowCurrentTitleMd, setShowCurrentTitleMd] = useState(false);
  const [CurrentEntity, setCurrentEntity] = useState(null);
  const [SelectedId, setSelectedId] = useState(0);
  const [SkillsSettingInfoGraphic, setSkillsSettingInfoGraphic] =
    useState("None");
  const [InfoGraphic, setInfoGraphic] = useState("None"); //This is Skills Info Graphic
  const [Intensify, setIntensify] = useState(false); //This is Skills Intensify
  const [CausesSettingInfoGraphic, setCausesSettingInfoGraphic] =
    useState("None");
  const [CausesInfoGraphic, setCausesInfoGraphic] = useState("None"); //This is Causes Info Graphic
  const [CausesIntensify, setCausesIntensify] = useState(false); //This is Causes Intensify
  const [SoftSkillsSettingInfoGraphic, setSoftSkillsSettingInfoGraphic] =
    useState("None");
  const [SoftSkillsInfoGraphic, setSoftSkillsInfoGraphic] = useState("None"); //This is SoftSkills Info Graphic
  const [SoftSkillsIntensify, setSoftSkillsIntensify] = useState(false); //This is SoftSkills Intensify
  const [InterestsSettingInfoGraphic, setInterestsSettingInfoGraphic] =
    useState("None");
  const [InterestsInfoGraphic, setInterestsInfoGraphic] = useState("None");
  const [LanguageSettingInfoGraphic, setLanguageSettingInfoGraphic] =
    useState("None");
  const [LanguageInfographic, setLanguageInfographic] = useState("None");
  const [UserData, setUserData] = useState({});

  const [dummyState, setdummyState] = useState(false);
  const [DummyState, setDummyState] = useState(false);
  const [LanProfCompArray, setLanProfCompArray] = useState([
    <LanguageComponents key={1} id="1"></LanguageComponents>,
  ]);
  const [SkillsCompArray, setSkillsCompArray] = useState([
    <SkillComponent key={2} id="2"></SkillComponent>,
  ]);
  const [CausesCompArray, setCausesCompArray] = useState([
    <CausesComponent key={3} id="3"></CausesComponent>,
  ]);
  const [SoftSkillsCompArray, setSoftSkillsCompArray] = useState([
    <SoftSkillsComponent key={4} id="4"></SoftSkillsComponent>,
  ]);
  const [EducationCompArray, setEducationCompArray] = useState([
    <EducationComponent key={5} id="5"></EducationComponent>,
  ]);
  const [TeachingCompArray, setTeachingCompArray] = useState([
    <TeachingComponent key={6} id="6"></TeachingComponent>,
  ]);
  const [ReferencesCompArray, setReferencesCompArray] = useState([
    <ReferencesComponent key={7} id="7"></ReferencesComponent>,
  ]);
  const [OrganisationCompArray, setOrganisationCompArray] = useState([
    <OrganisationComponent key={8} id="8"></OrganisationComponent>,
  ]);
  const [VolunteerCompArray, setVolunteerCompArray] = useState([
    <VolunteerComponent key={9} id="9"></VolunteerComponent>,
  ]);
  const [PublicationCompArray, setPublicationCompArray] = useState([
    <PublicationComponent key={10} id="10"></PublicationComponent>,
  ]);
  const [ConferenceCompArray, setConferenceCompArray] = useState([
    <ConferenceComponent key={11} id="11"></ConferenceComponent>,
  ]);
  const [AwardsCompArray, setAwardsCompArray] = useState([
    <AwardsComponent key={12} id="12"></AwardsComponent>,
  ]);
  const [WorkCompArray, setWorkCompArray] = useState([
    <WorkComponent key={13} id="13"></WorkComponent>,
  ]);
  const [ProjectsCompArray, setProjectsCompArray] = useState([
    <ProjectsComponent key={14} id="14"></ProjectsComponent>,
  ]);
  const [AchievementsCompArray, setAchievementsCompArray] = useState([
    <AchievementsComponent key={15} id="15"></AchievementsComponent>,
  ]);
  const [TechnicalCompArray, setTechnicalCompArray] = useState([
    <TechnicalComponent key={16} id="16"></TechnicalComponent>,
  ]);
  const [CertificatesCompArray, setCertificatesCompArray] = useState([
    <CertificatesComponent key={17} id="17"></CertificatesComponent>,
  ]);
  const [InterestsCompArray, setInterestsCompArray] = useState([
    <InterestsComponent key={18} id="18"></InterestsComponent>,
  ]);

  const [Font, setFont] = useState(data?.font);
  const [FontSize, setFontSize] = useState("md");
  const [ThemeColor, setThemeColor] = useState("black");
  const [BackgroundImg, setBackgroundImg] = useState("");
  const [SelectedText, setSelectedText] = useState("");
  const [DateSeparator, setDateSeparator] = useState("/");
  const [Eng, setEng] = useState("English US");

  const [Proficiency, setProficiency] = useState("Professional Proficiency");

  const [LanProffirst, setLanProffirst] = useState("Elementary Proficiency");
  const [LanProfsecond, setLanProfsecond] = useState(
    "Limited Work Proficiency"
  );
  const [LanProfthird, setLanProfthird] = useState(
    "Professional Work Proficiency"
  );
  const [LanProfforth, setLanProfforth] = useState(
    "Full Professional Proficiency"
  );
  const [LanProffifth, setLanProffifth] = useState(
    "Native or bilingual Proficiency"
  );

  const [MovableIndex, setMovableIndex] = useState(null);

  const [LanProfData, setLanProfData] = useState([]);

  const [SkillsData, setSkillsData] = useState([]);
  const [CausesData, setCausesData] = useState([]);
  const [SoftSkillsData, setSoftSkillsData] = useState([]);
  const [EducationData, setEducationData] = useState([]);
  const [TeachingData, setTeachingData] = useState([]);
  const [ReferencesData, setReferencesData] = useState([]);
  const [OrganisationData, setOrganisationData] = useState([]);
  const [VolunteerData, setVolunteerData] = useState([]);
  const [PublicationData, setPublicationData] = useState([]);
  const [ConferenceData, setConferenceData] = useState([]);
  const [AwardsData, setAwardsData] = useState([]);
  const [WorkData, setWorkData] = useState([]);
  const [ProjectsData, setProjectsData] = useState([]);
  const [AchievementsData, setAchievementsData] = useState([]);
  const [TechnicalData, setTechnicalData] = useState([]);
  const [CertificatesData, setCertificatesData] = useState([]);
  const [InterestsData, setInterestsData] = useState([]);

  const [Col1, setCol1] = useState(col1);
  const [Col2, setCol2] = useState(col2);
  const [Right, setRight] = useState(RightGrid);
  const [List1, setList1] = useState(Student1Col1);
  const [List2, setList2] = useState(Student1Col2);
  const handleDeleteField = (id, List, setList, index, SelectedId) => {
    if (TitleSetting) {
      if (id === "skills") {
        if (SkillsCompArray.length !== 0) {
          setSkillsCompArray([
            ...SkillsCompArray.filter((el) => el.props.id != SelectedId),
          ]);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(SkillsData, SelectedId, setSkillsData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "awards") {
        if (AwardsCompArray.length !== 0) {
          setAwardsCompArray([
            ...AwardsCompArray.filter((el) => el.props.id != SelectedId),
          ]);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(AwardsData, SelectedId, setAwardsData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "softskills") {
        if (SoftSkillsCompArray.length !== 0) {
          setSoftSkillsCompArray([
            ...SoftSkillsCompArray.filter((el) => el.props.id != SelectedId),
          ]);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(SoftSkillsData, SelectedId, setSoftSkillsData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "causes") {
        if (CausesCompArray.length !== 0) {
          setCausesCompArray([
            ...CausesCompArray.filter((el) => el.props.id != SelectedId),
          ]);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(CausesData, SelectedId, setCausesData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }

      if (id === "technical") {
        if (TechnicalCompArray.length !== 0) {
          setTechnicalCompArray(
            TechnicalCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(TechnicalData, SelectedId, setTeachingData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }

      if (id === "volunteer") {
        if (VolunteerCompArray.length !== 0) {
          setVolunteerCompArray(
            VolunteerCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(VolunteerData, SelectedId, setVolunteerData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "references") {
        if (ReferencesCompArray.length !== 0) {
          setReferencesCompArray(
            ReferencesCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(ReferencesData, SelectedId, setReferencesData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "conference") {
        if (ConferenceCompArray.length !== 0) {
          setConferenceCompArray(
            ConferenceCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(ConferenceData, SelectedId, setConferenceData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "publication") {
        if (PublicationCompArray.length !== 0) {
          setPublicationCompArray(
            PublicationCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(PublicationData, SelectedId, setPublicationData);
        } else {
          DeleteComponent(List, setList, index);
        }
        return;
      }
      if (id === "certificates") {
        if (CertificatesCompArray.length !== 0) {
          setCertificatesCompArray(
            CertificatesCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(CertificatesData, SelectedId, setCertificatesData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "education") {
        if (EducationCompArray.length !== 0) {
          setEducationCompArray(
            EducationCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(EducationData, SelectedId, setEducationData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "teaching") {
        if (TeachingCompArray.length !== 0) {
          setTeachingCompArray(
            TeachingCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(TeachingData, SelectedId, setTeachingData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "education") {
        if (EducationCompArray.length !== 0) {
          setEducationCompArray(
            EducationCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(EducationData, SelectedId, setEducationData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "workExperience") {
        if (WorkCompArray.length !== 0) {
          setWorkCompArray(
            WorkCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(WorkData, SelectedId, setWorkData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }

      if (id === "personalProject") {
        if (ProjectsCompArray.length !== 0) {
          setProjectsCompArray(
            ProjectsCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(ProjectsData, SelectedId, setProjectsData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }

      if (id === "achievements") {
        if (AchievementsCompArray.length !== 0) {
          setAchievementsCompArray(
            AchievementsCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(AchievementsData, SelectedId, setAchievementsData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "language") {
        if (LanProfCompArray.length !== 0) {
          setLanProfCompArray(
            LanProfCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(LanProfData, SelectedId, setLanProfData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "interests") {
        if (InterestsCompArray.length !== 0) {
          setInterestsCompArray(
            InterestsCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(InterestsData, SelectedId, setInterestsData);
        } else {
          DeleteComponent(List, setList, index);
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
        }
        return;
      }
      if (id === "organisation") {
        if (OrganisationCompArray.length !== 0) {
          setOrganisationCompArray(
            OrganisationCompArray.filter((el) => el.props.id != SelectedId)
          );
          const x = document.getElementsByClassName(id);
          x[0].classList.remove("outline-dashed", "outline-primary2");
          x[1].classList.remove("outline-dashed", "outline-primary2");
          document.getElementById(`${id}menu`).classList.add("hidden");
          removeComponent(SkillsData, SelectedId, setSkillsData);
        } else {
          DeleteComponent(List, setList, index);
        }
      }
    } else {
      DeleteComponent(List, setList, index);
    }
  };
  function moveElement(array, id, methode) {
    const index = array.findIndex((el) => el.props.id == id);
    if (array.length == 1 || (index - 1 < 0 && methode == "up")) {
      return array;
    } else {
      const element = array[index];
      array.splice(index, 1);
      array.splice(methode == "up" ? index - 1 : index + 1, 0, element);
      return array;
    }
  }
  const handleMoveComp = (SelectedId, id, direction) => {
    console.log(id);
    if (id === "language") {
      setLanProfCompArray((LanProfCompArray) => [
        ...moveElement(LanProfCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "skills") {
      setSkillsCompArray((SkillsCompArray) => [
        ...moveElement(SkillsCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "softskills") {
      setSoftSkillsCompArray((SoftSkillsCompArray) => [
        ...moveElement(SoftSkillsCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "causes") {
      setCausesCompArray((CausesCompArray) => [
        ...moveElement(CausesCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "organisation") {
      setOrganisationCompArray((OrganisationCompArray) => [
        ...moveElement(OrganisationCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "conference") {
      setConferenceCompArray((ConferenceCompArray) => [
        ...moveElement(ConferenceCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "teaching") {
      setTeachingCompArray((TeachingCompArray) => [
        ...moveElement(TeachingCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "awards") {
      setAwardsCompArray((AwardsCompArray) => [
        ...moveElement(AwardsCompArray, SelectedId, direction),
      ]);
      return;
    }

    if (id === "personalProject") {
      setProjectsCompArray((ProjectsCompArray) => [
        ...moveElement(ProjectsCompArray, SelectedId, direction),
      ]);
      return;
    }

    if (id === "achievements") {
      setAchievementsCompArray((AchievementsCompArray) => [
        ...moveElement(AchievementsCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "references") {
      setReferencesCompArray((ReferencesCompArray) => [
        ...moveElement(ReferencesCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "certificates") {
      setCertificatesCompArray((CertificatesCompArray) => [
        ...moveElement(CertificatesCompArray, SelectedId, direction),
      ]);
      return;
    }

    if (id === "education") {
      setEducationCompArray((EducationCompArray) => [
        ...moveElement(EducationCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "workExperience") {
      setWorkCompArray((WorkCompArray) => [
        ...moveElement(WorkCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "interests") {
      setInterestsCompArray((InterestsCompArray) => [
        ...moveElement(InterestsCompArray, SelectedId, direction),
      ]);

      return;
    }
    if (id === "technical") {
      setTechnicalCompArray((TechnicalCompArray) => [
        ...moveElement(TechnicalCompArray, SelectedId, direction),
      ]);
      return;
    }
    if (id === "publication") {
      setPublicationCompArray((PublicationCompArray) => [
        ...moveElement(PublicationCompArray, SelectedId, direction),
      ]);
      setSelectedId("");
      return;
    }
    if (id === "volunteer") {
      setVolunteerCompArray((VolunteerCompArray) => [
        ...moveElement(VolunteerCompArray, SelectedId, direction),
      ]);
      return;
    }
  };
  const disabledButtonUp = (item, id) => {
    if (item === "education") {
      if (EducationCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "language") {
      if (LanProfCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "skills") {
      if (SkillsCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "softskills") {
      if (SoftSkillsCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "causes") {
      if (CausesCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "organisation") {
      if (OrganisationCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "conference") {
      if (ConferenceCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "teaching") {
      if (TeachingCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "awards") {
      if (AwardsCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "personalProject") {
      if (ProjectsCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "achievements") {
      if (AchievementsCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "references") {
      if (ReferencesCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }
    if (item === "certificates") {
      if (CertificatesCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "workExperience") {
      if (WorkCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "interests") {
      if (InterestsCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "technical") {
      if (TechnicalCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "publication") {
      if (PublicationCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "volunteer") {
      if (VolunteerCompArray.findIndex((el) => el.props.id == id) <= 0) {
        return true;
      } else {
        return false;
      }
    }
  };
  const disabledButtonDown = (item, id) => {
    if (item === "education") {
      if (
        EducationCompArray.findIndex((el) => el.props.id == id) + 2 >
        EducationCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "language") {
      if (
        LanProfCompArray.findIndex((el) => el.props.id == id) + 2 >
        LanProfCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "skills") {
      if (
        SkillsCompArray.findIndex((el) => el.props.id == id) + 2 >
        SkillsCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "softskills") {
      if (
        SoftSkillsCompArray.findIndex((el) => el.props.id == id) + 2 >
        SoftSkillsCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "causes") {
      if (
        CausesCompArray.findIndex((el) => el.props.id == id) + 2 >
        CausesCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "organisation") {
      if (
        OrganisationCompArray.findIndex((el) => el.props.id == id) + 2 >
        OrganisationCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "conference") {
      if (
        ConferenceCompArray.findIndex((el) => el.props.id == id) + 2 >
        ConferenceCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "teaching") {
      if (
        TeachingCompArray.findIndex((el) => el.props.id == id) + 2 >
        TeachingCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "awards") {
      if (
        AwardsCompArray.findIndex((el) => el.props.id == id) + 2 >
        AwardsCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "personalProject") {
      if (
        ProjectsCompArray.findIndex((el) => el.props.id == id) + 2 >
        ProjectsCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (item === "achievements") {
      if (
        AchievementsCompArray.findIndex((el) => el.props.id == id) + 2 >
        AchievementsCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "references") {
      if (
        ReferencesCompArray.findIndex((el) => el.props.id == id) + 2 >
        ReferencesCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "certificates") {
      if (
        CertificatesCompArray.findIndex((el) => el.props.id == id) + 2 >
        CertificatesCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "workExperience") {
      if (
        WorkCompArray.findIndex((el) => el.props.id == id) + 2 >
        WorkCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "interests") {
      if (
        InterestsCompArray.findIndex((el) => el.props.id == id) + 2 >
        InterestsCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "technical") {
      if (
        TechnicalCompArray.findIndex((el) => el.props.id == id) + 2 >
        TechnicalCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "publication") {
      if (
        PublicationCompArray.findIndex((el) => el.props.id == id) + 2 >
        PublicationCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "volunteer") {
      if (
        VolunteerCompArray.findIndex((el) => el.props.id == id) + 2 >
        VolunteerCompArray.length
      ) {
        return true;
      } else {
        return false;
      }
    }
  };
  const handleNewField = (id) => {
    if (id === "language") {
      addComponent(
        LanProfData,
        LanProfCompArray,
        LanguageComponents,
        setLanProfCompArray
      );
    }
    if (id === "skills") {
      addComponent(
        SkillsData,
        SkillsCompArray,
        SkillComponent,
        setSkillsCompArray
      );
    }
    if (id === "softskills") {
      addComponent(
        SoftSkillsData,
        SoftSkillsCompArray,
        SoftSkillsComponent,
        setSoftSkillsCompArray
      );
    }
    if (id === "causes") {
      addComponent(
        CausesData,
        CausesCompArray,
        CausesComponent,
        setCausesCompArray
      );
    }
    if (id === "education") {
      console.log("EDUCATION::::::::");
      addComponent(
        EducationData,
        EducationCompArray,
        EducationComponent,
        setEducationCompArray
      );
    }
    if (id === "organisation") {
      addComponent(
        OrganisationData,
        OrganisationCompArray,
        OrganisationComponent,
        setOrganisationCompArray
      );
    }
    if (id === "conference") {
      addComponent(
        ConferenceData,
        ConferenceCompArray,
        ConferenceComponent,
        setConferenceCompArray
      );
    }
    if (id === "teaching") {
      addComponent(
        TeachingData,
        TeachingCompArray,
        TeachingComponent,
        setTeachingCompArray
      );
    }
    if (id === "awards") {
      addComponent(
        AwardsData,
        AwardsCompArray,
        AwardsComponent,
        setAwardsCompArray
      );
    }
    if (id === "personalProject") {
      addComponent(
        ProjectsData,
        ProjectsCompArray,
        ProjectsComponent,
        setProjectsCompArray
      );
    }
    if (id === "achievements") {
      addComponent(
        AchievementsData,
        AchievementsCompArray,
        AchievementsComponent,
        setAchievementsCompArray
      );
    }
    if (id === "references") {
      addComponent(
        ReferencesData,
        ReferencesCompArray,
        ReferencesComponent,
        setReferencesCompArray
      );
    }
    if (id === "certificates") {
      addComponent(
        CertificatesData,
        CertificatesCompArray,
        CertificatesComponent,
        setCertificatesCompArray
      );
    }
    if (id === "technical") {
      addComponent(
        TechnicalData,
        TechnicalCompArray,
        TechnicalComponent,
        setTechnicalCompArray
      );
    }
    if (id === "publication") {
      addComponent(
        PublicationData,
        PublicationCompArray,
        PublicationComponent,
        setPublicationCompArray
      );
    }
    if (id === "workExperience") {
      addComponent(WorkData, WorkCompArray, WorkComponent, setWorkCompArray);
    }
    if (id === "volunteer") {
      addComponent(
        VolunteerData,
        VolunteerCompArray,
        VolunteerComponent,
        setVolunteerCompArray
      );
    }

    if (id === "interests") {
      addComponent(
        InterestsData,
        InterestsCompArray,
        InterestsComponent,
        setInterestsCompArray
      );
    }
  };

  const DeleteComponent = (List, setList, index) => {
    let temp_state = [...List];
    let temp_element = { ...temp_state[index] };
    List[index].state = "not_deletable";
    temp_element.display = "hidden";
    temp_state[index] = temp_element;
    setList(temp_state);
  };

  const addComponent = (Data, CompArray, Component, setCompArray) => {
    console.log("Dataaaaa: =========", Data);
    const maxId = Math.max(...Data.map((object) => object.id));
    console.log("maxId: ", maxId);
    const selectedObject = Data.filter((object) => object.id == maxId);
    const id = Data.filter((object) => object.id == +SelectedId + 1);
    // console.log("id: ", id);
    const lastData = Data[Data.length - 1];
    console.log("lastData: ", lastData);
    if (
      (lastData && (lastData.title || lastData.title2)) ||
      Data.length == 0
      // Data.length == 1 ||
      // (selectedObject && (selectedObject[0].title || selectedObject[0].title2))
    ) {
      const index = CompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setCompArray((CompArray) => {
        const newArray = [...CompArray];
        newArray.splice(
          index,
          0,
          <Component
            key={
              id
                ? id + Math.random() + new Date()
                : +SelectedId + 1 + Math.random() + new Date()
            }
            id={String(+SelectedId + 1 + Math.random())}
          />
        );
        console.log("newArray:Dataaa ", newArray);

        return newArray;
      });
    }
  };
  const removeComponent = (Data, id, setData) => {
    const index = Data.findIndex((object) => object.id === id);
    if (index !== -1) {
      setData((Data) => {
        const newData = [...Data];
        newData.splice(index, 1);
        return newData;
      });
    }
  };

  return (
    <ComponentListContext.Provider
      value={{
        SkillsData,
        setSkillsData,
        setCausesData,
        CausesData,
        handleMoveComp,
        disabledButtonUp,
        disabledButtonDown,
        handleNewField,
        LinkButton,
        setLinkButton,
        LanProfData,
        setLanProfData,
        SoftSkillsData,
        setSoftSkillsData,
        EducationData,
        setEducationData,
        TeachingData,
        setTeachingData,
        ReferencesData,
        setReferencesData,
        OrganisationData,
        setOrganisationData,
        VolunteerData,
        setVolunteerData,
        PublicationData,
        setPublicationData,
        ConferenceData,
        setConferenceData,
        AwardsData,
        setAwardsData,
        WorkData,
        setWorkData,
        ProjectsData,
        setProjectsData,
        AchievementsData,
        setAchievementsData,
        TechnicalData,
        setTechnicalData,
        CertificatesData,
        setCertificatesData,
        InterestsData,
        setInterestsData,
        Col1,
        Col2,
        setCol1,
        setCol2,
        Right,
        handleDeleteField,
        setRight,
        List1,
        List2,
        setList1,
        setList2,
        SoftSkillsCompArray,
        setSoftSkillsCompArray,
        SoftSkillsSettingInfoGraphic,
        setSoftSkillsSettingInfoGraphic,
        SoftSkillsInfoGraphic,
        setSoftSkillsInfoGraphic,
        SoftSkillsIntensify,
        setSoftSkillsIntensify,
        USFormat,
        Title,
        Picture,
        Summary,
        setPicture,
        setTitle,
        setSummary,
        setUSFormat,
        Icon,
        setIcon,
        Instruction,
        setInstruction,
        SettingsModal,
        setSettingsModal,
        CoursesPerRowVolunteer,
        setCoursesPerRowVolunteer,
        CoursesPerRowTeaching,
        setCoursesPerRowTeaching,
        CoursesPerRowPublication,
        setCoursesPerRowPublication,
        CoursesPerRowProjects,
        setCoursesPerRowProjects,
        CoursesPerRowOrganisation,
        setCoursesPerRowOrganisation,
        CoursesPerRowEducation,
        setCoursesPerRowEducation,
        CoursesPerRowConf,
        setCoursesPerRowConf,
        CoursesPerRowAwards,
        setCoursesPerRowAwards,
        ToolBar,
        setToolBar,
        CoursesPerRowCertification,
        setCoursesPerRowCertification,
        CoursesPerRowAchievments,
        setCoursesPerRowAchievments,
        ReferencesCompArray,
        setReferencesCompArray,
        SkillsSettingInfoGraphic,
        setSkillsSettingInfoGraphic,
        dummyState,
        setdummyState,
        LanguageSettingInfoGraphic,
        setLanguageSettingInfoGraphic,
        LanProfCompArray,
        setLanProfCompArray,
        SkillsCompArray,
        setSkillsCompArray,
        ThemeColor,
        setThemeColor,
        DateSeparator,
        setDateSeparator,
        CausesCompArray,
        setCausesCompArray,
        Eng,
        setEng,
        Font,
        VolunteerCompArray,
        setVolunteerCompArray,
        PublicationCompArray,
        setPublicationCompArray,
        setFont,
        setAwardsCompArray,
        AwardsCompArray,
        EducationCompArray,
        setEducationCompArray,
        TeachingCompArray,
        setTeachingCompArray,
        WorkCompArray,
        setWorkCompArray,
        ProjectsCompArray,
        ConferenceCompArray,
        setConferenceCompArray,
        OrganisationCompArray,
        setOrganisationCompArray,
        TechnicalCompArray,
        setTechnicalCompArray,
        setProjectsCompArray,
        AchievementsCompArray,
        setAchievementsCompArray,
        InterestsCompArray,
        setInterestsCompArray,
        InfoGraphic,
        setInfoGraphic,
        CausesInfoGraphic,
        setCausesInfoGraphic,
        CertificatesCompArray,
        setCertificatesCompArray,
        CausesSettingInfoGraphic,
        setCausesSettingInfoGraphic,
        InterestsInfoGraphic,
        setInterestsInfoGraphic,
        InterestsSettingInfoGraphic,
        setInterestsSettingInfoGraphic,
        Intensify,
        setIntensify,
        LanguageInfographic,
        setLanguageInfographic,
        CausesIntensify,
        setCausesIntensify,
        CurrentEntity,
        setCurrentEntity,
        LanProffirst,
        setLanProffirst,
        LanProfsecond,
        setLanProfsecond,
        LanProfthird,
        setLanProfthird,
        LanProfforth,
        setLanProfforth,
        DummyState,
        setDummyState,
        LanProffifth,
        setLanProffifth,
        ShowCurrentTitleMd,
        setShowCurrentTitleMd,
        showSummarySettings,
        setshowSummarySettings,
        Proficiency,
        setProficiency,
        TitleSetting,
        setTitleSetting,
        MovableIndex,
        setMovableIndex,
        FontSize,
        setFontSize,
        SelectedId,
        setSelectedId,
        BackgroundImg,
        setBackgroundImg,
        SelectedText,
        setSelectedText,
      }}
    >
      {props.children}
    </ComponentListContext.Provider>
  );
}
