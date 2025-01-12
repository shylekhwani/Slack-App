import { combineContext } from "@/utils/combineContext";

import { AuthContextProvider } from "./AuthContext/authContextProvider";
import { CreateChannelContextProvider } from "./ChannelContext/createChannelContext";
import { CreateWorkspaceContextProvider } from "./WorkspaceContext/CreateWorkspaceContext";
import { WorkspaceContextProvider } from "./WorkspaceContext/WorkspaceContext";
import { WorkspacePreferenceModalProvider } from "./WorkspacePreferenceModalContext/WorkspacePreferenceModalContext";


export const CombinedContextProvider = combineContext(
    AuthContextProvider,
    WorkspaceContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferenceModalProvider,
    CreateChannelContextProvider
);