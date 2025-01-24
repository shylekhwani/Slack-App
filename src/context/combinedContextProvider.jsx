import { combineContext } from "@/utils/combineContext";

import { AuthContextProvider } from "./AuthContext/authContextProvider";
import { CreateChannelContextProvider } from "./ChannelContext/createChannelContext";
import { ChannelMessagesProvider } from "./MessagesContext/ChannelMessages";
import { SocketContextProvider } from "./SocketContext/SocketContext";
import { CreateWorkspaceContextProvider } from "./WorkspaceContext/CreateWorkspaceContext";
import { WorkspaceContextProvider } from "./WorkspaceContext/WorkspaceContext";
import { WorkspacePreferenceModalProvider } from "./WorkspacePreferenceModalContext/WorkspacePreferenceModalContext";

export const CombinedContextProvider = combineContext(
    ChannelMessagesProvider,
    SocketContextProvider,
    AuthContextProvider,
    WorkspaceContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferenceModalProvider,
    CreateChannelContextProvider,
);