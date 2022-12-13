const Ring = (props) => {
    return (
    <div className={props.timerFinished === false ? "ring" : "ring ending"}>
      <svg width="518" height="518" viewBox="0 0 518 518">
        <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
      </svg>
    </div>
    )
}

export default Ring;