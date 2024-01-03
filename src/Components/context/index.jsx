import { createContext } from "react";

const TimeSheetContext = createContext();
// eslint-disable-next-line react/prop-types
const TimeSheetProvider = ({children}) => {

    return <TimeSheetContext.Provider>
        {children}
    </TimeSheetContext.Provider>
};
