import { useState } from "react";
import AuthForm from "./AuthForm/AuthForm";
import AuthButtonsContext from "./Contexts/AuthButtonsContext";
import SideBar from "./SideBar/SideBar";
import Tasks from "./Tasks/Tasks.jsx";
import Goals from "./Goals/Goals.jsx";
import Habits from "./Habits/Habits.jsx";
import Profile from "./Profile/Profile.jsx";
import NavBtnCtx from "./Contexts/NavBtnCtx.jsx";
import { TaskWrapper } from "./Contexts/TasksContext";
import GoalsWrapper from "./Contexts/GoalsContext";
import HabitsWrapper from "./Contexts/HabitsCtx";
import ThemeProvider from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";
import ProfileWrapper from "./Contexts/ProfileCtx";

const DATE = new Date();

function App() {
  // States
  const [activeForm, setActiveForm] = useState("login");
  const [activePage, setActivePage] = useState({
    authPage: true,
    tasks: false,
    goals: false,
    habits: false,
    profile: false,
  });

  const [memberHistory, setMemberHistory] = useState();
  // End of states

  // Functions

  // Set member history after sign up
  function handleSignUpClick() {
    setMemberHistory(DATE);
    setActiveForm("login");
  }
  // Display login or sign up page
  function handleActiveClick(pageName) {
    setActiveForm(pageName.toLowerCase());
  }

  // Display dash board page and hide auth page
  function displayPage(page) {
    setActivePage((prevPages) => {
      return {
        authPage: false,
        tasks: false,
        goals: false,
        habits: false,
        profile: false,
        authPage: false,
        [page]: true,
      };
    });
  }
  // End of functions

  // Context values

  // Auth buttons context value
  const authCtxValue = {
    onActiveFormClick: handleActiveClick,
    activeAuth: activeForm,
    activePage: displayPage,
    handleSignUp: handleSignUpClick,
    memberHistory: memberHistory,
  };

  // Nav buttons context value
  const navBtnCtxValue = {
    setActivePage: displayPage,
  };
  // End of context values

  // Component structure
  return (
    <>
      <ThemeProvider>
        {/* Side bar */}
        <NavBtnCtx value={navBtnCtxValue}>
          {!activePage.authPage && (
            <SideBar activePage={activePage} onLogoutClick={displayPage} />
          )}
        </NavBtnCtx>

        {/* Authentication page */}
        <AuthButtonsContext value={authCtxValue}>
          {activePage.authPage && <AuthForm />}

          {/* Display the correct page based on a state each one alone to avoid unmounting components (which nav button was clicked) */}

          {/* Tasks */}
          <TaskWrapper>
            {activePage.tasks && <Tasks></Tasks>}

            {/* Profile */}
            <GoalsWrapper>
              <HabitsWrapper>
                {activePage.habits && <Habits></Habits>}
                <ProfileWrapper>
                  {activePage.profile && <Profile></Profile>}
                </ProfileWrapper>
              </HabitsWrapper>

              {/* Goals */}
              {activePage.goals && <Goals></Goals>}
            </GoalsWrapper>
          </TaskWrapper>
        </AuthButtonsContext>

        {/* Habits */}
      </ThemeProvider>
    </>
  );
}

export default App;
