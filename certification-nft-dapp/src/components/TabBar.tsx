import {
  Award,
  CheckSquare,
  Grid3X3,
  Home as HomeIcon,
  Settings,
} from "lucide-react";

interface TabBarProps {
  isDarkMode: boolean;
  activeTab: string;
  handleTabChange: (tab: string) => void;
}

export function TabBar({
  isDarkMode,
  activeTab,
  handleTabChange,
}: TabBarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-purple-900 via-purple-800 to-purple-700 backdrop-blur-xl safe-area-inset-bottom">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-around">
          {/* Home Tab */}
          <button
            onClick={() => handleTabChange("home")}
            className={`flex flex-col items-center justify-center transition-all duration-300 relative ${
              activeTab === "home"
                ? "text-white"
                : "text-purple-300 hover:text-purple-200"
            }`}
          >
            {activeTab === "home" && (
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/50" />
            )}
            <div className={`relative z-10 flex flex-col items-center p-2 rounded-full transition-all duration-300 ${
              activeTab !== "home" ? "hover:bg-purple-600/30" : ""
            }`}>
              <HomeIcon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Home</span>
            </div>
          </button>

          {/* Tasks Tab */}
          <button
            onClick={() => handleTabChange("tasks")}
            className={`flex flex-col items-center justify-center transition-all duration-300 relative ${
              activeTab === "tasks"
                ? "text-white"
                : "text-purple-300 hover:text-purple-200"
            }`}
          >
            {activeTab === "tasks" && (
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/50" />
            )}
            <div className={`relative z-10 flex flex-col items-center p-2 rounded-full transition-all duration-300 ${
              activeTab !== "tasks" ? "hover:bg-purple-600/30" : ""
            }`}>
              <CheckSquare className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Tasks</span>
            </div>
          </button>

          {/* Gallery Tab */}
          <button
            onClick={() => handleTabChange("gallery")}
            className={`flex flex-col items-center justify-center transition-all duration-300 relative ${
              activeTab === "gallery"
                ? "text-white"
                : "text-purple-300 hover:text-purple-200"
            }`}
          >
            {activeTab === "gallery" && (
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/50" />
            )}
            <div className={`relative z-10 flex flex-col items-center p-2 rounded-full transition-all duration-300 ${
              activeTab !== "gallery" ? "hover:bg-purple-600/30" : ""
            }`}>
              <Grid3X3 className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Gallery</span>
            </div>
          </button>

          {/* Admin Tab */}
          <button
            onClick={() => handleTabChange("admin")}
            className={`flex flex-col items-center justify-center transition-all duration-300 relative ${
              activeTab === "admin"
                ? "text-white"
                : "text-purple-300 hover:text-purple-200"
            }`}
          >
            {activeTab === "admin" && (
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/50" />
            )}
            <div className={`relative z-10 flex flex-col items-center p-2 rounded-full transition-all duration-300 ${
              activeTab !== "admin" ? "hover:bg-purple-600/30" : ""
            }`}>
              <Settings className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Admin</span>
            </div>
          </button>

          {/* Rewards Tab */}
          <button
            onClick={() => handleTabChange("rewards")}
            className={`flex flex-col items-center justify-center transition-all duration-300 relative ${
              activeTab === "rewards"
                ? "text-white"
                : "text-purple-300 hover:text-purple-200"
            }`}
          >
            {activeTab === "rewards" && (
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/50" />
            )}
            <div className={`relative z-10 flex flex-col items-center p-2 rounded-full transition-all duration-300 ${
              activeTab !== "rewards" ? "hover:bg-purple-600/30" : ""
            }`}>
              <Award className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Rewards</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
