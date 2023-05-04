import './ProfileHeading.css';
import EditProfileButton from '../components/EditProfileButton';


export default function ProfileHeading(props) {
  return (
    <div className='activity_feed_heading profile_heading'>
        <div className='title'>{props.profile.display_name}</div>
        <div className="cruds_count">{props.profile.crud_count} Cruds</div>

        <div className="avatar"></div>
            <img src="https://assets.verainvestmentsllc.com/avatars/data.jpg"></img>

        <div className='display_name'>{props.display}</div>

        <div className='handle'>@{props.handle}</div>

        <EditProfileButton setPopped={props.setPopped} />


     
    </div>
    
  );
}