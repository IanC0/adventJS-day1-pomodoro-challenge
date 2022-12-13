const SettingsButton = (props) => {
    return(
    <button className={props.text}>
    <img src={props.image} alt="Settings" />
  </button>
    )
};

export default SettingsButton;