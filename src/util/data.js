export const taskCards = [
  {
    id: 1,
    condition: "total",
    title: "Total tasks",
    icon: "fa-chart-column",
    iconColor: "text-emerald-500",
    bgColor: "",
  },
  {
    id: 2,
    condition: "completed",
    title: "Completed",
    icon: "fa-check",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-100",
  },
  {
    id: 3,
    condition: "pending",
    title: "Pending",
    icon: "fa-spinner",
    iconColor: "text-amber-500",
    bgColor: "",
  },
];

export const goalCards = [
  {
    id: 1,
    condition: "total",
    title: "Total Goals",
    icon: "fa-bullseye",
    iconColor: "text-emerald-500",
    bgColor: "",
  },
  {
    id: 2,
    condition: "avgProgress",
    title: "Avg Progress",
    icon: "fa-trophy",
    iconColor: "text-amber-500",
    bgColor: "",
  },
  {
    id: 3,
    condition: "completed",
    title: "Completed",
    icon: "fa-check",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-100",
  },
];

export const habitCards = [
  {
    id: 1,
    condition: "total",
    title: "Total Habits",
    icon: "fa-arrow-trend-up",
    iconColor: "text-emerald-500",
    bgColor: "",
  },
  {
    id: 2,
    condition: "streaks",
    title: "Total Streaks",
    icon: "fa-fire",
    iconColor: "text-amber-500",
    bgColor: "",
  },
];

export const taskFilterBtns = [
  { id: 1, title: "All", value: "all" },
  { id: 2, title: "Today", value: "today" },
  { id: 3, title: "Completed", value: "completed" },
  { id: 4, title: "Pending", value: "pending" },
];

export const navBtns = [
  {
    id: "1",
    title: "Tasks",
    faIcon: "fa-solid fa-list-check",
    path: "/tasks",
  },
  {
    id: "2",
    title: "Goals",
    faIcon: "fa-solid fa-bullseye",
    path: "/goals",
  },
  {
    id: "3",
    title: "Habits",
    faIcon: "fa-solid fa-arrow-trend-up",
    path: "/habits",
  },
  {
    id: "4",
    title: "Profile",
    faIcon: "fa-regular fa-user",
    path: "/profile",
  },
];

export const loginInputs = [
  {
    uniqueId: 0,
    type: "email",
    name: "email",
    title: "email",
    required: true,
    placeholder: "email",
  },
  {
    uniqueId: 1,
    type: "password",
    name: "password",
    title: "password",
    required: true,
    placeholder: "password",
  },
];

export const signupInputs = [
  {
    uniqueId: 0,
    type: "text",
    name: "full-name",
    title: "full Name",
    required: true,
    placeholder: "name",
  },
  {
    uniqueId: 1,
    type: "email",
    name: "signup-email",
    title: "email",
    required: true,
    placeholder: "email",
  },
  {
    uniqueId: 2,
    type: "password",
    name: "signup-password",
    title: "password",
    required: true,
    placeholder: "password",
  },
];

export const authButtons = [
  {
    id: 0,
    title: "Login",
    path: "login",
  },
  {
    id: 1,
    title: "Sign Up",
    path: "signup",
  },
];

export const taskPopup = [
  {
    id: 1,
    type: "text",
    name: "title",
    title: "title",
    required: true,
    placeholder: "Task title",
  },
  {
    id: 2,
    type: "text",
    name: "description",
    title: "description",
    required: false,
    placeholder: "Task description (optional)",
  },
  {
    id: 3,
    type: "text",
    name: "category",
    title: "category",
    required: false,
    placeholder: "e.g., Work, Personal",
  },
  {
    id: 4,
    type: "date",
    name: "date",
    title: "due Date",
    required: false,
    placeholder: "",
  },
];

export const goalPopup = [
  {
    id: 1,
    type: "text",
    name: "title",
    title: "title",
    required: true,
    placeholder: "Goal title",
    inputClass: "font-semibold text-sm",
  },
  {
    id: 2,
    type: "text",
    name: "description",
    title: "description",
    required: false,
    placeholder: "Goal description (optional)",
    inputClass: "",
  },
  {
    id: 3,
    type: "date",
    name: "date",
    title: "target Date",
    required: false,
    placeholder: "",
    inputClass: "font-semibold text-sm",
  },
];

// Functions
