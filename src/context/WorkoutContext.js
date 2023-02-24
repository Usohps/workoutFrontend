import { createContext, useReducer } from "react";
export const WorkoutContext = createContext();
export const wokoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUTS":
      return {
        workouts: [action.payload, ...state.workouts],
      };
      case "DELETE_WORKOUT":
        return{
          workouts: state.workouts.filter((workout)=>workout._id !== action.payload._id)
        };
    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wokoutReducer,{ workouts: null });

  return <WorkoutContext.Provider value={{...state, dispatch}}>{children}</WorkoutContext.Provider>;
};
