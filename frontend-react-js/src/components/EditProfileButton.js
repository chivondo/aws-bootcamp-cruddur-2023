import './EditProfileButton.css';

export default function EditProfileButton(props) {
  const pop_profile_form = (event) => {
    event.preventDefault();
    console.log('pop_profile_form')
    props.setPopped(true);
    return false;
  }

  return (
    <button onClick={pop_profile_form} className='profie-edit-button' href="#">Edit Profile</button>
  );
}
