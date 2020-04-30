export const apiUrl = "http://localhost:8000/";
export const dummyData = [
  {
    id: 1,
    name: "Finish this app",
    description: "",
    completed: false,
    parentId: null,
    type: "goal",
    difficulty: 7,
  },
  {
    id: 4,
    name: "finish the api",
    description: "",
    completed: false,
    parentId: 1,
    type: "pillar",
    difficulty: 7,
  },
  {
    id: 3,
    name: "dont yell at me",
    description: "",
    completed: true,
    parentId: null,
    type: "task",
    difficulty: 5,
  },
];
