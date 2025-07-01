import { Outlet, Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";

export default function Profile() {
  return (
    <div>

      <ProfileCard />

      <Outlet />
    </div>
    
  );
}