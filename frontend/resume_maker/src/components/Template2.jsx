import React, { useState, useEffect, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faAdd,
  faTrash,
  faArrowUp,
  faArrowDown,
  faGlobe,
  faAddressBook,
  faCity,
  faMap,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Bulb from "../assets/Bulb";
import Settings from "../assets/Settings";
import MyContents from "../assets/MyContents";
import ProfileImage from "./ProfileImage";
import ComponentListContext from "../context/ComponentListContext";
import { LanguageComponents } from "../utils/Languages";
import { SkillComponent } from "../utils/Skills";
import { EducationComponent } from "../utils/Education";
import { WorkComponent } from "../utils/Work";
import { ProjectsComponent } from "../utils/Projects";
import { AchievementsComponent } from "../utils/Achievments";
import { InterestsComponent } from "../utils/Interests";
import { TeachingComponent } from "../utils/Teaching";
import { AwardsComponent } from "../utils/Award";
import { CertificatesComponent } from "../utils/Certificates";
import { TechnicalComponent } from "../utils/Technical";
import { ReferencesComponent } from "../utils/References";
import { OrganisationComponent } from "../utils/Organization";
import { ConferenceComponent } from "../utils/Conference";
import { VolunteerComponent } from "../utils/Volunteer";
import { PublicationComponent } from "../utils/Publications";
import { CausesComponent } from "../utils/Causes";
import { SoftSkillsComponent } from "../utils/SoftSkills";
import UserInfoEdit from "./UserModal/UserInfoEdit";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faQuora,
  faSkype,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import TemplateContext from "../context/TemplateContext";
export default function Template2() {
  const user_data = JSON.parse(localStorage.getItem("user_data"))?.data;

  const {
    ShowCurrentTitleMd,
    setShowCurrentTitleMd,
    showSummarySettings,
    setshowSummarySettings,
    TitleSetting,
    setTitleSetting,
    UserData,
    setUserData,
    List1,
    List2,
    setList2,
    setList1,
    USFormat,
    Title,
    Picture,
    Summary,
    SoftSkillsCompArray,
    setSoftSkillsCompArray,
    Instruction,
    setInstruction,
    SettingsModal,
    setSettingsModal,
    setCertificatesCompArray,
    CertificatesCompArray,
    dummyState,
    setdummyState,
    LanProfCompArray,
    ConferenceCompArray,
    setConferenceCompArray,
    OrganisationCompArray,
    setOrganisationCompArray,
    setLanProfCompArray,
    TechnicalCompArray,
    setTechnicalCompArray,
    SkillsCompArray,
    setSkillsCompArray,
    CausesCompArray,
    setCausesCompArray,
    EducationCompArray,
    setEducationCompArray,
    setTeachingCompArray,
    TeachingCompArray,
    setAwardsCompArray,
    AwardsCompArray,
    ThemeColor,
    ReferencesCompArray,
    setReferencesCompArray,
    WorkCompArray,
    setWorkCompArray,
    ProjectsCompArray,
    setProjectsCompArray,
    AchievementsCompArray,
    setAchievementsCompArray,
    InterestsCompArray,
    setPublicationCompArray,
    PublicationCompArray,
    setVolunteerCompArray,
    VolunteerCompArray,
    setInterestsCompArray,
    MovableIndex,
    setMovableIndex,
    SelectedId,
    SelectedText,
    setSelectedText,
    BackgroundImg,
    Font,
    FontSize,
    setSummary,
    setTitle,
  } = useContext(ComponentListContext);
  const { ChangeDocName, DocData, ContactInfo } = useContext(TemplateContext);
  const [showInfoEditModal, setshowInfoEditModal] = useState(false);

  const reflist1 = useRef([]);
  const reflist2 = useRef([]);
  const title = useRef();
  const pitch = useRef();

  reflist1.current = [];
  reflist2.current = [];

  const addreflist1 = (e) => {
    if (e && !reflist1.current.includes(e)) {
      reflist1.current.push(e);
    }
  };

  const addreflist2 = (e) => {
    if (e && !reflist2.current.includes(e)) {
      reflist2.current.push(e);
    }
  };
  function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr;
  }
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
      if (EducationCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "language") {
      if (LanProfCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "skills") {
      if (SkillsCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "softskills") {
      if (SoftSkillsCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "causes") {
      if (CausesCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "organisation") {
      if (OrganisationCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "conference") {
      if (ConferenceCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "teaching") {
      if (TeachingCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "awards") {
      if (AwardsCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "personalProject") {
      if (ProjectsCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "achievements") {
      if (AchievementsCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "references") {
      if (ReferencesCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }
    if (item === "certificates") {
      if (CertificatesCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "workExperience") {
      if (WorkCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "interests") {
      if (InterestsCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "technical") {
      if (TechnicalCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "publication") {
      if (PublicationCompArray.findIndex((el) => el.props.id == id) == 0) {
        return true;
      } else {
        return false;
      }
    }

    if (item === "volunteer") {
      if (VolunteerCompArray.findIndex((el) => el.props.id == id) == 0) {
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

  /* const handleMoveCompUp1 = React.useCallback(
         () => {
             // do nothing on top element
             if (MovableIndex !== 0) {
           console.log(MovableIndex)
               let previousItems = [...WorkCompArray]
                 let temp = previousItems[MovableIndex - 1]
                 previousItems[MovableIndex - 1] = previousItems[MovableIndex]
                 previousItems[MovableIndex] = temp
                 console.log(previousItems)
                 setWorkCompArray(previousItems)
             }
         },
          [setWorkCompArray, WorkCompArray]
      )
 */
  // const handleMoveCompUp1 = (List, setList) => {

  //     let element = WorkCompArray[MovableIndex]
  //     let from = parseInt(MovableIndex)
  //     let to = from + 1
  //     let newArr = [...arraymove(WorkCompArray, from, to)]
  //     console.log(newArr)
  //     setWorkCompArray(newArr)
  //     console.log(WorkCompArray[1])
  // }

  let handleShow = (e) => {
    if (
      document.getElementById("summarymenu") &&
      !document.getElementById("summarymenu").contains(e.target)
    ) {
      setshowSummarySettings(false);
    }
    if (
      document.getElementById("summarymenu") &&
      !document.getElementById("titlemenu").contains(e.target)
    ) {
      setShowCurrentTitleMd(false);
    }
  };
  useEffect(() => {
    let handler = (e) => {
      handleShow(e);
      if (title && title.current.contains(e.target)) {
        title.current.classList.remove(`text-${ThemeColor}`);
      }
      if (title && !title.current.contains(e.target)) {
        title.current.classList.add(`text-${ThemeColor}`);
      }
      if (pitch && pitch.current.contains(e.target)) {
        pitch.current.classList.remove("placeholder:text-white");
      }
      if (pitch && !pitch.current.contains(e.target)) {
        pitch.current.classList.add("placeholder:text-white");
      }
      reflist1.current.map((ref) => {
        if (ref && !ref.contains(e.target)) {
          const id = ref.id;
          const x = document.getElementsByClassName(id);
          document.getElementById(`${id}menu`).classList.add("hidden");
          if (!x[0].contains(e.target)) {
            x[0].classList.remove("outline-dashed", "outline-primary2");
          }
          if (!x[1].contains(e.target)) {
            x[1].classList.remove("outline-dashed", "outline-primary2");
          }
        }
      });
      reflist2.current.map((ref) => {
        if (ref && !ref.contains(e.target)) {
          const id = ref.id;
          const x = document.getElementsByClassName(id);
          document.getElementById(`${id}menu`).classList.add("hidden");
          if (!x[0].contains(e.target)) {
            x[0].classList.remove("outline-dashed", "outline-primary2");
          }
          if (!x[1].contains(e.target)) {
            x[1].classList.remove("outline-dashed", "outline-primary2");
          }
        }
      });
      //
    };
    /**/

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleOnClick = (e, id, index) => {
    const x = document.getElementsByClassName(id);
    if (x[0].contains(e.target) && !!e.clientX) {
      x[0].classList.add("outline-dashed", "outline-primary2");
      x[1].classList.remove("outline-dashed", "outline-primary2");
      document.getElementById(`${id}menu`).classList.remove("hidden");
      setTitleSetting(true);
      console.log("some");
      return;
    }
    if (x[1].contains(e.target)) {
      x[1].classList.add("outline-dashed", "outline-primary2");
      x[0].classList.remove("outline-dashed", "outline-primary2");
      setTitleSetting(false);
      console.log("some---");
      return;
    }
    // i.setAttribute("style", `border-image: url('${Border}') 30 round`)
  };

  const handleNewField = (id, SelectedId) => {
    console.log('HEREEEEEEEEE',id, SelectedId,'newArray');
    if (id === "language") {
      const index =
        LanProfCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setLanProfCompArray((LanProfCompArray) => {
        const newArray = [...LanProfCompArray];
        newArray.splice(
          index,
          0,
          <LanguageComponents
            key={LanProfCompArray.length + 1 + Math.random() + new Date()}
            id={String(LanProfCompArray.length + 1 + Math.random())}
          ></LanguageComponents>
        );
        return newArray;
      });
      return;
    }
    if (id === "skills") {
      const index =
        SkillsCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setSkillsCompArray((SkillsCompArray) => {
        const newArray = [...SkillsCompArray];
        newArray.splice(
          index,
          0,
          <SkillComponent
            key={SkillsCompArray.length + 1 + Math.random() + new Date()}
            id={String(SkillsCompArray.length + 1 + Math.random())}
          ></SkillComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "softskills") {
      const index =
        SoftSkillsCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setSoftSkillsCompArray((SoftSkillsCompArray) => {
        const newArray = [...SoftSkillsCompArray];
        newArray.splice(
          index,
          0,
          <SoftSkillsComponent
            key={SoftSkillsCompArray.length + 1 + Math.random() + new Date()}
            id={String(SoftSkillsCompArray.length + 1 + Math.random())}
          ></SoftSkillsComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "causes") {
      const index =
        CausesCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setCausesCompArray((CausesCompArray) => {
        const newArray = [...CausesCompArray];
        newArray.splice(
          index,
          0,
          <CausesComponent
            key={CausesCompArray.length + 1 + Math.random() + new Date()}
            id={String(CausesCompArray.length + 1 + Math.random())}
          ></CausesComponent>
        );
        return newArray;
      });
      return;
    }

    if (id === "education") {
      console.log('EducationCompArray: ', EducationCompArray);
      const index =
        EducationCompArray.findIndex((el) => el.props.id == SelectedId) + 1;

      setEducationCompArray((EducationCompArray) => {
        const newArray = [...EducationCompArray];
        
        newArray.splice(
          index,
          0,
          <EducationComponent
            key={EducationCompArray.length + 1 + Math.random() + new Date()}
            id={String(EducationCompArray.length + 1 + Math.random())}
          ></EducationComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "organisation") {
      const index =
        OrganisationCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setOrganisationCompArray((OrganisationCompArray) => {
        const newArray = [...OrganisationCompArray];
        newArray.splice(
          index,
          0,
          <OrganisationComponent
            key={OrganisationCompArray.length + 1 + Math.random() + new Date()}
            id={String(OrganisationCompArray.length + 1 + Math.random())}
          ></OrganisationComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "conference") {
      const index =
        ConferenceCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setConferenceCompArray((ConferenceCompArray) => {
        const newArray = [...ConferenceCompArray];
        newArray.splice(
          index,
          0,
          <ConferenceComponent
            key={ConferenceCompArray.length + 1 + Math.random() + new Date()}
            id={String(ConferenceCompArray.length + 1 + Math.random())}
          ></ConferenceComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "teaching") {
      const index =
        TeachingCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setTeachingCompArray((TeachingCompArray) => {
        const newArray = [...TeachingCompArray];
        newArray.splice(
          index,
          0,
          <TeachingComponent
            key={TeachingCompArray.length + 1 + Math.random() + new Date()}
            id={String(TeachingCompArray.length + 1 + Math.random())}
          ></TeachingComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "awards") {
      const index =
        AwardsCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setAwardsCompArray((AwardsCompArray) => {
        const newArray = [...AwardsCompArray];
        newArray.splice(
          index,
          0,
          <AwardsComponent
            key={AwardsCompArray.length + 1 + Math.random() + new Date()}
            id={String(AwardsCompArray.length + 1 + Math.random())}
          ></AwardsComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "workExperience") {
      const index =
        WorkCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setWorkCompArray((WorkCompArray) => {
        const newArray = [...WorkCompArray];
        newArray.splice(
          index,
          0,
          <WorkComponent
            key={WorkCompArray.length + 1 + Math.random() + new Date()}
            id={String(WorkCompArray.length + 1 + Math.random())}
          ></WorkComponent>
        );
        return newArray;
      });
      return;
    }
    

    if (id === "personalProject") {
      const index =
        ProjectsCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setProjectsCompArray((ProjectsCompArray) => {
        const newArray = [...ProjectsCompArray];
        newArray.splice(
          index,
          0,
          <ProjectsComponent
            key={ProjectsCompArray.length + 1 + Math.random() + new Date()}
            id={String(ProjectsCompArray.length + 1 + Math.random())}
          ></ProjectsComponent>
        );
        return newArray;
      });
      return;
    }

    if (id === "achievements") {
      const index =
        AchievementsCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setAchievementsCompArray((AchievementsCompArray) => {
        const newArray = [...AchievementsCompArray];
        newArray.splice(
          index,
          0,
          <AchievementsComponent
            key={AchievementsCompArray.length + 1 + Math.random() + new Date()}
            id={String(AchievementsCompArray.length + 1 + Math.random())}
          ></AchievementsComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "references") {
      const index =
        ReferencesCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setReferencesCompArray((ReferencesCompArray) => {
        const newArray = [...ReferencesCompArray];
        newArray.splice(
          index,
          0,
          <ReferencesComponent
            key={ReferencesCompArray.length + 1 + Math.random() + new Date()}
            id={String(ReferencesCompArray.length + 1 + Math.random())}
          ></ReferencesComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "certificates") {
      const index =
        CertificatesCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setCertificatesCompArray((CertificatesCompArray) => {
        const newArray = [...CertificatesCompArray];
        newArray.splice(
          index,
          0,
          <CertificatesComponent
            key={CertificatesCompArray.length + 1 + Math.random() + new Date()}
            id={String(CertificatesCompArray.length + 1 + Math.random())}
          ></CertificatesComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "technical") {
      const index =
        TechnicalCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setTechnicalCompArray((TechnicalCompArray) => {
        const newArray = [...TechnicalCompArray];
        newArray.splice(
          index,
          0,
          <TechnicalComponent
            key={TechnicalCompArray.length + 1 + Math.random() + new Date()}
            id={String(TechnicalCompArray.length + 1 + Math.random())}
          ></TechnicalComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "publication") {
      const index =
        PublicationCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setPublicationCompArray((PublicationCompArray) => {
        const newArray = [...PublicationCompArray];
        newArray.splice(
          index,
          0,
          <PublicationComponent
            key={PublicationCompArray.length + 1 + Math.random() + new Date()}
            id={String(PublicationCompArray.length + 1 + Math.random())}
          ></PublicationComponent>
        );
        return newArray;
      });
      return;
    }
    if (id === "volunteer") {
      const index =
        VolunteerCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setVolunteerCompArray((VolunteerCompArray) => {
        const newArray = [...VolunteerCompArray];
        newArray.splice(
          index,
          0,
          <VolunteerComponent
            key={VolunteerCompArray.length + 1 + Math.random() + new Date()}
            id={String(VolunteerCompArray.length + 1 + Math.random())}
          ></VolunteerComponent>
        );
        return newArray;
      });
      return;
    }

    if (id === "interests") {
      const index =
        InterestsCompArray.findIndex((el) => el.props.id == SelectedId) + 1;
      setInterestsCompArray((InterestsCompArray) => {
        const newArray = [...InterestsCompArray];
        newArray.splice(
          index,
          0,
          <InterestsComponent
            key={InterestsCompArray.length + 1 + Math.random() + new Date()}
            id={String(InterestsCompArray.length + 1 + Math.random())}
          ></InterestsComponent>
        );
        console.log('newArray: ', newArray);
        return newArray;
      });
      return;
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
  const handleDeleteField = (id, List, setList, index, SelectedId) => {
    if (id === "organisation") {
      if (OrganisationCompArray.length !== 0) {
        setOrganisationCompArray([
          ...OrganisationCompArray.filter((el) => el.props.id !== SelectedId),
        ]);
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "skills") {
      if (SkillsCompArray.length !== 0) {
        setSkillsCompArray([
          ...SkillsCompArray.filter((el) => el.props.id != SelectedId),
        ]);
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "awards") {
      if (AwardsCompArray.length !== 0) {
        setAwardsCompArray([
          ...AwardsCompArray.filter((el) => el.props.id != SelectedId),
        ]);
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "softskills") {
      if (SoftSkillsCompArray.length !== 0) {
        setSoftSkillsCompArray([
          ...SoftSkillsCompArray.filter((el) => el.props.id != SelectedId),
        ]);
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "causes") {
      if (CausesCompArray.length !== 0) {
        setCausesCompArray([
          ...CausesCompArray.filter((el) => el.props.id != SelectedId),
        ]);
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "language") {
      if (LanProfCompArray.length !== 0) {
        setLanProfCompArray([
          ...LanProfCompArray.filter((el) => el.props.id != SelectedId),
        ]);
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "technical") {
      if (TechnicalCompArray.length !== 0) {
        setTechnicalCompArray(
          TechnicalCompArray.filter((el) => el.props.id != SelectedId)
        );
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }

    if (id === "volunteer") {
      if (VolunteerCompArray.length !== 0) {
        setVolunteerCompArray(
          VolunteerCompArray.filter((el) => el.props.id != SelectedId)
        );
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "references") {
      if (ReferencesCompArray.length !== 0) {
        setReferencesCompArray(
          ReferencesCompArray.filter((el) => el.props.id != SelectedId)
        );
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "conference") {
      if (ConferenceCompArray.length !== 0) {
        setConferenceCompArray(
          ConferenceCompArray.filter((el) => el.props.id != SelectedId)
        );
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "publication") {
      if (PublicationCompArray.length !== 0) {
        setPublicationCompArray(
          PublicationCompArray.filter((el) => el.props.id != SelectedId)
        );
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
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "education") {
      if (EducationCompArray.length !== 0) {
        
        
        setEducationCompArray(
          EducationCompArray.filter((el) => el.props.id !== SelectedId)
        );
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "teaching") {
      if (TeachingCompArray.length !== 0) {
        setTeachingCompArray(
          TeachingCompArray.filter((el) => el.props.id != SelectedId)
        );
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "workExperience") {
      if (WorkCompArray.length !== 0) {
        setWorkCompArray(
          WorkCompArray.filter((el) => el.props.id !== SelectedId)
        );
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }

    if (id === "personalProject") {
      if (ProjectsCompArray.length !== 0) {
        setProjectsCompArray(
          ProjectsCompArray.filter((el) => el.props.id != SelectedId)
        );
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }

    if (id === "achievements") {
      if (AchievementsCompArray.length !== 0) {
        setAchievementsCompArray(
          AchievementsCompArray.filter((el) => el.props.id != SelectedId)
        );
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
    if (id === "interests") {
      if (InterestsCompArray.length !== 0) {
        setInterestsCompArray(
          InterestsCompArray.filter((el) => el.props.id != SelectedId)
        );
      } else {
        DeleteComponent(List, setList, index);
      }
      return;
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          overflowAnchor: "none",
        }}
        className={`bg-white ${
          USFormat ? "w-[75.75rem]" : "w-[73.875rem]"
        }  my-5 min-h-screen ${Font} rounded-md`}
      >
        <div className="flex justify-between flex-row-reverse space-x-7 p-7 bg-[#313c4e] ">
          {/* Profile Pic */}
          {Picture ? <ProfileImage></ProfileImage> : null}

          {/* Current Title */}
          <div
            className={`flex flex-col space-y-3 relative ${
              Title || Picture ? null : "text-primary"
            }  `}
          >
            <div className="relative">
              <span className="flex cursor-pointer">
                <h1
                  onClick={() => {
                    setshowInfoEditModal(true);
                  }}
                  className={`text-white  text-[32px] font-bold`}
                >
                  {user_data && user_data.first_name}{" "}
                  {user_data && user_data.last_name}
                </h1>
              </span>
              <UserInfoEdit
                showLayoutModal={showInfoEditModal}
                setshowLayoutModal={setshowInfoEditModal}
              ></UserInfoEdit>
            </div>

            <div className="flex gap-5 relative">
              {Title && (
                <>
                  {" "}
                  <div
                    className={` w-12 h-[7rem] ${
                      ShowCurrentTitleMd ? "" : "hidden"
                    }  bg-[#425061] rounded-lg settings absolute left-[-65px] top-[-38px] `}
                    id={`titlemenu`}
                  >
                    <div className={`flex flex-col space-y-4 relative`}>
                      <span className="mt-1 rounded-full w-6 h-6 bg-[#425061] font-bold border mx-auto border-white border-solid pb-4 pl-[0.35rem] text-white cursor-pointer hover:text-primary2 hover:border-primary2">
                        ?
                      </span>
                      <span className=" mx-auto  cursor-pointer hover:text-primary2">
                        <Bulb></Bulb>
                      </span>
                      <span
                        className="mx-auto mt-2 cursor-pointer hover:text-primary2 trashicon"
                        onClick={() => setTitle(false)}
                      >
                        <FontAwesomeIcon
                          className="text-white"
                          icon={faTrash}
                        ></FontAwesomeIcon>
                      </span>
                    </div>
                  </div>
                  <input
                    type="text"
                    onFocus={(e) => {
                      setShowCurrentTitleMd(true);
                      e.target.classList.add("input-underline");
                    }}
                    onBlur={(e) => {
                      e.target.classList.remove("input-underline");
                    }}
                    placeholder="Current title"
                    className={`border border-white ${
                      FontSize == "md"
                        ? "text-[24px]"
                        : FontSize == "sm"
                        ? "text-[22px]"
                        : "text-[26px]"
                    } text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:${
                      FontSize == "md"
                        ? "text-[24px]"
                        : FontSize == "sm"
                        ? "text-[22px]"
                        : "text-[26px]"
                    } `}
                    ref={title}
                  />
                </>
              )}
            </div>

            {/* Contact Info */}

            {/* Summary */}
            {Summary && (
              <div className="flex space-x-2 gap-5  mt-5 items-center settings relative">
                <div
                  className={` w-12 h-[7rem] ${
                    showSummarySettings ? "" : "hidden"
                  }  bg-[#425061] rounded-lg absolute left-[-60px] top-[-38px] `}
                  id={`summarymenu`}
                  onClick={() => setshowSummarySettings(true)}
                >
                  <div className={`flex flex-col space-y-4 relative`}>
                    <span className="mt-1 rounded-full w-6 h-6 bg-[#425061] font-bold border mx-auto border-white border-solid pb-4 pl-[0.35rem] text-white cursor-pointer hover:border-primary2 hover:text-primary2">
                      ?
                    </span>
                    <span className=" mx-auto  cursor-pointer hover:text-primary2">
                      <Bulb></Bulb>
                    </span>
                    <span
                      className="mx-auto mt-2 cursor-pointer hover:text-primary2 trashicon"
                      onClick={() => setSummary(false)}
                    >
                      <FontAwesomeIcon
                        className="text-white"
                        icon={faTrash}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                </div>

                <textarea
                  ref={pitch}
                  type="text"
                  maxLength="300"
                  onFocus={(e) => {
                    setshowSummarySettings(true);
                    e.target.classList.add("input-underline");
                  }}
                  onBlur={(e) => {
                    e.target.classList.remove("input-underline");
                  }}
                  className={`${
                    FontSize == "md"
                      ? "text-[18px]"
                      : FontSize == "sm"
                      ? "text-[16px]"
                      : "text-[20px]"
                  } overflow-hidden resize-none border border-white w-[50rem] focus:outline-none placeholder:text-white placeholder:${
                    FontSize == "md"
                      ? "text-[18px]"
                      : FontSize == "sm"
                      ? "text-[16px]"
                      : "text-[20px]"
                  } `}
                  placeholder="Short and engaging you pitch about yourself"
                />
              </div>
            )}
          </div>
        </div>
        <div
          className="flex  justify-center py-4 cursor-pointer bg-[#12232d] "
          onClick={() => setshowInfoEditModal(true)}
        >
          <div className="flex  w-[40%] flex-col space-y-4 cursor-pointer">
            {/* Email */}
            {ContactInfo?.email?.value && ContactInfo?.email?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={`text-white ${
                      FontSize == "md"
                        ? "text-[18px]"
                        : FontSize == "sm"
                        ? "text-[16px]"
                        : "text-[20px]"
                    }`}
                  ></FontAwesomeIcon>
                </span>
                <h1
                  className={`text-white ${
                    FontSize == "md"
                      ? "text-[18px]"
                      : FontSize == "sm"
                      ? "text-[16px]"
                      : "text-[20px]"
                  }`}
                >
                  {ContactInfo && ContactInfo?.email?.value}
                </h1>
              </div>
            ) : null}
            {/* Phone */}
            {ContactInfo?.phone?.value && ContactInfo?.phone?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className={`text-white ${
                      FontSize == "md"
                        ? "text-[18px]"
                        : FontSize == "sm"
                        ? "text-[16px]"
                        : "text-[20px]"
                    }`}
                  ></FontAwesomeIcon>
                </span>
                <h1
                  className={`text-white ${
                    FontSize == "md"
                      ? "text-[18px]"
                      : FontSize == "sm"
                      ? "text-[16px]"
                      : "text-[20px]"
                  }`}
                >
                  {ContactInfo && ContactInfo?.phone?.value}
                </h1>
              </div>
            ) : null}
            {/* Phone */}
            {ContactInfo?.birthday?.day &&
            ContactInfo?.birthday?.month &&
            ContactInfo?.birthday?.year &&
            ContactInfo?.birthday?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className={`text-white ${
                      FontSize == "md"
                        ? "text-[18px]"
                        : FontSize == "sm"
                        ? "text-[16px]"
                        : "text-[20px]"
                    }`}
                  ></FontAwesomeIcon>
                </span>
                <h1
                  className={`text-white ${
                    FontSize == "md"
                      ? "text-[18px]"
                      : FontSize == "sm"
                      ? "text-[16px]"
                      : "text-[20px]"
                  }`}
                >
                  {ContactInfo && ContactInfo?.birthday.day}{" "}
                  {ContactInfo?.birthday.month}, {ContactInfo?.birthday.year}
                </h1>
              </div>
            ) : null}
            {/* Country */}
            {ContactInfo?.country?.value && ContactInfo?.country?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faMap}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.country?.value}
                </h1>
              </div>
            ) : null}
            {/* City */}
            {ContactInfo?.city?.value && ContactInfo?.city?.visible ? (
              <div className="flex space-x-3">
                <span>
                  <FontAwesomeIcon
                    icon={faCity}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.city?.value}
                </h1>
              </div>
            ) : null}
            {/* Address */}
            {ContactInfo?.address?.value && ContactInfo?.address?.visible ? (
              <div className="flex  space-x-3" style={{ width: 300 }}>
                <span>
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white `}>
                  {ContactInfo && ContactInfo?.address?.value}
                </h1>
              </div>
            ) : null}
            {/* Website */}
            {ContactInfo?.website?.value && ContactInfo?.website?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.website?.value}
                </h1>
              </div>
            ) : null}
            {/* LinkedIn */}
            {ContactInfo?.linkedin?.value && ContactInfo?.linkedin?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.linkedin?.value}
                </h1>
              </div>
            ) : null}
            {/* Twitter */}
            {ContactInfo?.twitter?.value && ContactInfo?.twitter?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.twitter?.value}
                </h1>
              </div>
            ) : null}
          </div>
          <div className="flex  w-[40%] ml-14 flex-col space-y-4 cursor-pointer">
            {/* Quora */}
            {ContactInfo?.quora?.value && ContactInfo?.quora?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faQuora}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.quora?.value}
                </h1>
              </div>
            ) : null}
            {/* Skype */}
            {ContactInfo?.skype?.value && ContactInfo?.skype?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faSkype}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.skype?.value}
                </h1>
              </div>
            ) : null}
            {/* Facebook */}
            {ContactInfo?.facebook?.value && ContactInfo?.facebook?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.facebook?.value}
                </h1>
              </div>
            ) : null}
            {/* Github */}
            {ContactInfo?.github?.value && ContactInfo?.github?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.github?.value}
                </h1>
              </div>
            ) : null}
            {/* Medium */}
            {ContactInfo?.medium?.value && ContactInfo?.medium?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faMedium}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.medium?.value}
                </h1>
              </div>
            ) : null}
            {/* StackOverFlow */}
            {ContactInfo?.stackoverflow?.value &&
            ContactInfo?.stackoverflow?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faStackOverflow}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.stackoverflow?.value}
                </h1>
              </div>
            ) : null}
            {/* Instagram */}
            {ContactInfo?.instagram?.value &&
            ContactInfo?.instagram?.visible ? (
              <div className="flex space-x-3 ">
                <span>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={`text-white text-lg`}
                  ></FontAwesomeIcon>
                </span>
                <h1 className={`text-white`}>
                  {ContactInfo && ContactInfo?.instagram?.value}
                </h1>
              </div>
            ) : null}
          </div>
        </div>

        {/* Attributes */}

        {/* Attributes */}

        <div className="flex w-full space-x-20 mx-3 pt-4 pb-40">
          {/* Column-1 */}
          <div className="flex flex-col w-[45%] space-y-7">
            {List1.map((item, index) => {
              return (
                <div
                  className={`flex space-x-2  ${
                    item.display === "show" ? "" : "hidden"
                  }`}
                  id={item.id}
                  ref={addreflist1}
                  key={item.id}
                >
                  <div className="relative">
                    <div
                      className={`hidden w-12 ${
                        item.settings ? "h-[auto] " : "h-[auto] "
                      } bg-[#425061] rounded-lg absolute left-[-60px] settings`}
                      id={`${item.id}menu`}
                    >
                      <div className={`flex flex-col relative`}>
                        <span
                          className="bg-primary rounded-full w-8 h-8 mx-auto my-2 cursor-pointer hover:text-primary2"
                          onClick={() => handleNewField(item.id, SelectedId)}
                        >
                          <FontAwesomeIcon
                            className="text-white p-[0.5rem]"
                            icon={faAdd}
                          ></FontAwesomeIcon>
                        </span>

                        {item.settings && (
                          <span
                            className=" mx-auto  mb-1  cursor-pointer hover:text-primary2 "
                            onClick={() => setSettingsModal(true)}
                          >
                            <Settings></Settings>
                          </span>
                        )}
                        {TitleSetting && (
                          <>
                            <span
                              className={`mx-auto pb-2 mt-1 mb-3 h-6 w-6 border  border-dashed rounded-full  ${
                                disabledButtonUp(item.id, SelectedId)
                                  ? "disabled-arrow border-grey"
                                  : "hover:border-primary2 border-white cursor-pointer"
                              }`}
                              onClick={() => {
                                handleMoveComp(SelectedId, item.id, "up");
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faArrowUp}
                                className="text-white hover:text-primary2 px-[0.30rem]"
                              ></FontAwesomeIcon>
                            </span>
                            <span
                              className={`mx-auto h-6 w-6 border pb-2 mb-2 border-dashed rounded-full  ${
                                disabledButtonDown(item.id, SelectedId)
                                  ? "disabled-arrow border-grey"
                                  : "hover:border-primary2 border-white cursor-pointer"
                              }`}
                              onClick={() =>
                                handleMoveComp(SelectedId, item.id, "down")
                              }
                            >
                              <FontAwesomeIcon
                                icon={faArrowDown}
                                className="text-white hover:text-primary2 px-[0.30rem]"
                              ></FontAwesomeIcon>
                            </span>
                          </>
                        )}
                        <span className=" mx-auto pb-1 cursor-pointer my-1 hover:text-primary2">
                          <MyContents></MyContents>
                        </span>
                        <span className="rounded-full pb-1 w-6 h-6 my-2 bg-[#425061] font-bold border mx-auto border-white border-solid pb-4 pl-[0.35rem] text-white cursor-pointer hover:text-primary2  hover:border-primary2">
                          ?
                        </span>
                        <span
                          className=" mx-auto pb-1  cursor-pointer my-1 hover:text-primary2"
                          onClick={() => setInstruction(true)}
                        >
                          <Bulb></Bulb>
                        </span>
                        {TitleSetting && (
                          <>
                            <span
                              className="mx-auto pb-1 my-1 cursor-pointer hover:text-primary2 trashicon"
                              onClick={() =>
                                handleDeleteField(
                                  item.id,
                                  List1,
                                  setList1,
                                  index,
                                  SelectedId
                                )
                              }
                            >
                              <FontAwesomeIcon
                                className="text-white hover:!text-[red]"
                                icon={faTrash}
                              ></FontAwesomeIcon>
                            </span>
                          </>
                        )}
                        {/* InstructionModal */}
                        {Instruction ? (
                          <div id={`${item.id}InsModal`}>
                            <div
                              className={`flex flex-col absolute  w-[600px] h-[550px] ${
                                item.settings ? "-top-7" : "-top-10"
                              } space-y-5 left-[4.2rem] bubbleLeft  after:top-[40%]  inset-0 z-50 outline-none focus:outline-none`}
                              key={item.id}
                            >
                              {item.instructionModal &&
                                item.instructionModal[0]}
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </div>
                        ) : null}

                        {/* SettingsModal */}
                        {SettingsModal ? (
                          <div id={`${item.id}SettingsModal`}>
                            <div
                              className={`flex flex-col absolute  w-[450px] ${
                                item.id === "skills" ||
                                item.id === "causes" ||
                                item.id === "softskills" ||
                                item.id === "interests"
                                  ? "h-[300px]"
                                  : item.id === "language"
                                  ? "h-[300px]"
                                  : "h-[150px]"
                              } -top-1 space-y-5 left-[4.2rem] bubbleLeft ${
                                item.id === "skills" ||
                                item.id === "causes" ||
                                item.id === "softskills" ||
                                item.id === "interests"
                                  ? "after:top-[28%]"
                                  : item.id === "language"
                                  ? "after:top-[26%]"
                                  : "after:top-[50%]"
                              }  inset-0 z-50 outline-none focus:outline-none`}
                              key={item.id}
                            >
                              {item.settingsModal && item.settingsModal[0]}
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col space-y-3 w-full h-full ${item.id}`}
                    onClick={(e) => handleOnClick(e, item.id)}
                  >
                    {item.content.map((content) => {
                      return content;
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column-2 */}
          <div className="flex flex-col space-y-7 w-[45%]">
            {List2.map((item, index) => {
              return (
                <div
                  className={`flex space-x-2 ${
                    item.display === "show" ? "" : "hidden"
                  }`}
                  id={item.id}
                  ref={addreflist2}
                  key={index}
                >
                  <div
                    className={`flex flex-col space-y-3 w-full h-full ${item.id}`}
                    onClick={(e) => handleOnClick(e, item.id, index)}
                  >
                    {item.content.map((content) => {
                      return content;
                    })}
                  </div>
                  <div className="relative">
                    <div
                      className={`hidden w-12 ${
                        item.settings ? "h-[auto] " : "h-[auto] "
                      } bg-[#425061] rounded-lg absolute z-10 right-[-70px] settings`}
                      id={`${item.id}menu`}
                    >
                      <div className={`flex flex-col relative`}>
                        <span
                          className="bg-primary rounded-full w-8 h-8 mx-auto my-2 cursor-pointer hover:text-primary2"
                          onClick={() => handleNewField(item.id, SelectedId)}
                        >
                          <FontAwesomeIcon
                            className="text-white p-[0.5rem]"
                            icon={faAdd}
                          ></FontAwesomeIcon>
                        </span>

                        {item.settings && (
                          <span
                            className=" mx-auto  mb-1  cursor-pointer hover:text-primary2 "
                            onClick={() => setSettingsModal(true)}
                          >
                            <Settings></Settings>
                          </span>
                        )}
                        {TitleSetting && (
                          <>
                            <span
                              className={`mx-auto pb-2 mt-1 mb-3 h-6 w-6 border  border-dashed rounded-full  ${
                                disabledButtonUp(item.id, SelectedId)
                                  ? "disabled-arrow border-grey"
                                  : "hover:border-primary2 border-white cursor-pointer"
                              }`}
                              onClick={() => {
                                handleMoveComp(SelectedId, item.id, "up");
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faArrowUp}
                                className="text-white hover:text-primary2 px-[0.30rem]"
                              ></FontAwesomeIcon>
                            </span>
                            <span
                              className={`mx-auto h-6 w-6 border pb-2 mb-2 border-dashed rounded-full  ${
                                disabledButtonDown(item.id, SelectedId)
                                  ? "disabled-arrow border-grey"
                                  : "hover:border-primary2 border-white cursor-pointer"
                              }`}
                              onClick={() =>
                                handleMoveComp(SelectedId, item.id, "down")
                              }
                            >
                              <FontAwesomeIcon
                                icon={faArrowDown}
                                className="text-white hover:text-primary2 px-[0.30rem]"
                              ></FontAwesomeIcon>
                            </span>
                          </>
                        )}
                        <span className=" mx-auto pb-1 cursor-pointer my-1 hover:text-primary2">
                          <MyContents></MyContents>
                        </span>
                        <span className="rounded-full pb-1 w-6 h-6 my-2 bg-[#425061] font-bold border mx-auto border-white border-solid pb-4 pl-[0.35rem] text-white cursor-pointer hover:text-primary2  hover:border-primary2">
                          ?
                        </span>
                        <span
                          className=" mx-auto pb-1  cursor-pointer my-1 hover:text-primary2"
                          onClick={() => setInstruction(true)}
                        >
                          <Bulb></Bulb>
                        </span>
                        {TitleSetting && (
                          <>
                            <span
                              className="mx-auto pb-1 my-1 cursor-pointer hover:text-primary2 trashicon"
                              onClick={() => {
                                return handleDeleteField(
                                  item.id,
                                  List2,
                                  setList2,
                                  index,
                                  SelectedId
                                );
                              }}
                            >
                              <FontAwesomeIcon
                                className="text-white hover:!text-[red]"
                                icon={faTrash}
                              ></FontAwesomeIcon>
                            </span>
                          </>
                        )}
                        {/* InstructionModal */}
                        {Instruction ? (
                          <div id={`${item.id}InsModal`}>
                            <div
                              className={`flex flex-col absolute  w-[600px] h-[550px] space-y-5  ${
                                item.settings ? "-top-7" : "-top-10"
                              } -left-[39rem] bubbleRight   after:top-[40%]  inset-0 z-50 outline-none focus:outline-none`}
                              key={item.id}
                            >
                              {item.instructionModal &&
                                item.instructionModal[0]}
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </div>
                        ) : null}

                        {/* Settings Modal */}
                        {SettingsModal ? (
                          <div id={`${item.id}SettingsModal`}>
                            <div
                              className={`flex flex-col absolute  w-[500px] ${
                                item.id === "skills" ||
                                item.id === "causes" ||
                                item.id === "softskills" ||
                                item.id === "interests"
                                  ? "h-[300px]"
                                  : item.id === "language"
                                  ? "h-[300px]"
                                  : "h-[150px]"
                              } -top-1 space-y-5 left-[-33rem] bubbleRight ${
                                item.id === "skills" ||
                                item.id === "causes" ||
                                item.id === "softskills" ||
                                item.id === "interests"
                                  ? "after:top-[28%]"
                                  : item.id === "language"
                                  ? "after:top-[26%]"
                                  : "after:top-[50%]"
                              }  inset-0 z-50 outline-none focus:outline-none`}
                              key={item.id}
                            >
                              {item.settingsModal && item.settingsModal[0]}
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
