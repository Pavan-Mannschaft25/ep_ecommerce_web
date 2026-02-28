import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import Button from "../common/Button";
import { FiLogOut, FiUser } from "react-icons/fi";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, partnerType } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">
            {title || "EatProtein Partner Portal"}
          </h1>
          {partnerType && (
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {partnerType.charAt(0).toUpperCase() + partnerType.slice(1)}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FiUser className="text-lg" />
            <span className="hidden sm:block">{user?.full_name || "User"}</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-white hover:bg-white/20 border-white/20"
          >
            <FiLogOut className="text-lg" />
            <span className="hidden sm:block ml-2">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
