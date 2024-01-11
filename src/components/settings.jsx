import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import Person2Icon from "@mui/icons-material/Person2";

export default function Settings() {
  return (
    <>
      <div className="settings">
        <h3>settings</h3>
        <ul>
          <label>
            <span>
              <SettingsIcon />
            </span>
            configuration
          </label>
          <label>
            <span>
              <GroupIcon />
            </span>
            users
          </label>
          <label>
            <span>
              <LanguageIcon />
            </span>
            Language
          </label>
          <label>
            <span>
              <LocationOnIcon />
            </span>
            locations
          </label>
          <label>
            <span>
              <AccessAlarmIcon />
            </span>
            slots
          </label>
          <label>
            <span>
              <AutoAwesomeMotionIcon />
            </span>
            Strapi roles
          </label>
          <label>
            <span>
              <Person2Icon />
            </span>
            doctor labels
          </label>
          <label>
            <span>
              <LocationOnIcon />
            </span>
            mappings
          </label>
        </ul>
      </div>
    </>
  );
}
