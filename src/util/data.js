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
  { id: 1, title: "All", path: "" },
  { id: 2, title: "Today", path: "today" },
  { id: 3, title: "Completed", path: "completed" },
  { id: 4, title: "Pending", path: "pending" },
];

export const navBtns = [
  {
    id: "1",
    title: "Tasks",
    faIcon: "fa-solid fa-list-check",
    path: "tasks",
  },
  {
    id: "2",
    title: "Goals",
    faIcon: "fa-solid fa-bullseye",
    path: "goals",
  },
  {
    id: "3",
    title: "Habits",
    faIcon: "fa-solid fa-arrow-trend-up",
    path: "habits",
  },
  {
    id: "4",
    title: "Profile",
    faIcon: "fa-regular fa-user",
    path: "profile?type=info",
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
    uniqueId: 1,
    type: "text",
    name: "full-name",
    title: "full Name",
    required: true,
    placeholder: "name",
  },
  {
    uniqueId: 2,
    type: "email",
    name: "signup-email",
    title: "email",
    required: true,
    placeholder: "email",
  },
  {
    uniqueId: 3,
    type: "password",
    name: "signup-password",
    title: "password",
    required: true,
    placeholder: "password",
  },
];

export const forgetInputs = [
  {
    uniqueId: 1,
    type: "email",
    name: "email",
    title: "Email",
    required: true,
    placeholder: "email",
  },
];

export const inputProps = {
  title: "Email Address",
  placeholder: "email",
  labelClass: "font-semibold",
  type: "email",
  required: true,
};

export const codeInputProps = {
  title: "Verification Code",
  placeholder: "Enter 6-digit code",
  labelClass: "font-semibold",
  type: "number",
  required: true,
};

export const newPassword = {
  title: "New Password",
  placeholder: "Enter new password",
  labelClass: "font-semibold",
  type: "password",
  required: true,
};

export const confirmNewPassword = {
  title: "Confirm Password",
  placeholder: "Confirm new password",
  labelClass: "font-semibold",
  type: "password",
  required: true,
};

export const editProfileInputs = [
  {
    uniqueId: 1,
    type: "text",
    name: "name",
    title: "Name",
    required: true,
    placeholder: "name",
    icon: "fa-regular fa-user",
    inputClass: "mb-3",
  },
  {
    uniqueId: 2,
    type: "email",
    name: "email",
    title: "email",
    required: true,
    placeholder: "email",
    icon: "fa-regular fa-envelope",
    inputClass: "mb-3",
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
